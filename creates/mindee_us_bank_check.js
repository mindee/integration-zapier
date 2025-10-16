/** Copyright (C) 2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const defaults = require("./defaults.js");
const { MINDEE_V1_BASE_URL } = require("../constants.js");

/**
 * Performs the enqueue operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueue results, containing queue information.
 */
const perform = (z, bundle) => {
  const promise = z.request({
    url: `${MINDEE_V1_BASE_URL}/v1/products/mindee/bank_check/v1/predict`,
    method: "POST",
    body: {
      "document": bundle.inputData.document
    }
  });
  return promise.then((response) => JSON.parse(response.content));
};

module.exports = {
  operation: {
    inputFields: [
      defaults.documentInputField,
    ],
    perform: perform,
    sample: {
      "api_request": {
        "error": {},
        "resources": [
          "document"
        ],
        "status": "success",
        "status_code": 201,
        "url": "https://api.mindee.net/v1/products/mindee/bank_check/v1/predict"
      },
      "document": {
        "annotations": {
          "labels": []
        },
        "id": "92785c0c-302b-478d-9e79-6f145268dd63",
        "inference": {
          "extras": {},
          "finished_at": "2023-09-19T12:17:00+00:00",
          "pages": [
            {
              "extras": {},
              "id": 0,
              "prediction": {
                "account_number": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.162,
                      0.9661
                    ],
                    [
                      0.9081,
                      0.2977
                    ],
                    [
                      0.6008,
                      0.1836
                    ],
                    [
                      0.3882,
                      0.4685
                    ]
                  ],
                  "value": "string"
                },
                "amount": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.8824,
                      0.4765
                    ],
                    [
                      0.7931,
                      0.0827
                    ],
                    [
                      0.0524,
                      0.1535
                    ],
                    [
                      0.7614,
                      0.5706
                    ]
                  ],
                  "value": 111258.56
                },
                "check_number": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.9985,
                      0.0266
                    ],
                    [
                      0.1342,
                      0.669
                    ],
                    [
                      0.1649,
                      0.9341
                    ],
                    [
                      0.4906,
                      0.2635
                    ]
                  ],
                  "value": "string"
                },
                "check_position": {
                  "bounding_box": [
                    [
                      0,
                      0
                    ],
                    [
                      1,
                      0
                    ],
                    [
                      1,
                      1
                    ],
                    [
                      0,
                      1
                    ]
                  ],
                  "polygon": [
                    [
                      0,
                      0
                    ],
                    [
                      0.5,
                      0.5
                    ],
                    [
                      1,
                      0
                    ],
                    [
                      1,
                      1
                    ],
                    [
                      0,
                      1
                    ]
                  ],
                  "quadrangle": [
                    [
                      0,
                      0
                    ],
                    [
                      1,
                      0
                    ],
                    [
                      1,
                      1
                    ],
                    [
                      0,
                      1
                    ]
                  ],
                  "rectangle": [
                    [
                      0,
                      0
                    ],
                    [
                      1,
                      0
                    ],
                    [
                      1,
                      1
                    ],
                    [
                      0,
                      1
                    ]
                  ]
                },
                "date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.4919,
                      0.3837
                    ],
                    [
                      0.0435,
                      0.7005
                    ],
                    [
                      0.984,
                      0.8018
                    ],
                    [
                      0.9707,
                      0.7779
                    ]
                  ],
                  "raw": "Aug-03-2018",
                  "value": "2018-08-03"
                },
                "orientation": {
                  "confidence": 0.99,
                  "degrees": 90
                },
                "payees": [
                  {
                    "confidence": 0.99,
                    "polygon": [
                      [
                        0.5893,
                        0.7446
                      ],
                      [
                        0.8791,
                        0.2959
                      ],
                      [
                        0.6978,
                        0.7948
                      ],
                      [
                        0.9681,
                        0.2217
                      ]
                    ],
                    "value": "Mindee Incorporated"
                  }
                ],
                "routing_number": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.6315,
                      0.0359
                    ],
                    [
                      0.6241,
                      0.2017
                    ],
                    [
                      0.044,
                      0.4055
                    ],
                    [
                      0.6698,
                      0.9573
                    ]
                  ],
                  "value": "string"
                },
                "signatures_positions": [
                  {
                    "bounding_box": [
                      [
                        0,
                        0
                      ],
                      [
                        1,
                        0
                      ],
                      [
                        1,
                        1
                      ],
                      [
                        0,
                        1
                      ]
                    ],
                    "polygon": [
                      [
                        0,
                        0
                      ],
                      [
                        0.5,
                        0.5
                      ],
                      [
                        1,
                        0
                      ],
                      [
                        1,
                        1
                      ],
                      [
                        0,
                        1
                      ]
                    ],
                    "quadrangle": [
                      [
                        0,
                        0
                      ],
                      [
                        1,
                        0
                      ],
                      [
                        1,
                        1
                      ],
                      [
                        0,
                        1
                      ]
                    ],
                    "rectangle": [
                      [
                        0,
                        0
                      ],
                      [
                        1,
                        0
                      ],
                      [
                        1,
                        1
                      ],
                      [
                        0,
                        1
                      ]
                    ]
                  }
                ]
              }
            }
          ],
          "prediction": {
            "account_number": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.8642,
                  0.3969
                ],
                [
                  0.245,
                  0.1643
                ],
                [
                  0.9933,
                  0.1003
                ],
                [
                  0.8247,
                  0.6776
                ]
              ],
              "value": "string"
            },
            "amount": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.666,
                  0.1555
                ],
                [
                  0.2506,
                  0.712
                ],
                [
                  0.3213,
                  0.3525
                ],
                [
                  0.5533,
                  0.4875
                ]
              ],
              "value": 111258.56
            },
            "check_number": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.9052,
                  0.2691
                ],
                [
                  0.6812,
                  0.3795
                ],
                [
                  0.2087,
                  0.8746
                ],
                [
                  0.0196,
                  0.1499
                ]
              ],
              "value": "string"
            },
            "date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.4877,
                  0.4425
                ],
                [
                  0.3923,
                  0.6628
                ],
                [
                  0.4951,
                  0.3531
                ],
                [
                  0.5384,
                  0.7554
                ]
              ],
              "raw": "Aug-03-2018",
              "value": "2018-08-03"
            },
            "payees": [
              {
                "confidence": 0.99,
                "page_id": 0,
                "polygon": [
                  [
                    0.8391,
                    0.5298
                  ],
                  [
                    0.5495,
                    0.2714
                  ],
                  [
                    0.3371,
                    0.1281
                  ],
                  [
                    0.5368,
                    0.1283
                  ]
                ],
                "value": "Mindee Incorporated"
              }
            ],
            "routing_number": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.7374,
                  0.0797
                ],
                [
                  0.0225,
                  0.0566
                ],
                [
                  0.9108,
                  0.0853
                ],
                [
                  0.2936,
                  0.8964
                ]
              ],
              "value": "string"
            }
          },
          "processing_time": 0.945,
          "product": {
            "features": [
              "check_position",
              "signatures_positions",
              "date",
              "amount",
              "payees",
              "routing_number",
              "account_number",
              "check_number",
              "orientation"
            ],
            "name": "mindee/Bank Checks (beta)",
            "version": "1.0"
          },
          "started_at": "2023-09-19T12:16:59+00:00"
        },
        "n_pages": 1,
        "name": "myfile.jpg",
        "ocr": {}
      }
    },
  },
  key: 'Mindee_us_bank_check',
  noun: 'Bank_check_US',
  display: {
    label: 'Mindee US Bank Check Parsing',
    description:
      'Extract data from any Mindee US Bank Check using the Mindee US Bank Check API',
    hidden: false
  },
};
