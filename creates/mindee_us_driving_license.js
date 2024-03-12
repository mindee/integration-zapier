/** Copyright (C) 2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const defaults = require("./defaults.js");

module.exports = {
  operation: {
    inputFields: [
      defaults.documentInputField,
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/us_driver_license/v1/predict',
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
        "url": "https://api.mindee.net/v1/products/mindee/us_driver_license/v1/predict"
      },
      "document": {
        "annotations": {
          "labels": []
        },
        "id": "869631cb-6e59-40d0-8b52-b53b13493380",
        "inference": {
          "extras": {},
          "finished_at": "2023-09-19T12:30:40+00:00",
          "pages": [
            {
              "extras": {},
              "id": 0,
              "prediction": {
                "address": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.0143,
                      0.7428
                    ],
                    [
                      0.357,
                      0.0192
                    ],
                    [
                      0.0344,
                      0.2894
                    ],
                    [
                      0.9118,
                      0.1898
                    ]
                  ],
                  "value": "1234 Sample Street, Mobile Al 36608-5658"
                },
                "date_of_birth": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.9097,
                      0.4639
                    ],
                    [
                      0.358,
                      0.2804
                    ],
                    [
                      0.4968,
                      0.3163
                    ],
                    [
                      0.0104,
                      0.0821
                    ]
                  ],
                  "value": "yyyy-mm-dd"
                },
                "dd_number": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.731,
                      0.0828
                    ],
                    [
                      0.4369,
                      0.0165
                    ],
                    [
                      0.824,
                      0.3082
                    ],
                    [
                      0.6353,
                      0.1809
                    ]
                  ],
                  "value": "111637505180803AMV-O"
                },
                "dl_class": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.2149,
                      0.1243
                    ],
                    [
                      0.4287,
                      0.9028
                    ],
                    [
                      0.2558,
                      0.7097
                    ],
                    [
                      0.5068,
                      0.0013
                    ]
                  ],
                  "value": "D"
                },
                "driver_license_id": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.8581,
                      0.3296
                    ],
                    [
                      0.1043,
                      0.4362
                    ],
                    [
                      0.1943,
                      0.0198
                    ],
                    [
                      0.0749,
                      0.9237
                    ]
                  ],
                  "value": "1234567"
                },
                "endorsements": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.3525,
                      0.3974
                    ],
                    [
                      0.2287,
                      0.8097
                    ],
                    [
                      0.7252,
                      0.8376
                    ],
                    [
                      0.3997,
                      0.3266
                    ]
                  ],
                  "value": "NONE"
                },
                "expiry_date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.0544,
                      0.2256
                    ],
                    [
                      0.8361,
                      0.8131
                    ],
                    [
                      0.5644,
                      0.7297
                    ],
                    [
                      0.3139,
                      0.8672
                    ]
                  ],
                  "value": "yyyy-mm-dd"
                },
                "eye_color": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.6279,
                      0.9755
                    ],
                    [
                      0.4524,
                      0.5859
                    ],
                    [
                      0.3216,
                      0.0114
                    ],
                    [
                      0.126,
                      0.7483
                    ]
                  ],
                  "value": "BLU"
                },
                "first_name": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.7646,
                      0.1414
                    ],
                    [
                      0.3168,
                      0.1153
                    ],
                    [
                      0.7183,
                      0.4971
                    ],
                    [
                      0.0842,
                      0.2274
                    ]
                  ],
                  "value": "John"
                },
                "hair_color": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.0011,
                      0.551
                    ],
                    [
                      0.9253,
                      0.5849
                    ],
                    [
                      0.35,
                      0.905
                    ],
                    [
                      0.8615,
                      0.0063
                    ]
                  ],
                  "value": "BLN"
                },
                "height": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.8028,
                      0.4439
                    ],
                    [
                      0.7796,
                      0.7505
                    ],
                    [
                      0.5723,
                      0.4849
                    ],
                    [
                      0.2077,
                      0.2142
                    ]
                  ],
                  "value": "6'04"
                },
                "issued_date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.056,
                      0.292
                    ],
                    [
                      0.4291,
                      0.2286
                    ],
                    [
                      0.884,
                      0.1011
                    ],
                    [
                      0.9681,
                      0.1948
                    ]
                  ],
                  "value": "yyyy-mm-dd"
                },
                "last_name": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.1878,
                      0.0663
                    ],
                    [
                      0.7882,
                      0.0449
                    ],
                    [
                      0.6124,
                      0.9325
                    ],
                    [
                      0.8154,
                      0.4435
                    ]
                  ],
                  "value": "DOE"
                },
                "photo": {
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
                  ]
                },
                "restrictions": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.8408,
                      0.0928
                    ],
                    [
                      0.2936,
                      0.9995
                    ],
                    [
                      0.0086,
                      0.0823
                    ],
                    [
                      0.7417,
                      0.9413
                    ]
                  ],
                  "value": "A, E"
                },
                "sex": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.6981,
                      0.2071
                    ],
                    [
                      0.9249,
                      0.621
                    ],
                    [
                      0.9618,
                      0.8064
                    ],
                    [
                      0.3363,
                      0.5888
                    ]
                  ],
                  "value": "F"
                },
                "signature": {
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
                  ]
                },
                "state": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.2951,
                      0.459
                    ],
                    [
                      0.4271,
                      0.8254
                    ],
                    [
                      0.1954,
                      0.9587
                    ],
                    [
                      0.7171,
                      0.1645
                    ]
                  ],
                  "value": "AL"
                },
                "weight": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.008,
                      0.8586
                    ],
                    [
                      0.961,
                      0.2152
                    ],
                    [
                      0.4918,
                      0.3354
                    ],
                    [
                      0.4341,
                      0.4415
                    ]
                  ],
                  "value": "604"
                }
              }
            }
          ],
          "prediction": {
            "address": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.5066,
                  0.8376
                ],
                [
                  0.1814,
                  0.2828
                ],
                [
                  0.7231,
                  0.9782
                ],
                [
                  0.082,
                  0.6626
                ]
              ],
              "value": "1234 Sample Street, Mobile Al 36608-5658"
            },
            "date_of_birth": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.1032,
                  0.9037
                ],
                [
                  0.1497,
                  0.3932
                ],
                [
                  0.3919,
                  0.3019
                ],
                [
                  0.9673,
                  0.2605
                ]
              ],
              "value": "yyyy-mm-dd"
            },
            "dd_number": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.3156,
                  0.303
                ],
                [
                  0.7459,
                  0.7884
                ],
                [
                  0.3846,
                  0.6331
                ],
                [
                  0.5635,
                  0.2318
                ]
              ],
              "value": "111637505180803AMV-O"
            },
            "dl_class": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.7296,
                  0.7521
                ],
                [
                  0.6459,
                  0.5081
                ],
                [
                  0.5111,
                  0.2433
                ],
                [
                  0.516,
                  0.6839
                ]
              ],
              "value": "D"
            },
            "driver_license_id": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.092,
                  0.4556
                ],
                [
                  0.4482,
                  0.4184
                ],
                [
                  0.1618,
                  0.0294
                ],
                [
                  0.1924,
                  0.5389
                ]
              ],
              "value": "1234567"
            },
            "endorsements": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.9594,
                  0.1373
                ],
                [
                  0.7463,
                  0.3764
                ],
                [
                  0.8302,
                  0.756
                ],
                [
                  0.4864,
                  0.6959
                ]
              ],
              "value": "NONE"
            },
            "expiry_date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.6836,
                  0.9514
                ],
                [
                  0.0633,
                  0.6297
                ],
                [
                  0.2788,
                  0.7574
                ],
                [
                  0.6809,
                  0.4319
                ]
              ],
              "value": "yyyy-mm-dd"
            },
            "eye_color": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.0148,
                  0.8521
                ],
                [
                  0.066,
                  0.7172
                ],
                [
                  0.2446,
                  0.4167
                ],
                [
                  0.9943,
                  0.5492
                ]
              ],
              "value": "BLU"
            },
            "first_name": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.2284,
                  0.6654
                ],
                [
                  0.1488,
                  0.3976
                ],
                [
                  0.325,
                  0.5955
                ],
                [
                  0.9795,
                  0.9483
                ]
              ],
              "value": "John"
            },
            "hair_color": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.1409,
                  0.7206
                ],
                [
                  0.684,
                  0.7192
                ],
                [
                  0.8771,
                  0.8276
                ],
                [
                  0.7843,
                  0.333
                ]
              ],
              "value": "BLN"
            },
            "height": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.0085,
                  0.2607
                ],
                [
                  0.1763,
                  0.4818
                ],
                [
                  0.8965,
                  0.896
                ],
                [
                  0.1431,
                  0.8993
                ]
              ],
              "value": "6'04"
            },
            "issued_date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.8807,
                  0.0353
                ],
                [
                  0.8496,
                  0.3047
                ],
                [
                  0.2729,
                  0.9835
                ],
                [
                  0.029,
                  0.657
                ]
              ],
              "value": "yyyy-mm-dd"
            },
            "last_name": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.656,
                  0.6995
                ],
                [
                  0.4806,
                  0.9463
                ],
                [
                  0.7466,
                  0.562
                ],
                [
                  0.5552,
                  0.9989
                ]
              ],
              "value": "DOE"
            },
            "restrictions": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.5425,
                  0.6866
                ],
                [
                  0.1171,
                  0.1888
                ],
                [
                  0.824,
                  0.3498
                ],
                [
                  0.0248,
                  0.0333
                ]
              ],
              "value": "A, E"
            },
            "sex": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.9685,
                  0.635
                ],
                [
                  0.282,
                  0.9031
                ],
                [
                  0.9342,
                  0.7793
                ],
                [
                  0.1221,
                  0.1017
                ]
              ],
              "value": "F"
            },
            "state": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.5229,
                  0.1859
                ],
                [
                  0.9353,
                  0.6158
                ],
                [
                  0.8362,
                  0.7998
                ],
                [
                  0.7533,
                  0.4198
                ]
              ],
              "value": "AL"
            },
            "weight": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.102,
                  0.5331
                ],
                [
                  0.2942,
                  0.1323
                ],
                [
                  0.5534,
                  0.4116
                ],
                [
                  0.475,
                  0.8731
                ]
              ],
              "value": "604"
            }
          },
          "processing_time": 0.598,
          "product": {
            "features": [
              "state",
              "driver_license_id",
              "expiry_date",
              "issued_date",
              "last_name",
              "first_name",
              "address",
              "date_of_birth",
              "restrictions",
              "endorsements",
              "dl_class",
              "sex",
              "height",
              "weight",
              "hair_color",
              "eye_color",
              "dd_number",
              "photo",
              "signature"
            ],
            "name": "mindee/US Driver License",
            "version": "1.0"
          },
          "started_at": "2023-09-19T12:30:40+00:00"
        },
        "n_pages": 1,
        "name": "myfile.jpg",
        "ocr": {}
      }
    },
  },
  key: 'Mindee_us_driving_license',
  noun: 'US_Driving_License',
  display: {
    label: 'Mindee US Driving License Parsing',
    description:
      'Extract data from any US Driving License using the Mindee US Driving License API',
    hidden: false
  },
};
