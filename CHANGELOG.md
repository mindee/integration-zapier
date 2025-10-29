# Changelog

## v4.0.2 - 2025-10-29
- Update Zapier platform to 17.9.1
- Add the Zapier version to the user agent string

## v4.0.1 - 2025-10-28
- Update Zapier platform to 17.9.0

## v4.0.0 - 2025-10-21
- Add support for Mindee V2 API
- Remove support for all Mindee V1 APIs

## v3.2.2 - 2025-10-20
- Update documentation links

## v3.2.1 - 2025-10-16
- Hide rather than delete US Driving License
- Hide Custom API

## v3.2.0 - 2025-10-16
- Update tests to make actual calls to the API
- Add the Zap version to the user agent
- Miscellaneous code improvements
- Replace US Driving License with Driver License (international)

## v3.1.2 - 2025-10-15
- Update Zapier platform to 17.8.0

## v3.1.1 - 2025-10-08
- Fix CI issues
- Bump dependencies
- Update README

## v3.1.0 - 2024-03-12
- add support for Generated APIs
- add support for async calls

## v3.0.0 - 2023-09-22
- update to Receipts v5
- update to French National Identity Card v2 (Manages new format)
- add French Bank Account Details API (R.I.B.) 
- add US Bank Check API 
- add US Driving License API

## v2.2.1 - 2023-08-14
- fix the URL structure for Custom API

## v2.2.0 - 2023-06-15
- Improve authentication method: a subscription to Invoice is no longer needed.

## v2.1.1 - 2023-04-12
- [Financial Docs OCR](https://docs.mindee.com/v1/off-the-shelf-products/financial-documents-ocr) v1
- Update Zapier Core to v13

## v2.0.1 - 2023-03-20
- fixes in the URL structure to support new API Builder versions

## v2.0.0 - 2023-01-23
- add the Custom APIs (from API Builder)
- update to Invoice v4 (new fields including line items, better performances)
- update to Receipt v4 (new fields including line items, better performances)
- new authentication and connection based on a single api key for all APIs
- slight changes in the UX

## v1.2.0 - 2022-08-12
- add the French ID Card API (Carte Nationale d'Identité)
- add missing tests for creation of Receipt & Passport
- move from should.js (project has been abandoned) to chai for the BDD / TDD assertion library
- upgrade Node.js version the integration is running on Zapier servers
- upgrade Zapier & Mocha dependencies
- update the help message to point to the new create your API key documentation

## v1.1.0 - 2022-05-02
- Invoice OCR v3 support: see [API changelog](https://docs.mindee.com/v1/releases/releases-notes-invoice-ocr#version-3) for details.

## v1.0.2 - 2022-05-02
- [Invoice OCR](https://docs.mindee.com/v1/off-the-shelf-products/invoice-ocr) v2
- [Passport OCR](https://docs.mindee.com/v1/off-the-shelf-products/passport-ocr) v1
- [Receipt OCR](https://docs.mindee.com/v1/off-the-shelf-products/receipt-ocr) v3
