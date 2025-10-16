/** Copyright (C) 2022, Mindee.
 *
 * This program is licensed under the MIT License.
 * See LICENSE for full license details.
 */

const defaults = require("./defaults.js");
const { MINDEE_V1_BASE_URL } = require("../constants.js");
const { enqueueAndParse } = require("./async");

/**
 * Performs the enqueue operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueue results, containing queue information.
 */
const perform = (z, bundle) => {
  const response = enqueueAndParse(
    z,
    bundle.inputData.document,
    "mindee", "driver_license", "1", 60);
  return response.then((res) => JSON.parse(res.content));
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
        "url": "https://api.mindee.net/v1/products/mindee/driver_license/v1/predict_async"
      },
      "document": {
        "annotations": {
          "labels": []
        },
        "id": "869631cb-6e59-40d0-8b52-b53b13493380",
        "inference": {
          "extras": {},
          "finished_at": "2024-11-15T14:05:46.665000",
          "is_rotation_applied": true,
          "pages": [
            {
              "extras": {},
              "id": 0,
              "orientation": {"value": 0},
              "prediction": {}
            }
          ],
          "prediction": {
            "category": {
              "page_id": 0,
              "polygon": [
                [0.386, 0.251],
                [0.492, 0.251],
                [0.492, 0.282],
                [0.386, 0.282]
              ],
              "value": "D"
            },
            "country_code": {
              "page_id": 0,
              "polygon": [
                [0.039, 0.045],
                [0.421, 0.045],
                [0.421, 0.147],
                [0.039, 0.147]
              ],
              "value": "USA"
            },
            "date_of_birth": {
              "page_id": 0,
              "polygon": [
                [0.732, 0.322],
                [0.916, 0.322],
                [0.916, 0.372],
                [0.732, 0.372]
              ],
              "value": "1957-02-01"
            },
            "dd_number": {
              "page_id": 0,
              "polygon": [
                [0.383, 0.85],
                [0.658, 0.85],
                [0.658, 0.989],
                [0.383, 0.989]
              ],
              "value": "1234567890123456"
            },
            "expiry_date": {
              "page_id": 0,
              "polygon": [
                [0.445, 0.635],
                [0.631, 0.635],
                [0.631, 0.68],
                [0.445, 0.68]
              ],
              "value": "2018-02-01"
            },
            "first_name": {
              "page_id": 0,
              "polygon": [
                [0.384, 0.452],
                [0.502, 0.452],
                [0.502, 0.491],
                [0.384, 0.491]
              ],
              "value": "Jelani"
            },
            "id": {
              "page_id": 0,
              "polygon": [
                [0.723, 0.259],
                [0.914, 0.259],
                [0.914, 0.311],
                [0.723, 0.311]
              ],
              "value": "D12345678"
            },
            "issued_date": {
              "page_id": 0,
              "polygon": [
                [0.736, 0.635],
                [0.922, 0.635],
                [0.922, 0.68],
                [0.736, 0.68]
              ],
              "value": "2013-01-10"
            },
            "issuing_authority": {
              "page_id": 0,
              "polygon": [],
              "value": null
            },
            "last_name": {
              "page_id": 0,
              "polygon": [
                [0.384, 0.395],
                [0.521, 0.395],
                [0.521, 0.437],
                [0.384, 0.437]
              ],
              "value": "Sample"
            },
            "mrz": {
              "page_id": 0,
              "polygon": [],
              "value": null
            },
            "place_of_birth": {
              "page_id": 0,
              "polygon": [],
              "value": null
            },
            "state": {
              "page_id": 0,
              "polygon": [
                [0.508, 0.546],
                [0.542, 0.546],
                [0.542, 0.579],
                [0.508, 0.579]
              ],
              "value": "AZ"
            }
          },
          "processing_time": 6.567,
          "product": {
            "features": [
              "country_code",
              "state",
              "id",
              "category",
              "last_name",
              "first_name",
              "date_of_birth",
              "place_of_birth",
              "expiry_date",
              "issued_date",
              "issuing_authority",
              "mrz",
              "dd_number"
            ],
            "name": "mindee/driver_license",
            "type": "standard",
            "version": "1.0"
          },
          "started_at": "2024-11-15T14:05:39.850000"
        },
        "n_pages": 1,
        "name": "myfile.jpg",
        "ocr": {}
      }
    },
  },
  key: "Mindee_driver_license",
  noun: "Driver_License",
  display: {
    label: "Mindee Driver's License Parsing",
    description:
      "Extract Driver License data from any country using the Mindee Driver License API",
    hidden: false
  },
};
