# Mindee's Zapier Integration Changelog

## v2.0.0

### New

- add the Custom APIs (from API Builder)
- update to Invoice v3 (new fields including line items, better performances)
- update to Receipt v4 (new fields including line items, better performances)

### Changes

- new authentication and connection based on a single api key for all APIs
- slight changes in the UX

## v1.2.0

### New

- add the French ID Card API (Carte Nationale d'Identité)
- add missing tests for creation of Receipt & Passport

### Changes

- move from should.js (project has been abandoned) to chai for the BDD / TDD assertion library
- upgrade Node.js version the integration is running on Zapier servers
- upgrade Zapier & Mocha dependencies
- update the help message to point to the new create your API key documentation

## v1.1.0

### Changes

- Invoice OCR v3 support: see [API changelog](https://developers.mindee.com/docs/releases-notes-invoice-ocr#version-3) for details.

## v1.0.2

### New

- [Invoice OCR](https://developers.mindee.com/docs/invoice-ocr) v2
- [Passport OCR](https://developers.mindee.com/docs/passport-ocr) v1
- [Receipt OCR](https://developers.mindee.com/docs/receipt-ocr) v3
