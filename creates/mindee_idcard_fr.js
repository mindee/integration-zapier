/** Copyright (C) 2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const defaults = require("./defaults");

module.exports = {
  operation: {
    inputFields: [
      defaults.documentInputField,
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/idcard_fr/v1/predict',
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
        "url": "https://api.mindee.net/v1/products/mindee/idcard_fr/v1/predict"
      },
      "document": {
        "id": "732594b8-bad9-4c7e-9039-6ebd7a546971",
        "inference": {
          "extras": {},
          "finished_at": "2022-08-11T19:08:22+00:00",
          "is_rotation_applied": true,
          "pages": [
            {
              "extras": {},
              "id": 0,
              "orientation": {
                "value": 0
              },
              "prediction": {
                "authority": {
                  "confidence": 0.92,
                  "polygon": [
                    [
                      0.139,
                      0.225
                    ],
                    [
                      0.562,
                      0.225
                    ],
                    [
                      0.562,
                      0.263
                    ],
                    [
                      0.139,
                      0.263
                    ]
                  ],
                  "value": "SOUS-PREFECTURE DE BELLE (02)"
                },
                "birth_date": {
                  "confidence": 0.9,
                  "polygon": [
                    [
                      0.615,
                      0.739
                    ],
                    [
                      0.786,
                      0.739
                    ],
                    [
                      0.786,
                      0.763
                    ],
                    [
                      0.615,
                      0.763
                    ]
                  ],
                  "value": "1994-04-24"
                },
                "birth_place": {
                  "confidence": 0.21,
                  "polygon": [
                    [
                      0.336,
                      0.752
                    ],
                    [
                      0.671,
                      0.752
                    ],
                    [
                      0.671,
                      0.789
                    ],
                    [
                      0.336,
                      0.789
                    ]
                  ],
                  "value": "LYON 4E-ARRONDISSEMT"
                },
                "document_side": {
                  "value": "RECTO & VERSO"
                },
                "expiry_date": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.298,
                      0.189
                    ],
                    [
                      0.463,
                      0.189
                    ],
                    [
                      0.463,
                      0.221
                    ],
                    [
                      0.298,
                      0.221
                    ]
                  ],
                  "value": "2030-04-02"
                },
                "gender": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.388,
                      0.742
                    ],
                    [
                      0.407,
                      0.742
                    ],
                    [
                      0.407,
                      0.76
                    ],
                    [
                      0.388,
                      0.76
                    ]
                  ],
                  "value": "M"
                },
                "given_names": [
                  {
                    "confidence": 0.02,
                    "polygon": [
                      [
                        0.411,
                        0.684
                      ],
                      [
                        0.511,
                        0.684
                      ],
                      [
                        0.511,
                        0.717
                      ],
                      [
                        0.411,
                        0.717
                      ]
                    ],
                    "value": "UTCTOE"
                  }
                ],
                "id_number": {
                  "confidence": 0.29,
                  "polygon": [
                    [
                      0.428,
                      0.625
                    ],
                    [
                      0.572,
                      0.625
                    ],
                    [
                      0.572,
                      0.661
                    ],
                    [
                      0.428,
                      0.661
                    ]
                  ],
                  "value": "177577588555"
                },
                "mrz1": {
                  "confidence": 0.1,
                  "polygon": [
                    [
                      57.75,
                      940.889
                    ],
                    [
                      590.375,
                      940.889
                    ],
                    [
                      590.375,
                      974.168
                    ],
                    [
                      57.75,
                      974.168
                    ]
                  ],
                  "value": "IDFRADAMBARD<<<<<<<<<<<<<<<<<<075025"
                },
                "mrz2": {
                  "confidence": 0.1,
                  "polygon": [
                    [
                      59.103,
                      975.589
                    ],
                    [
                      590.518,
                      975.589
                    ],
                    [
                      590.518,
                      1014.362
                    ],
                    [
                      59.103,
                      1014.362
                    ]
                  ],
                  "value": "170775H557903VICTOR<<MARIE<9404246M5"
                },
                "orientation": {
                  "confidence": 0.99,
                  "degrees": 0
                },
                "surname": {
                  "confidence": 0.99,
                  "polygon": [
                    [
                      0.38,
                      0.653
                    ],
                    [
                      0.501,
                      0.653
                    ],
                    [
                      0.501,
                      0.683
                    ],
                    [
                      0.38,
                      0.683
                    ]
                  ],
                  "value": "DAMBARD"
                }
              }
            }
          ],
          "prediction": {
            "authority": {
              "confidence": 0.92,
              "page_id": 0,
              "polygon": [
                [
                  0.139,
                  0.225
                ],
                [
                  0.562,
                  0.225
                ],
                [
                  0.562,
                  0.263
                ],
                [
                  0.139,
                  0.263
                ]
              ],
              "value": "SOUS-PREFECTURE DE BELLE (02)"
            },
            "birth_date": {
              "confidence": 0.9,
              "page_id": 0,
              "polygon": [
                [
                  0.615,
                  0.739
                ],
                [
                  0.786,
                  0.739
                ],
                [
                  0.786,
                  0.763
                ],
                [
                  0.615,
                  0.763
                ]
              ],
              "value": "1994-04-24"
            },
            "birth_place": {
              "confidence": 0.21,
              "page_id": 0,
              "polygon": [
                [
                  0.336,
                  0.752
                ],
                [
                  0.671,
                  0.752
                ],
                [
                  0.671,
                  0.789
                ],
                [
                  0.336,
                  0.789
                ]
              ],
              "value": "LYON 4E-ARRONDISSEMT"
            },
            "expiry_date": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.298,
                  0.189
                ],
                [
                  0.463,
                  0.189
                ],
                [
                  0.463,
                  0.221
                ],
                [
                  0.298,
                  0.221
                ]
              ],
              "value": "2030-04-02"
            },
            "gender": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.388,
                  0.742
                ],
                [
                  0.407,
                  0.742
                ],
                [
                  0.407,
                  0.76
                ],
                [
                  0.388,
                  0.76
                ]
              ],
              "value": "M"
            },
            "given_names": [
              {
                "confidence": 0.02,
                "page_id": 0,
                "polygon": [
                  [
                    0.411,
                    0.684
                  ],
                  [
                    0.511,
                    0.684
                  ],
                  [
                    0.511,
                    0.717
                  ],
                  [
                    0.411,
                    0.717
                  ]
                ],
                "value": "UTCTOE"
              }
            ],
            "id_number": {
              "confidence": 0.29,
              "page_id": 0,
              "polygon": [
                [
                  0.428,
                  0.625
                ],
                [
                  0.572,
                  0.625
                ],
                [
                  0.572,
                  0.661
                ],
                [
                  0.428,
                  0.661
                ]
              ],
              "value": "177577588555"
            },
            "mrz1": {
              "confidence": 0.1,
              "page_id": 0,
              "polygon": [
                [
                  57.75,
                  940.889
                ],
                [
                  590.375,
                  940.889
                ],
                [
                  590.375,
                  974.168
                ],
                [
                  57.75,
                  974.168
                ]
              ],
              "value": "IDFRADAMBARD<<<<<<<<<<<<<<<<<<075025"
            },
            "mrz2": {
              "confidence": 0.1,
              "page_id": 0,
              "polygon": [
                [
                  59.103,
                  975.589
                ],
                [
                  590.518,
                  975.589
                ],
                [
                  590.518,
                  1014.362
                ],
                [
                  59.103,
                  1014.362
                ]
              ],
              "value": "170775H557903VICTOR<<MARIE<9404246M5"
            },
            "surname": {
              "confidence": 0.99,
              "page_id": 0,
              "polygon": [
                [
                  0.38,
                  0.653
                ],
                [
                  0.501,
                  0.653
                ],
                [
                  0.501,
                  0.683
                ],
                [
                  0.38,
                  0.683
                ]
              ],
              "value": "DAMBARD"
            }
          },
          "processing_time": 1.484,
          "product": {
            "features": [
              "document_side",
              "id_number",
              "given_names",
              "surname",
              "birth_date",
              "birth_place",
              "expiry_date",
              "authority",
              "gender",
              "orientation",
              "mrz1",
              "mrz2"
            ],
            "name": "mindee/idcard_fr",
            "type": "standard",
            "version": "1.0"
          },
          "started_at": "2022-08-11T19:08:20+00:00"
        },
        "n_pages": 1,
        "name": "idcard_fr.png"
      }
    },
  },
  key: 'Mindee_idcard_fr',
  noun: 'ID_Card_FR',
  display: {
    label: 'Mindee French ID Parsing',
    description:
      'Extract data from an French ID Card using the Mindee Carte Nationale d\'Identité Parsing API',
    hidden: false,
    important: false
  },
};
