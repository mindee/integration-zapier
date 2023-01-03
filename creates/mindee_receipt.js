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
        url: 'https://api.mindee.net/v1/products/mindee/expense_receipts/v4/predict',
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
      "extras": {},
      "finished_at": "2023-01-03T16:45:06.077168",
      "is_rotation_applied": true,
      "pages": [
        {
          "extras": {},
          "id": 0,
          "orientation": {"value": 0},
          "prediction": {
            "category": {
              "confidence": 0.67,
              "value": "miscellaneous"
            },
            "date": {
              "confidence": 0.99,
              "polygon": [
                [0.84, 0.305],
                [0.933, 0.305],
                [0.933, 0.317],
                [0.84, 0.317]
              ],
              "value": "2018-09-25"
            },
            "document_type": {
              "confidence": 0.98,
              "value": "EXPENSE RECEIPT"
            },
            "locale": {
              "confidence": 0.93,
              "country": "CA",
              "currency": "CAD",
              "language": "en",
              "value": "en-CA"
            },
            "orientation": {
              "confidence": 0.99,
              "degrees": 0
            },
            "subcategory": {
              "confidence": null,
              "value": null
            },
            "supplier": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "taxes": [
              {
                "base": null,
                "code": "TAX",
                "confidence": 0.99,
                "polygon": [
                  [0.754, 0.744],
                  [0.965, 0.744],
                  [0.965, 0.758],
                  [0.754, 0.758]
                ],
                "rate": 8,
                "value": 193.2
              }
            ],
            "time": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "tip": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "total_amount": {
              "confidence": 0.99,
              "polygon": [
                [0.887, 0.84],
                [0.965, 0.84],
                [0.965, 0.855],
                [0.887, 0.855]
              ],
              "value": 2608.2
            },
            "total_net": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "total_tax": {
              "confidence": 0.99,
              "polygon": [],
              "value": 193.2
            }
          }
        }
      ],
      "prediction": {
        "category": {
          "confidence": 0.67,
          "value": "miscellaneous"
        },
        "date": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.84, 0.305],
            [0.933, 0.305],
            [0.933, 0.317],
            [0.84, 0.317]
          ],
          "value": "2018-09-25"
        },
        "document_type": {
          "confidence": 0.98,
          "value": "EXPENSE RECEIPT"
        },
        "locale": {
          "confidence": 0.93,
          "country": "CA",
          "currency": "CAD",
          "language": "en",
          "value": "en-CA"
        },
        "subcategory": {
          "confidence": 0,
          "value": null
        },
        "supplier": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "taxes": [
          {
            "base": null,
            "code": "TAX",
            "confidence": 0.99,
            "page_id": 0,
            "polygon": [
              [0.754, 0.744],
              [0.965, 0.744],
              [0.965, 0.758],
              [0.754, 0.758]
            ],
            "rate": 8,
            "value": 193.2
          }
        ],
        "time": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "tip": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "total_amount": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.887, 0.84],
            [0.965, 0.84],
            [0.965, 0.855],
            [0.887, 0.855]
          ],
          "value": 2608.2
        },
        "total_net": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "total_tax": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [],
          "value": 193.2
        }
      },
      "processing_time": 0.843,
      "product": {
        "features": [
          "locale",
          "category",
          "subcategory",
          "document_type",
          "date",
          "time",
          "total_amount",
          "total_net",
          "total_tax",
          "tip",
          "taxes",
          "supplier",
          "orientation"
        ],
        "name": "mindee/expense_receipts",
        "type": "standard",
        "version": "4.1"
      },
      "started_at": "2023-01-03T16:45:05.234016"
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
