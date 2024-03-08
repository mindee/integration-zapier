/** Copyright (C) 2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

import defaults from "./defaults.js"

export default {
  operation: {
    inputFields: [
      defaults.documentInputField,
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/bank_account_details/v2/predict',
        method: 'POST',
        body: {
          'document': bundle.inputData.document
        },
        headers: defaults.postHeaders,
      });

      return promise.then((response) => JSON.parse(response.content));
    },
    sample: {
      "api_request": {
        "error": {},
        "resources": [
          "document"
        ],
        "status": "success",
        "status_code": 201,
        "url": "https://api.mindee.net/v1/products/mindee/bank_account_details/v2/predict"
      },
      "document": {
        "annotations": {
          "labels": []
        },
        "id": "02421efc-2e48-4b21-916a-d1d29102d323",
        "inference": {
          "extras": {},
          "finished_at": "2023-09-19T09:33:54+00:00",
          "pages": [
            {
              "extras": {},
              "id": 0,
              "prediction": {
                "account_holders_names": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.6585,
                      0.9534
                    ],
                    [
                      0.3029,
                      0.1974
                    ],
                    [
                      0.984,
                      0.0247
                    ],
                    [
                      0.1915,
                      0.3626
                    ]
                  ],
                  "value": "string"
                },
                "bban": {
                  "bban_bank_code": "98700",
                  "bban_branch_code": "09880",
                  "bban_key": "45",
                  "bban_number": "89099860095",
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.0475,
                      0.3108
                    ],
                    [
                      0.5069,
                      0.639
                    ],
                    [
                      0.6637,
                      0.8018
                    ],
                    [
                      0.6126,
                      0.8666
                    ]
                  ]
                },
                "iban": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.0952,
                      0.5018
                    ],
                    [
                      0.1642,
                      0.0349
                    ],
                    [
                      0.1751,
                      0.9117
                    ],
                    [
                      0.9176,
                      0.3119
                    ]
                  ],
                  "value": "FR769870809889099869567"
                },
                "swift_code": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.3552,
                      0.6452
                    ],
                    [
                      0.258,
                      0.2108
                    ],
                    [
                      0.5328,
                      0.1586
                    ],
                    [
                      0.3383,
                      0.6482
                    ]
                  ],
                  "value": "AGRIFRPP887"
                }
              }
            }
          ],
          "prediction": {
            "account_holders_names": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.5968,
                  0.345
                ],
                [
                  0.7053,
                  0.5865
                ],
                [
                  0.2359,
                  0.534
                ],
                [
                  0.3083,
                  0.1022
                ]
              ],
              "value": "string"
            },
            "bban": {
              "bban_bank_code": "98700",
              "bban_branch_code": "09880",
              "bban_key": "45",
              "bban_number": "89099860095",
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.4655,
                  0.0075
                ],
                [
                  0.3909,
                  0.2692
                ],
                [
                  0.3005,
                  0.7262
                ],
                [
                  0.4512,
                  0.1613
                ]
              ]
            },
            "iban": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.3709,
                  0.6446
                ],
                [
                  0.3656,
                  0.14
                ],
                [
                  0.6901,
                  0.2581
                ],
                [
                  0.0291,
                  0.4029
                ]
              ],
              "value": "FR769870809889099869567"
            },
            "swift_code": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.9811,
                  0.6961
                ],
                [
                  0.4351,
                  0.2172
                ],
                [
                  0.9983,
                  0.2227
                ],
                [
                  0.4228,
                  0.9328
                ]
              ],
              "value": "AGRIFRPP887"
            }
          },
          "processing_time": 0.582,
          "product": {
            "features": [
              "account_holders_names",
              "bban",
              "iban",
              "swift_code"
            ],
            "name": "mindee/Bank Account Details",
            "version": "2.0"
          },
          "started_at": "2023-09-19T09:33:53+00:00"
        },
        "n_pages": 1,
        "name": "myfile.jpg",
        "ocr": {}
      }
    },
  },
  key: 'Mindee_fr_bank_account_details',
  noun: 'Bank_account_details_FR',
  display: {
    label: 'Mindee French Bank Account Details (R.I.B.) Parsing',
    description:
      'Extract data from any French Bank Account Details (R.I.B.) using the Mindee French Bank Account Details API',
    hidden: false
  },
};
