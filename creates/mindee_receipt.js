/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  operation: { 
    inputFields: [
      { key: 'document', required: true, type: 'file' }
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/expense_receipts/v3/predict',
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
    },
    sample:{
      "prediction": {
        "category": {
          "confidence": 1,
          "value": "food"
        },
        "date": {
          "confidence": 0.99,
          "polygon": [
            [0.539, 0.269],
            [0.693, 0.269],
            [0.693, 0.296],
            [0.539, 0.296]
          ],
          "raw": "26-01-2017",
          "value": "2017-01-26"
        },
        "locale": {
          "confidence": 0.69,
          "country": "CA",
          "currency": "CAD",
          "language": "fr",
          "value": "fr-CA"
        },
        "orientation": {
          "confidence": 0.99,
          "degrees": 0
        },
        "supplier": {
          "confidence": 0.61,
          "polygon": [
            [0.267, 0.062],
            [0.572, 0.062],
            [0.572, 0.102],
            [0.267, 0.102]
          ],
          "value": "REUBENS DELI"
        },
        "taxes": [
          {
            "code": "QST",
            "confidence": 0.78,
            "polygon": [
              [0.439, 0.606],
              [0.703, 0.606],
              [0.703, 0.633],
              [0.439, 0.633]
            ],
            "rate": null,
            "value": 1.8
          },
          {
            "code": "GST",
            "confidence": 0.31,
            "polygon": [
              [0.439, 0.578],
              [0.703, 0.578],
              [0.703, 0.604],
              [0.439, 0.604]
            ],
            "rate": null,
            "value": 0.9
          }
        ],
        "time": {
          "confidence": 0.99,
          "polygon": [
            [0.469, 0.887],
            [0.594, 0.887],
            [0.594, 0.912],
            [0.469, 0.912]
          ],
          "raw": "12:29",
          "value": "12:29"
        },
        "total_incl": {
          "confidence": 0.99,
          "polygon": [
            [0.625, 0.666],
            [0.708, 0.666],
            [0.708, 0.706],
            [0.625, 0.706]
          ],
          "value": 20.69
        }
      }
    }
  },
  key: 'Mindee_expense_receipt',
  noun: 'Receipt parsing',
  display: {
    label: 'Mindee Expense Receipt Parsing',
    description:
      'Extract data from an receipt using the Mindee Receipt Parsing API',
    hidden: false,
    important: true,
  },
};
