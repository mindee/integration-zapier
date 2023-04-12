/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

module.exports = {
  operation: { 
    inputFields: [
      {
        key: 'document',
        required: true,
        label: 'Your document',
        helpText: 'Select here the file you want to analyze',
        type:'file',
        placeholder: 'Select your file...'
      }
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/financial_document/v1/predict',
        method: 'POST',
        body: {
          'document': bundle.inputData.document
        },
        headers: {
          'Authorization':  'Token {{bundle.authData.api_key}}',
          'content-type': 'application/json',
          'User-Agent': 'mindee-api-zapier'
        },
      });

      return promise.then((response) => JSON.parse(response.content));
    },
    sample:{
      "extras": {},
      "finished_at": "2023-02-23T13:42:07.545247",
      "is_rotation_applied": true,
      "pages": [
        {
          "extras": {},
          "id": 0,
          "orientation": {"value": 0},
          "prediction": {
            "category": {
              "confidence": 0.99,
              "value": "food"
            },
            "customer_address": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "customer_company_registrations": [],
            "customer_name": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "date": {
              "confidence": 0.99,
              "polygon": [
                [0.585, 0.294],
                [0.729, 0.294],
                [0.729, 0.325],
                [0.585, 0.325]
              ],
              "value": "2022-03-22"
            },
            "document_type": {
              "value": "EXPENSE RECEIPT"
            },
            "due_date": {
              "confidence": 0.99,
              "polygon": [
                [0.585, 0.294],
                [0.729, 0.294],
                [0.729, 0.325],
                [0.585, 0.325]
              ],
              "value": "2022-03-22"
            },
            "invoice_number": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "line_items": [],
            "locale": {
              "confidence": 0.91,
              "currency": "EUR",
              "language": "fr"
            },
            "orientation": {
              "confidence": 0.99,
              "degrees": 0
            },
            "reference_numbers": [],
            "subcategory": {
              "confidence": 0.98,
              "value": "restaurant"
            },
            "supplier_address": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "supplier_company_registrations": [],
            "supplier_name": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "supplier_payment_details": [],
            "taxes": [
              {
                "base": 45.82,
                "code": "TVA",
                "confidence": 0.99,
                "polygon": [
                  [0.198, 0.577],
                  [0.716, 0.577],
                  [0.716, 0.692],
                  [0.198, 0.692]
                ],
                "rate": 10,
                "value": 4.58
              }
            ],
            "time": {
              "confidence": 0.99,
              "polygon": [
                [0.605, 0.329],
                [0.693, 0.329],
                [0.693, 0.354],
                [0.605, 0.354]
              ],
              "value": "13:40"
            },
            "tip": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "total_amount": {
              "confidence": 0.99,
              "polygon": [
                [0.599, 0.635],
                [0.688, 0.635],
                [0.688, 0.659],
                [0.599, 0.659]
              ],
              "value": 50.4
            },
            "total_net": {
              "confidence": 0.99,
              "polygon": [
                [0.601, 0.699],
                [0.693, 0.699],
                [0.693, 0.725],
                [0.601, 0.725]
              ],
              "value": 45.82
            },
            "total_tax": {
              "confidence": 0.99,
              "polygon": [],
              "value": 4.58
            }
          }
        }
      ],
      "prediction": {
        "category": {
          "confidence": 0.99,
          "value": "food"
        },
        "customer_address": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "customer_company_registrations": [],
        "customer_name": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "date": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.585, 0.294],
            [0.729, 0.294],
            [0.729, 0.325],
            [0.585, 0.325]
          ],
          "value": "2022-03-22"
        },
        "document_type": {
          "value": "EXPENSE RECEIPT"
        },
        "due_date": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.585, 0.294],
            [0.729, 0.294],
            [0.729, 0.325],
            [0.585, 0.325]
          ],
          "value": "2022-03-22"
        },
        "invoice_number": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "line_items": [],
        "locale": {
          "confidence": 0.91,
          "currency": "EUR",
          "language": "fr"
        },
        "reference_numbers": [],
        "subcategory": {
          "confidence": 0.98,
          "value": "restaurant"
        },
        "supplier_address": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "supplier_company_registrations": [],
        "supplier_name": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        },
        "supplier_payment_details": [],
        "taxes": [
          {
            "base": 45.82,
            "code": "TVA",
            "confidence": 0.99,
            "page_id": 0,
            "polygon": [
              [0.198, 0.577],
              [0.716, 0.577],
              [0.716, 0.692],
              [0.198, 0.692]
            ],
            "rate": 10,
            "value": 4.58
          }
        ],
        "time": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.605, 0.329],
            [0.693, 0.329],
            [0.693, 0.354],
            [0.605, 0.354]
          ],
          "value": "13:40"
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
            [0.599, 0.635],
            [0.688, 0.635],
            [0.688, 0.659],
            [0.599, 0.659]
          ],
          "value": 50.4
        },
        "total_net": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.601, 0.699],
            [0.693, 0.699],
            [0.693, 0.725],
            [0.601, 0.725]
          ],
          "value": 45.82
        },
        "total_tax": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [],
          "value": 4.58
        }
      },
      "processing_time": 2.52,
      "product": {
        "features": [
          "locale",
          "invoice_number",
          "reference_numbers",
          "date",
          "due_date",
          "total_net",
          "total_amount",
          "taxes",
          "supplier_payment_details",
          "supplier_name",
          "supplier_company_registrations",
          "supplier_address",
          "customer_name",
          "customer_company_registrations",
          "customer_address",
          "document_type",
          "orientation",
          "subcategory",
          "category",
          "total_tax",
          "tip",
          "time",
          "line_items"
        ],
        "name": "mindee/financial_document",
        "type": "standard",
        "version": "1.0"
      },
      "started_at": "2023-02-23T13:42:05.025438"
    }
  },
  key: 'Mindee_financial_document',
  noun: 'Financial Document parsing',
  display: {
    label: 'Mindee Financial Document Parsing',
    description:
      'Extract data from a financial document (Invoice OR Receipt) using the Mindee Financial Document Parsing API',
    hidden: false,
    important: true,
  },
};
