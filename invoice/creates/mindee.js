module.exports = {
  operation: { 
    inputFields: [
      { key: 'document', required: true, type: 'file' }
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/invoices/v2/predict',
        method: 'POST',
        body: {
          'document': bundle.inputData.document
        },
        headers: {
          'Authorization':  'Token {{bundle.authData.api_key}}',
          'content-type': 'application/json'
        },
      });

      return promise.then((response) => JSON.parse(response.content));
    }
  },
  key: 'Mindee_invoice',
  noun: 'Invoice',
  display: {
    label: 'Mindee Invoice Parsing',
    description:
      'Extract data from an Invoice using the Mindee Invoice Parsing API',
    hidden: false,
    important: true,
  },
};
