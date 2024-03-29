module.exports = {
  enqueueAndParse: async (z, inputDocument, apiOwner, apiName, apiVersion, headers, maxRetries = 60) => {
    const enqueueResponse = await z.request({
      url: `https://api.mindee.net/v1/products/${apiOwner}/${apiName}/v${apiVersion}/predict_async`,
      method: 'POST',
      body: {
        'document': inputDocument
      },
      headers: headers,
    });

    const enqueueJson = JSON.parse(enqueueResponse.content);

    let retryCount = 0;
    if (enqueueJson?.job?.id) {
      const jobId = enqueueJson.job.id;
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

        if (parseQueuedJson && parseQueuedJson?.job && parseQueuedJson.job?.status === "completed" || parseQueuedJson.job?.status === "failed") {
          return parseQueuedResponse;
        }
      }
    } else if (enqueueJson?.api_request?.error && Object.keys(enqueueJson.api_request.error).length > 0) {
      return Promise.reject(new Error(JSON.stringify(enqueueJson.api_request.error)));
    } else {
      return Promise.reject(new Error(`Could not enqueue file properly.`));
    }
  }
}