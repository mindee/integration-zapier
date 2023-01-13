One of the most common ways we receive invoices for services rendered is via email.  The invoices are typically PDF files attached to the email.

In a typical expense process, invoices that are emailed to your company will have to be saved locally to a computer, and then re-uploaded into an invoicing system.  Maybe, even worse, the document must be opened and the details manually entered into the system.

In this post, we’ll build an invoice processing system: invoices that arrive via email will be automatically extracted, and all the data inserted into a Google Sheet.  

The best part: No coding required!  It will “just work” and will be completely “hands-free” - all the work will be done automatically!  If a Google Sheet is not your desired outcome - there are thousands of apps connected with Zapier, so this tutorial can be easily modified to interact with any other application.

The tools required:

1. A Gmail based email account.  
2. A free Zapier account (sign up at [Zapier.com](https://zapier.com))
3. A [Mindee account](https://platform.mindee.com) with an Invoice parsing API key.

## Zapier

Zapier is a no code service that connects different tools with a secure no-code interface.  They call the connections “Zaps.”  Each Zap has a “trigger” an event that starts the process, and an "action" that occurs after the trigger has fired.

In the case of the Zap we are building, you will need a premium account ($29.95/ month). If you are a new user (or if you have a new Zapier account), you'll have free premium access for a week (but your Zap will turn off when the trial ends).

Once you have created a Zapier account, you’ll land at the app dashboard.  Click the black “Create Zap” button:

