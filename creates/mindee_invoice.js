/** Copyright (C) 2021-2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

import defaults from "./defaults.js";

export default {
  operation: {
    inputFields: [
      defaults.documentInputField,
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/invoices/v4/predict',
        method: 'POST',
        body: {
          'document': bundle.inputData.document
        },
        headers: defaults.postHeaders,
      });

      return promise.then((response) => JSON.parse(response.content));
    },
    sample: {
      "extras": {},
      "finished_at": "2023-01-03T16:09:06.901012",
      "is_rotation_applied": true,
      "pages": [
        {
          "extras": {},
          "id": 0,
          "orientation": {"value": 0},
          "prediction": {
            "customer_address": {
              "confidence": 0.31,
              "polygon": [
                [0.035, 0.304],
                [0.214, 0.304],
                [0.214, 0.353],
                [0.035, 0.353]
              ],
              "value": "1954 Bloon Street West Toronto, ON, M6P 3K9 Canada"
            },
            "customer_company_registrations": [],
            "customer_name": {
              "confidence": 0.84,
              "polygon": [
                [0.035, 0.284],
                [0.098, 0.284],
                [0.098, 0.296],
                [0.035, 0.296]
              ],
              "value": "JIRO DOI"
            },
            "date": {
              "confidence": 0.99,
              "polygon": [
                [0.842, 0.305],
                [0.931, 0.305],
                [0.931, 0.319],
                [0.842, 0.319]
              ],
              "value": "2018-09-25"
            },
            "document_type": {
              "value": "INVOICE"
            },
            "due_date": {
              "confidence": 0.93,
              "polygon": [
                [0.84, 0.326],
                [0.943, 0.326],
                [0.943, 0.34],
                [0.84, 0.34]
              ],
              "value": "2018-09-25"
            },
            "invoice_number": {
              "confidence": 0.99,
              "polygon": [
                [0.843, 0.265],
                [0.861, 0.265],
                [0.861, 0.28],
                [0.843, 0.28]
              ],
              "value": "14"
            },
            "line_items": [
              {
                "confidence": 0.97,
                "description": "Platinum web hosting package Down 35mb, Up 100mb",
                "polygon": [
                  [0.035, 0.501],
                  [0.965, 0.501],
                  [0.965, 0.536],
                  [0.035, 0.536]
                ],
                "product_code": null,
                "quantity": 1,
                "tax_amount": null,
                "tax_rate": null,
                "total_amount": 65,
                "unit_price": 65
              },
              {
                "confidence": 0.97,
                "description": "2 page website design Includes basic wireframes, and responsive templates",
                "polygon": [
                  [0.035, 0.563],
                  [0.964, 0.563],
                  [0.964, 0.598],
                  [0.035, 0.598]
                ],
                "product_code": null,
                "quantity": 3,
                "tax_amount": null,
                "tax_rate": null,
                "total_amount": 2100,
                "unit_price": 2100
              },
              {
                "confidence": 0.97,
                "description": "Mobile designs Includes responsive navigation",
                "polygon": [
                  [0.035, 0.626],
                  [0.964, 0.626],
                  [0.964, 0.662],
                  [0.035, 0.662]
                ],
                "product_code": null,
                "quantity": 1,
                "tax_amount": null,
                "tax_rate": null,
                "total_amount": 250,
                "unit_price": 250
              }
            ],
            "locale": {
              "confidence": 0.93,
              "currency": "CAD",
              "language": "en"
            },
            "orientation": {
              "confidence": 0.99,
              "degrees": 0
            },
            "reference_numbers": [
              {
                "confidence": 0.91,
                "polygon": [
                  [0.84, 0.284],
                  [0.914, 0.284],
                  [0.914, 0.298],
                  [0.84, 0.298]
                ],
                "value": "AD29094"
              }
            ],
            "supplier_address": {
              "confidence": 0.48,
              "polygon": [
                [0.756, 0.128],
                [0.964, 0.128],
                [0.964, 0.162],
                [0.756, 0.162]
              ],
              "value": "156 University Ave, Toronto ON, Canada M5H 2H7"
            },
            "supplier_company_registrations": [],
            "supplier_name": {
              "confidence": 0.72,
              "polygon": [
                [0.164, 0.087],
                [0.4, 0.087],
                [0.4, 0.147],
                [0.164, 0.147]
              ],
              "value": "TURNPIKE DESIGNS CO."
            },
            "supplier_payment_details": [],
            "taxes": [
              {
                "confidence": 0.76,
                "polygon": [
                  [0.785, 0.745],
                  [0.965, 0.745],
                  [0.965, 0.758],
                  [0.785, 0.758]
                ],
                "rate": 8,
                "value": 193.2
              }
            ],
            "total_amount": {
              "confidence": 0.99,
              "polygon": [
                [0.887, 0.84],
                [0.97, 0.84],
                [0.97, 0.858],
                [0.887, 0.858]
              ],
              "value": 2608.2
            },
            "total_net": {
              "confidence": 0,
              "polygon": [],
              "value": null
            }
          }
        }
      ],
      "prediction": {
        "customer_address": {
          "confidence": 0.31,
          "page_id": 0,
          "polygon": [
            [0.035, 0.304],
            [0.214, 0.304],
            [0.214, 0.353],
            [0.035, 0.353]
          ],
          "value": "1954 Bloon Street West Toronto, ON, M6P 3K9 Canada"
        },
        "customer_company_registrations": [],
        "customer_name": {
          "confidence": 0.84,
          "page_id": 0,
          "polygon": [
            [0.035, 0.284],
            [0.098, 0.284],
            [0.098, 0.296],
            [0.035, 0.296]
          ],
          "value": "JIRO DOI"
        },
        "date": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.842, 0.305],
            [0.931, 0.305],
            [0.931, 0.319],
            [0.842, 0.319]
          ],
          "value": "2018-09-25"
        },
        "document_type": {
          "value": "INVOICE"
        },
        "due_date": {
          "confidence": 0.93,
          "page_id": 0,
          "polygon": [
            [0.84, 0.326],
            [0.943, 0.326],
            [0.943, 0.34],
            [0.84, 0.34]
          ],
          "value": "2018-09-25"
        },
        "invoice_number": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.843, 0.265],
            [0.861, 0.265],
            [0.861, 0.28],
            [0.843, 0.28]
          ],
          "value": "14"
        },
        "line_items": [
          {
            "confidence": 0.97,
            "description": "Platinum web hosting package Down 35mb, Up 100mb",
            "page_id": 0,
            "polygon": [
              [0.035, 0.501],
              [0.965, 0.501],
              [0.965, 0.536],
              [0.035, 0.536]
            ],
            "product_code": null,
            "quantity": 1,
            "tax_amount": null,
            "tax_rate": null,
            "total_amount": 65,
            "unit_price": 65
          },
          {
            "confidence": 0.97,
            "description": "2 page website design Includes basic wireframes, and responsive templates",
            "page_id": 0,
            "polygon": [
              [0.035, 0.563],
              [0.964, 0.563],
              [0.964, 0.598],
              [0.035, 0.598]
            ],
            "product_code": null,
            "quantity": 3,
            "tax_amount": null,
            "tax_rate": null,
            "total_amount": 2100,
            "unit_price": 2100
          },
          {
            "confidence": 0.97,
            "description": "Mobile designs Includes responsive navigation",
            "page_id": 0,
            "polygon": [
              [0.035, 0.626],
              [0.964, 0.626],
              [0.964, 0.662],
              [0.035, 0.662]
            ],
            "product_code": null,
            "quantity": 1,
            "tax_amount": null,
            "tax_rate": null,
            "total_amount": 250,
            "unit_price": 250
          }
        ],
        "locale": {
          "confidence": 0.93,
          "currency": "CAD",
          "language": "en"
        },
        "reference_numbers": [
          {
            "confidence": 0.91,
            "page_id": 0,
            "polygon": [
              [0.84, 0.284],
              [0.914, 0.284],
              [0.914, 0.298],
              [0.84, 0.298]
            ],
            "value": "AD29094"
          }
        ],
        "supplier_address": {
          "confidence": 0.48,
          "page_id": 0,
          "polygon": [
            [0.756, 0.128],
            [0.964, 0.128],
            [0.964, 0.162],
            [0.756, 0.162]
          ],
          "value": "156 University Ave, Toronto ON, Canada M5H 2H7"
        },
        "supplier_company_registrations": [],
        "supplier_name": {
          "confidence": 0.72,
          "page_id": 0,
          "polygon": [
            [0.164, 0.087],
            [0.4, 0.087],
            [0.4, 0.147],
            [0.164, 0.147]
          ],
          "value": "TURNPIKE DESIGNS CO."
        },
        "supplier_payment_details": [],
        "taxes": [
          {
            "confidence": 0.76,
            "page_id": 0,
            "polygon": [
              [0.785, 0.745],
              [0.965, 0.745],
              [0.965, 0.758],
              [0.785, 0.758]
            ],
            "rate": 8,
            "value": 193.2
          }
        ],
        "total_amount": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.887, 0.84],
            [0.97, 0.84],
            [0.97, 0.858],
            [0.887, 0.858]
          ],
          "value": 2608.2
        },
        "total_net": {
          "confidence": 0,
          "page_id": null,
          "polygon": [],
          "value": null
        }
      },
      "processing_time": 1.052,
      "product": {
        "features": [
          "reference_numbers",
          "locale",
          "invoice_number",
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
          "line_items"
        ],
        "name": "mindee/invoices",
        "type": "standard",
        "version": "4.1"
      },
      "started_at": "2023-01-03T16:09:05.848722"
    },
  },
  key: 'Mindee_invoice',
  noun: 'Invoice',
  display: {
    label: 'Mindee Invoice Parsing',
    description:
      'Extract data from any Invoice using the Mindee Invoice Parsing API',
    hidden: false,
  },
};
