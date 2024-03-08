const defaults = require("./defaults");
module.exports = {
  enqueueAndParse: async (z, inputDocument, apiOwner, apiName, apiVersion, headers, maxRetries) => {
    const enqueueResponse = await z.request({
      url: `https://api.mindee.net/v1/products/${apiOwner}/${apiName}/v${apiVersion}/predict_async`,
      method: 'POST',
      body: {
        'document': inputDocument
      },
      headers: headers,
    });

    const enqueueJson = JSON.parse(enqueueResponse.content);

    if (enqueueJson?.api_request?.job?.id) {
      const jobId = enqueueJson.api_request.job.id;
      let retryCount = 0;
      let parseQueuedResponse = null;
      while (retryCount < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        parseQueuedResponse = await z.request({
          url: `https://api.mindee.net/v1/products/${apiOwner}/${apiName}/v${apiVersion}/documents/queue/${jobId}`,
          method: 'GET',
          redirect: "follow",
          headers: headers,
        });

        retryCount++;
        let parseQueuedJson = JSON.parse(parseQueuedResponse.content);

        if (parseQueuedJson && parseQueuedJson?.job && parseQueuedJson.job === "completed" || parseQueuedJson.job === "failed") {
          return parseQueuedResponse;
        }
      }
    }
    if (enqueueJson?.api_request?.error && Object.keys(enqueueJson.api_request.error).length > 0) {
      throw new Error(JSON.stringify(enqueueJson.api_request.error));
    } else {
      throw new Error("Could not enqueue file properly.");
    }
  }
}