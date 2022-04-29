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
        url: 'https://api.mindee.net/v1/products/mindee/passport/v1/predict',
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
      "prediction": {
        "birth_date": {
          "confidence": 1,
          "polygon": [
            [0.341, 0.689],
            [0.571, 0.689],
            [0.571, 0.714],
            [0.341, 0.714]
          ],
          "value": "1995-05-20"
        },
        "birth_place": {
          "confidence": 0.9,
          "polygon": [
            [0.441, 0.724],
            [0.556, 0.724],
            [0.556, 0.744],
            [0.441, 0.744]
          ],
          "value": "CAMTETH"
        },
        "country": {
          "confidence": 1,
          "polygon": [
            [0.508, 0.547],
            [0.559, 0.547],
            [0.559, 0.568],
            [0.508, 0.568]
          ],
          "value": "GBR"
        },
        "expiry_date": {
          "confidence": 1,
          "polygon": [
            [0.34, 0.796],
            [0.576, 0.796],
            [0.576, 0.82],
            [0.34, 0.82]
          ],
          "value": "2017-04-22"
        },
        "gender": {
          "confidence": 1,
          "polygon": [
            [0.054, 0.919],
            [0.928, 0.919],
            [0.928, 0.945],
            [0.054, 0.945]
          ],
          "value": "M"
        },
        "given_names": [
          {
            "confidence": 0.99,
            "polygon": [
              [0.341, 0.617],
              [0.435, 0.617],
              [0.435, 0.638],
              [0.341, 0.638]
            ],
            "value": "HENERT"
          }
        ],
        "id_number": {
          "confidence": 1,
          "polygon": [
            [0.723, 0.547],
            [0.899, 0.547],
            [0.899, 0.569],
            [0.723, 0.569]
          ],
          "value": "707797979"
        },
        "issuance_date": {
          "confidence": 1,
          "polygon": [
            [0.34, 0.763],
            [0.565, 0.763],
            [0.565, 0.788],
            [0.34, 0.788]
          ],
          "value": "2012-04-23"
        },
        "mrz1": {
          "confidence": 0.99,
          "polygon": [
            [0.055, 0.882],
            [0.926, 0.882],
            [0.926, 0.911],
            [0.055, 0.911]
          ],
          "value": "P<GBRPUDARSAN<<HENERT<<<<<<<<<<<<<<<<<<<<<<<"
        },
        "mrz2": {
          "confidence": 1,
          "polygon": [
            [0.054, 0.919],
            [0.928, 0.919],
            [0.928, 0.945],
            [0.054, 0.945]
          ],
          "value": "7077979792GBR9505209M1704224<<<<<<<<<<<<<<00"
        },
        "orientation": {
          "confidence": 0.99,
          "degrees": 0
        },
        "surname": {
          "confidence": 0.99,
          "polygon": [
            [0.34, 0.581],
            [0.473, 0.581],
            [0.473, 0.604],
            [0.34, 0.604]
          ],
          "value": "PUDARSAN"
        }
      }
  
  
    },
  },
  key: 'Mindee_passport',
  noun: 'Passport',
  display: {
    label: 'Mindee International Passport Parsing',
    description:
      'Instantly extract data from any passport using the Mindee Passport Extraction API',
    hidden: false,
    important: true,
  },
};
