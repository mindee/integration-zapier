# Changelog

## 3.2.1
- Hide rather than delete US Driving License
- Hide Custom API

## 3.2.0
- Update tests to make actual calls to the API
- Add the Zap version to the user agent
- Miscellaneous code improvements
- Replace US Driving License with Driver License (international)

## 3.1.2
- Update Zapier platform to 17.8.0

## 3.1.1
- Fix CI issues
- Bump dependencies
- Update README

## 3.1.0
- add support for Generated APIs
- add support for async calls

## 3.0.0
- update to Receipts v5
- update to French National Identity Card v2 (Manages new format)
- add French Bank Account Details API (R.I.B.) 
- add US Bank Check API 
- add US Driving License API

## 2.2.1
- fix the URL structure for Custom API

## 2.2.0
- Improve authentication method: a subscription to Invoice is no longer needed.

## 2.1.1
- [Financial Docs OCR](https://developers.mindee.com/docs/financial-documents-ocr) v1
- Update Zapier Core to v13

## 2.0.1
- fixes in the URL structure to support new API Builder versions

## 2.0.0
- add the Custom APIs (from API Builder)
- update to Invoice v4 (new fields including line items, better performances)
- update to Receipt v4 (new fields including line items, better performances)
- new authentication and connection based on a single api key for all APIs
- slight changes in the UX

## 1.2.0
- add the French ID Card API (Carte Nationale d'Identité)
- add missing tests for creation of Receipt & Passport
- move from should.js (project has been abandoned) to chai for the BDD / TDD assertion library
- upgrade Node.js version the integration is running on Zapier servers
- upgrade Zapier & Mocha dependencies
- update the help message to point to the new create your API key documentation

## 1.1.0
- Invoice OCR v3 support: see [API changelog](https://developers.mindee.com/docs/releases-notes-invoice-ocr#version-3) for details.

## 1.0.2
- [Invoice OCR](https://developers.mindee.com/docs/invoice-ocr) v2
- [Passport OCR](https://developers.mindee.com/docs/passport-ocr) v1
- [Receipt OCR](https://developers.mindee.com/docs/receipt-ocr) v3
