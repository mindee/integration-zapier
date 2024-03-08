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
        url: 'https://api.mindee.net/v1/products/mindee/expense_receipts/v5/predict',
        method: 'POST',
        body: {
          'document': bundle.inputData.document
        },
        headers: defaults.postHeaders,
      });

      return promise.then((response) => JSON.parse(response.content));
    },
    sample:{
      "api_request": {
        "error": {},
        "resources": [
          "document"
        ],
        "status": "success",
        "status_code": 201,
        "url": "https://api.mindee.net/v1/products/mindee/expense_receipts/v5/predict"
      },
      "document": {
        "annotations": {
          "labels": []
        },
        "id": "ce7402e3-c0ba-4d2a-8982-20dae196f042",
        "inference": {
          "extras": {},
          "finished_at": "2023-09-19T09:18:14+00:00",
          "pages": [
            {
              "extras": {},
              "id": 0,
              "prediction": {
                "category": {
                  "confidence": 0.99,
                  "value": "miscellaneous"
                },
                "date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.9029,
                      0.8135
                    ],
                    [
                      0.9794,
                      0.5407
                    ],
                    [
                      0.0326,
                      0.0656
                    ],
                    [
                      0.7173,
                      0.7251
                    ]
                  ],
                  "value": "2019-08-25"
                },
                "document_type": {
                  "confidence": 0.99,
                  "value": "credit_card_receipt"
                },
                "line_items": [
                  {
                    "confidence": 0.99,
                    "description": "string",
                    "polygon": [
                      [
                        0.1041,
                        0.7475
                      ],
                      [
                        0.648,
                        0.7394
                      ],
                      [
                        0.5606,
                        0.6309
                      ],
                      [
                        0.1874,
                        0.5819
                      ]
                    ],
                    "quantity": 10,
                    "total_amount": 100,
                    "unit_price": 100
                  }
                ],
                "locale": {
                  "confidence": 0.99,
                  "country": "CA",
                  "currency": "CAD",
                  "language": "fr",
                  "value": "fr-CA"
                },
                "orientation": {
                  "confidence": 0.99,
                  "degrees": 0
                },
                "subcategory": {
                  "confidence": 0.99,
                  "value": "taxi"
                },
                "supplier_address": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.288,
                      0.5085
                    ],
                    [
                      0.4483,
                      0.7412
                    ],
                    [
                      0.1157,
                      0.5775
                    ],
                    [
                      0.5493,
                      0.7605
                    ]
                  ],
                  "value": "string"
                },
                "supplier_company_registrations": [
                  {
                    "confidence": 0.99,
                    "polygon": [
                      [
                        0.9523,
                        0.5623
                      ],
                      [
                        0.942,
                        0.8854
                      ],
                      [
                        0.5092,
                        0.6327
                      ],
                      [
                        0.2627,
                        0.6631
                      ]
                    ],
                    "type": null,
                    "value": null
                  }
                ],
                "supplier_name": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.0578,
                      0.6948
                    ],
                    [
                      0.1767,
                      0.6799
                    ],
                    [
                      0.9547,
                      0.8439
                    ],
                    [
                      0.9131,
                      0.2363
                    ]
                  ],
                  "raw_value": "Google",
                  "value": "GOOGLE"
                },
                "supplier_phone_number": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.2315,
                      0.3557
                    ],
                    [
                      0.9226,
                      0.4764
                    ],
                    [
                      0.4723,
                      0.8601
                    ],
                    [
                      0.4892,
                      0.8974
                    ]
                  ],
                  "value": "string"
                },
                "taxes": [
                  {
                    "base": 4.21,
                    "code": "GST",
                    "confidence": 0.99,
                    "polygon": [
                      [
                        0.7277,
                        0.1451
                      ],
                      [
                        0.0831,
                        0.5921
                      ],
                      [
                        0.7206,
                        0.1795
                      ],
                      [
                        0.0548,
                        0.0105
                      ]
                    ],
                    "rate": 5,
                    "value": 4.21
                  }
                ],
                "time": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.3896,
                      0.5751
                    ],
                    [
                      0.395,
                      0.3158
                    ],
                    [
                      0.4169,
                      0.1854
                    ],
                    [
                      0.3317,
                      0.2286
                    ]
                  ],
                  "value": "07:21"
                },
                "tip": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.0052,
                      0.3916
                    ],
                    [
                      0.0654,
                      0.9979
                    ],
                    [
                      0.8681,
                      0.3983
                    ],
                    [
                      0.292,
                      0.9068
                    ]
                  ],
                  "value": 405.9
                },
                "total_amount": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.6373,
                      0.3038
                    ],
                    [
                      0.8701,
                      0.4296
                    ],
                    [
                      0.4859,
                      0.1914
                    ],
                    [
                      0.6434,
                      0.6376
                    ]
                  ],
                  "value": 663.35
                },
                "total_net": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.4514,
                      0.3338
                    ],
                    [
                      0.1707,
                      0.9064
                    ],
                    [
                      0.0625,
                      0.8572
                    ],
                    [
                      0.8081,
                      0.1748
                    ]
                  ],
                  "value": 722.11
                },
                "total_tax": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.8827,
                      0.3999
                    ],
                    [
                      0.0079,
                      0.4445
                    ],
                    [
                      0.0975,
                      0.5653
                    ],
                    [
                      0.3296,
                      0.5714
                    ]
                  ],
                  "value": 757.93
                }
              }
            }
          ],
          "prediction": {
            "category": {
              "confidence": 0.99,
              "value": "food"
            },
            "date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.84,
                  0.4622
                ],
                [
                  0.8082,
                  0.0709
                ],
                [
                  0.7873,
                  0.9121
                ],
                [
                  0.0181,
                  0.4877
                ]
              ],
              "value": "2019-08-25"
            },
            "document_type": {
              "confidence": 0.99,
              "value": "expense_receipt"
            },
            "line_items": [
              {
                "confidence": 0.99,
                "description": "string",
                "page_id": 0,
                "polygon": [
                  [
                    0.0606,
                    0.2514
                  ],
                  [
                    0.8165,
                    0.7666
                  ],
                  [
                    0.1985,
                    0.4723
                  ],
                  [
                    0.6248,
                    0.5055
                  ]
                ],
                "quantity": 10,
                "total_amount": 100,
                "unit_price": 100
              }
            ],
            "locale": {
              "confidence": 0.99,
              "country": "CA",
              "currency": "CAD",
              "language": "fr",
              "value": "fr-CA"
            },
            "subcategory": {
              "confidence": 0.99,
              "value": "plane"
            },
            "supplier_address": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.0545,
                  0.0093
                ],
                [
                  0.6195,
                  0.3398
                ],
                [
                  0.396,
                  0.8711
                ],
                [
                  0.7102,
                  0.3732
                ]
              ],
              "value": "string"
            },
            "supplier_company_registrations": [
              {
                "confidence": 0.99,
                "page_id": 0,
                "polygon": [
                  [
                    0.2184,
                    0.1617
                  ],
                  [
                    0.1395,
                    0.3473
                  ],
                  [
                    0.2168,
                    0.1092
                  ],
                  [
                    0.519,
                    0.0632
                  ]
                ],
                "type": null,
                "value": null
              }
            ],
            "supplier_name": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.9184,
                  0.5999
                ],
                [
                  0.2903,
                  0.9026
                ],
                [
                  0.1044,
                  0.8043
                ],
                [
                  0.3967,
                  0.5166
                ]
              ],
              "raw_value": "Google",
              "value": "GOOGLE"
            },
            "supplier_phone_number": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.8867,
                  0.0192
                ],
                [
                  0.7412,
                  0.6274
                ],
                [
                  0.012,
                  0.3823
                ],
                [
                  0.3443,
                  0.0026
                ]
              ],
              "value": "string"
            },
            "taxes": [
              {
                "base": 4.21,
                "code": "GST",
                "confidence": 0.99,
                "page_id": 0,
                "polygon": [
                  [
                    0.095,
                    0.8127
                  ],
                  [
                    0.3628,
                    0.4228
                  ],
                  [
                    0.4833,
                    0.357
                  ],
                  [
                    0.4263,
                    0.2409
                  ]
                ],
                "rate": 5,
                "value": 4.21
              }
            ],
            "time": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.0919,
                  0.9493
                ],
                [
                  0.2022,
                  0.5064
                ],
                [
                  0.1772,
                  0.8255
                ],
                [
                  0.6458,
                  0.4354
                ]
              ],
              "value": "07:21"
            },
            "tip": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.4859,
                  0.0505
                ],
                [
                  0.3253,
                  0.1394
                ],
                [
                  0.6952,
                  0.9106
                ],
                [
                  0.0304,
                  0.764
                ]
              ],
              "value": 713.38
            },
            "total_amount": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.0807,
                  0.6267
                ],
                [
                  0.679,
                  0.1613
                ],
                [
                  0.0648,
                  0.897
                ],
                [
                  0.1978,
                  0.8971
                ]
              ],
              "value": 841.86
            },
            "total_net": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.1512,
                  0.7921
                ],
                [
                  0.5744,
                  0.6269
                ],
                [
                  0.2717,
                  0.5458
                ],
                [
                  0.4072,
                  0.1378
                ]
              ],
              "value": 980.83
            },
            "total_tax": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.5115,
                  0.9417
                ],
                [
                  0.9383,
                  0.3312
                ],
                [
                  0.2916,
                  0.2502
                ],
                [
                  0.2548,
                  0.909
                ]
              ],
              "value": 604.39
            }
          },
          "processing_time": 2.215,
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
              "supplier_name",
              "supplier_company_registrations",
              "supplier_address",
              "supplier_phone_number",
              "orientation",
              "line_items"
            ],
            "name": "mindee/Expense Receipt",
            "version": "5.0"
          },
          "started_at": "2023-09-19T09:18:12+00:00"
        },
        "n_pages": 1,
        "name": "myfile.jpg",
        "ocr": {}
      }
    }
  },
  key: 'Mindee_expense_receipt',
  noun: 'Receipt parsing',
  display: {
    label: 'Mindee Expense Receipt Parsing',
    description:
      'Extract data from any receipt using the Mindee Receipt Parsing API',
    hidden: false
  },
};
