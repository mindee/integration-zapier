module.exports = {
  operation: { 
    inputFields: [
      { key: 'document', required: true, type: 'file' }
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.mindee.net/v1/products/mindee/invoices/v2/predict',
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
    sample: {
      "finished_at": "2021-08-31T23:39:10+00:00",
      "pages": [
        {
          "id": 0,
          "prediction": {
            "company_registration": [],
            "date": {
              "confidence": 0.99,
              "polygon": [
                [0.763, 0.238],
                [0.848, 0.238],
                [0.848, 0.251],
                [0.763, 0.251]
              ],
              "value": "2020-06-29"
            },
            "document_type": {
              "value": "INVOICE"
            },
            "due_date": {
              "confidence": 0.99,
              "polygon": [
                [0.763, 0.254],
                [0.848, 0.254],
                [0.848, 0.268],
                [0.763, 0.268]
              ],
              "raw": "2020-06-29",
              "value": "2020-06-29"
            },
            "invoice_number": {
              "confidence": 0.99,
              "polygon": [
                [0.763, 0.22],
                [0.802, 0.22],
                [0.802, 0.233],
                [0.763, 0.233]
              ],
              "value": "1277"
            },
            "locale": {
              "confidence": 0.81,
              "currency": "USD",
              "language": "en"
            },
            "orientation": {
              "confidence": 0.99,
              "degrees": 0
            },
            "payment_details": [],
            "supplier": {
              "confidence": 0,
              "polygon": [],
              "value": null
            },
            "taxes": [],
            "total_excl": {
              "confidence": 1,
              "polygon": [
                [0.863, 0.467],
                [0.923, 0.467],
                [0.923, 0.484],
                [0.863, 0.484]
              ],
              "value": 350
            },
            "total_incl": {
              "confidence": 1,
              "polygon": [
                [0.823, 0.52],
                [0.918, 0.52],
                [0.918, 0.543],
                [0.823, 0.543]
              ],
              "value": 380.45
            }
          }
        }
      ],
      "prediction": {
        "company_registration": [],
        "date": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.763, 0.238],
            [0.848, 0.238],
            [0.848, 0.251],
            [0.763, 0.251]
          ],
          "value": "2020-06-29"
        },
        "document_type": {
          "value": "INVOICE"
        },
        "due_date": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.763, 0.254],
            [0.848, 0.254],
            [0.848, 0.268],
            [0.763, 0.268]
          ],
          "raw": "2020-06-29",
          "value": "2020-06-29"
        },
        "invoice_number": {
          "confidence": 0.99,
          "page_id": 0,
          "polygon": [
            [0.763, 0.22],
            [0.802, 0.22],
            [0.802, 0.233],
            [0.763, 0.233]
          ],
          "value": "1277"
        },
        "locale": {
          "confidence": 0.81,
          "currency": "USD",
          "language": "en"
        },
        "payment_details": [],
        "supplier": {
          "confidence": 0,
          "page_id": 0,
          "polygon": [],
          "value": null
        },
        "taxes": [],
        "total_excl": {
          "confidence": 1,
          "page_id": 0,
          "polygon": [
            [0.863, 0.467],
            [0.923, 0.467],
            [0.923, 0.484],
            [0.863, 0.484]
          ],
          "value": 350
        },
        "total_incl": {
          "confidence": 1,
          "page_id": 0,
          "polygon": [
            [0.823, 0.52],
            [0.918, 0.52],
            [0.918, 0.543],
            [0.823, 0.543]
          ],
          "value": 380.45
        }
      },
      "processing_time": 5.965,
      "product": {
        "features": [
          "locale",
          "invoice_number",
          "date",
          "due_date",
          "total_incl",
          "total_excl",
          "taxes",
          "document_type",
          "payment_details",
          "company_registration",
          "supplier",
          "orientation"
        ],
        "name": "mindee/invoices",
        "type": "standard",
        "version": "2.1"
      },
      "started_at": "2021-08-31T23:39:04+00:00"
    },
  },
  key: 'Mindee_invoice',
  noun: 'Invoice',
  display: {
    label: 'Mindee Invoice Parsing',
    description:
      'Extract data from an Invoice using the Mindee Invoice Parsing API',
    hidden: false,
    important: true,
  },
};
