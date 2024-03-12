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
        url: 'https://api.mindee.net/v1/products/mindee/idcard_fr/v2/predict',
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
        "url": "https://api.mindee.net/v1/products/mindee/idcard_fr/v2/predict"
      },
      "document": {
        "annotations": {
          "labels": []
        },
        "id": "35be44f8-a58b-490e-940f-707aca1966fb",
        "inference": {
          "extras": {},
          "finished_at": "2023-09-19T09:22:02+00:00",
          "pages": [
            {
              "extras": {},
              "id": 0,
              "prediction": {
                "alternate_name": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.6993,
                      0.6432
                    ],
                    [
                      0.6784,
                      0.7705
                    ],
                    [
                      0.4405,
                      0.5053
                    ],
                    [
                      0.8199,
                      0.5311
                    ]
                  ],
                  "value": "vve. DUBOIS"
                },
                "authority": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.4714,
                      0.1475
                    ],
                    [
                      0.4503,
                      0.009
                    ],
                    [
                      0.2176,
                      0.3624
                    ],
                    [
                      0.7782,
                      0.1366
                    ]
                  ],
                  "value": "string"
                },
                "birth_date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.8485,
                      0.2689
                    ],
                    [
                      0.9494,
                      0.2197
                    ],
                    [
                      0.9037,
                      0.07
                    ],
                    [
                      0.4507,
                      0.4276
                    ]
                  ],
                  "value": "1990-07-13"
                },
                "birth_place": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.255,
                      0.7293
                    ],
                    [
                      0.0848,
                      0.9548
                    ],
                    [
                      0.3965,
                      0.3729
                    ],
                    [
                      0.1824,
                      0.6374
                    ]
                  ],
                  "value": "PARIS"
                },
                "card_access_number": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.5467,
                      0.6187
                    ],
                    [
                      0.5393,
                      0.6817
                    ],
                    [
                      0.6105,
                      0.3795
                    ],
                    [
                      0.9528,
                      0.6106
                    ]
                  ],
                  "value": "546497"
                },
                "document_number": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.5515,
                      0.252
                    ],
                    [
                      0.2121,
                      0.1096
                    ],
                    [
                      0.4279,
                      0.8933
                    ],
                    [
                      0.9862,
                      0.9006
                    ]
                  ],
                  "value": "D2H6862M2"
                },
                "document_side": {
                  "confidence": 0.99,
                  "value": "RECTO & VERSO"
                },
                "document_type": {
                  "confidence": 0.99,
                  "value": "NEW"
                },
                "expiry_date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.5959,
                      0.2333
                    ],
                    [
                      0.1053,
                      0.0482
                    ],
                    [
                      0.2441,
                      0.1412
                    ],
                    [
                      0.4402,
                      0.9952
                    ]
                  ],
                  "value": "2030-02-11"
                },
                "gender": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.5905,
                      0.1061
                    ],
                    [
                      0.8205,
                      0.2295
                    ],
                    [
                      0.1457,
                      0.552
                    ],
                    [
                      0.495,
                      0.3162
                    ]
                  ],
                  "value": "F"
                },
                "given_names": [
                  {
                    "confidence": 0.99,
                    "polygon": [
                      [
                        0.9209,
                        0.5499
                      ],
                      [
                        0.3041,
                        0.3327
                      ],
                      [
                        0.8191,
                        0.5316
                      ],
                      [
                        0.9582,
                        0.0649
                      ]
                    ],
                    "value": "Maëlis-Gaëlle"
                  }
                ],
                "issue_date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.9297,
                      0.9303
                    ],
                    [
                      0.4044,
                      0.8497
                    ],
                    [
                      0.125,
                      0.2821
                    ],
                    [
                      0.7639,
                      0.6072
                    ]
                  ],
                  "value": "2020-02-12"
                },
                "mrz1": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.4271,
                      0.6959
                    ],
                    [
                      0.7397,
                      0.327
                    ],
                    [
                      0.8343,
                      0.0069
                    ],
                    [
                      0.5866,
                      0.4757
                    ]
                  ],
                  "value": "IDFRAX4RTBPFW46<<<<<<<<<<<<<<<"
                },
                "mrz2": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.2445,
                      0.9831
                    ],
                    [
                      0.1648,
                      0.3958
                    ],
                    [
                      0.9982,
                      0.7573
                    ],
                    [
                      0.5351,
                      0.2833
                    ]
                  ],
                  "value": "9007138F3002119FRA<<<<<<<<<<<6"
                },
                "mrz3": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.4888,
                      0.8282
                    ],
                    [
                      0.1372,
                      0.2195
                    ],
                    [
                      0.9351,
                      0.3425
                    ],
                    [
                      0.9135,
                      0.5095
                    ]
                  ],
                  "value": "MARTIN<<MAELYS<GAELLE<MARIE<<<"
                },
                "nationality": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.4613,
                      0.6359
                    ],
                    [
                      0.9081,
                      0.869
                    ],
                    [
                      0.0363,
                      0.1228
                    ],
                    [
                      0.874,
                      0.5384
                    ]
                  ],
                  "value": "FRA"
                },
                "orientation": {
                  "confidence": 0.99,
                  "degrees": 0
                },
                "surname": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.4031,
                      0.8532
                    ],
                    [
                      0.8707,
                      0.5962
                    ],
                    [
                      0.0929,
                      0.0199
                    ],
                    [
                      0.8684,
                      0.6261
                    ]
                  ],
                  "value": "MARTIN"
                }
              }
            }
          ],
          "prediction": {
            "alternate_name": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.082,
                  0.0454
                ],
                [
                  0.2294,
                  0.106
                ],
                [
                  0.4693,
                  0.0485
                ],
                [
                  0.4238,
                  0.357
                ]
              ],
              "value": "vve. DUBOIS"
            },
            "authority": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.7077,
                  0.872
                ],
                [
                  0.6989,
                  0.3046
                ],
                [
                  0.3159,
                  0.8269
                ],
                [
                  0.3452,
                  0.8875
                ]
              ],
              "value": "string"
            },
            "birth_date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.5128,
                  0.2572
                ],
                [
                  0.3601,
                  0.618
                ],
                [
                  0.8617,
                  0.7737
                ],
                [
                  0.0663,
                  0.8262
                ]
              ],
              "value": "1990-07-13"
            },
            "birth_place": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.49,
                  0.7094
                ],
                [
                  0.2569,
                  0.2262
                ],
                [
                  0.7344,
                  0.6007
                ],
                [
                  0.2029,
                  0.3957
                ]
              ],
              "value": "PARIS"
            },
            "card_access_number": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.277,
                  0.7811
                ],
                [
                  0.6734,
                  0.868
                ],
                [
                  0.2142,
                  0.062
                ],
                [
                  0.6541,
                  0.4403
                ]
              ],
              "value": "546497"
            },
            "document_number": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.8245,
                  0.8147
                ],
                [
                  0.7642,
                  0.093
                ],
                [
                  0.7939,
                  0.8271
                ],
                [
                  0.319,
                  0.7397
                ]
              ],
              "value": "D2H6862M2"
            },
            "expiry_date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.9121,
                  0.117
                ],
                [
                  0.252,
                  0.7915
                ],
                [
                  0.3452,
                  0.8121
                ],
                [
                  0.9404,
                  0.6839
                ]
              ],
              "value": "2030-02-11"
            },
            "gender": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.5988,
                  0.8898
                ],
                [
                  0.0654,
                  0.193
                ],
                [
                  0.8074,
                  0.9382
                ],
                [
                  0.892,
                  0.0606
                ]
              ],
              "value": "F"
            },
            "given_names": [
              {
                "confidence": 0.99,
                "page_id": 0,
                "polygon": [
                  [
                    0.0329,
                    0.3477
                  ],
                  [
                    0.3076,
                    0.5171
                  ],
                  [
                    0.2629,
                    0.2103
                  ],
                  [
                    0.591,
                    0.9234
                  ]
                ],
                "value": "Maëlis-Gaëlle"
              }
            ],
            "issue_date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.4916,
                  0.4268
                ],
                [
                  0.971,
                  0.4859
                ],
                [
                  0.1047,
                  0.1067
                ],
                [
                  0.0495,
                  0.3534
                ]
              ],
              "value": "2020-02-12"
            },
            "mrz1": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.6005,
                  0.1226
                ],
                [
                  0.475,
                  0.4194
                ],
                [
                  0.365,
                  0.8631
                ],
                [
                  0.8405,
                  0.8176
                ]
              ],
              "value": "IDFRAX4RTBPFW46<<<<<<<<<<<<<<<"
            },
            "mrz2": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.7236,
                  0.6765
                ],
                [
                  0.1795,
                  0.305
                ],
                [
                  0.8521,
                  0.9626
                ],
                [
                  0.7779,
                  0.1931
                ]
              ],
              "value": "9007138F3002119FRA<<<<<<<<<<<6"
            },
            "mrz3": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.1873,
                  0.3787
                ],
                [
                  0.0123,
                  0.1568
                ],
                [
                  0.4916,
                  0.5439
                ],
                [
                  0.6502,
                  0.3536
                ]
              ],
              "value": "MARTIN<<MAELYS<GAELLE<MARIE<<<"
            },
            "nationality": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.3549,
                  0.709
                ],
                [
                  0.4372,
                  0.9649
                ],
                [
                  0.3674,
                  0.2312
                ],
                [
                  0.5685,
                  0.0585
                ]
              ],
              "value": "FRA"
            },
            "surname": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.8303,
                  0.959
                ],
                [
                  0.2495,
                  0.4881
                ],
                [
                  0.7338,
                  0.0664
                ],
                [
                  0.7266,
                  0.2673
                ]
              ],
              "value": "MARTIN"
            }
          },
          "processing_time": 1.605,
          "product": {
            "features": [
              "nationality",
              "card_access_number",
              "document_number",
              "given_names",
              "surname",
              "alternate_name",
              "birth_date",
              "birth_place",
              "gender",
              "expiry_date",
              "orientation",
              "mrz1",
              "mrz2",
              "mrz3",
              "issue_date",
              "authority",
              "document_type",
              "document_side"
            ],
            "name": "mindee/Carte Nationale d'Identité",
            "version": "2.0"
          },
          "started_at": "2023-09-19T09:22:00+00:00"
        },
        "n_pages": 1,
        "name": "myfile.jpg",
        "ocr": {}
      }
    },
  },
  key: 'Mindee_idcard_fr',
  noun: 'ID_Card_FR',
  display: {
    label: 'Mindee French ID Parsing',
    description:
      'Extract data from any French ID Card using the Mindee Carte Nationale d\'Identité Parsing API',
    hidden: false
  },
};
