In no-code solutions, you are not required to write a single line of code when using the Mindee APIs.

We have integrated with [Zapier](https://zapier.com) to include our off the shelf APIs:
[invoice](https://developers.mindee.com/docs/extract-invoice-data-from-email-attachments),
[receipt](https://developers.mindee.com/docs/zapier-receipt-ocr) and
[passport](https://developers.mindee.com/docs/zapier-passport-ocr-extraction) OCR extraction in their no code platform.

## What is Zapier?
Zapier is a no-code platform that helps you connect popular apps to automate workflows.
Mindee’s goal is to automate your document processing hence our integration with Zapier is a no-brainer!

You can sign up for a free account at [Zapier.com](https://zapier.com).
Once you’ve signed up, you can begin creating your workflow called a **Zap**.

The free tier is a great way to try out Zapier, but your Zaps only run every 15 minutes, and you are limited on how complex your Zaps can be unless you upgrade your account.

## How do Zaps work?
All Zaps have **triggers** and **actions**.
They basically do what they sound like: a trigger is something that happens externally to start the Zap.
When that trigger happens, the action (or actions) will occur.
Often, actions will trigger further actions to obtain the desired result.

In the case of Mindee OCR, all of our APIs are actions: when something happens, it uses one of the Mindee OCR APIs.
Once the Mindee action has been completed, your Zap will have all the extracted data from the Mindee API and you can perform additional actions with the data.

For example, an incoming email with an invoice attachment might be a trigger for your Zap.
The Zap action will run the Mindee invoice OCR parsing on the invoice attachment.
The results of that action will be the extracted details of the invoice.
Your next action might be to place these details in your accounting software, for example, Quickbooks which has a Zapier integration.

&nbsp;
&nbsp;
**Questions?**
<img alt="Slack Logo Icon" style="display:inline!important" src="https://files.readme.io/5b83947-Slack.png" width="20" height="20">&nbsp;&nbsp;[Join our Slack](https://join.slack.com/t/mindee-community/shared_invite/zt-1jv6nawjq-FDgFcF2T5CmMmRpl9LLptw)