Have you ever been out at a business meal, and collected the receipt, but before you could submit your expense, you lost the receipt? With Mindee's receipt parsing API, you can take a photo, and we'll extract all the details from the receipt.

The trick is developing a tool that is easy to use from your phone to take the image and do the processing.

In this post, well use the Mindee Receipt OCR extraction inside our no-code Zapier integration.
We'll have a working demo up in minutes without writing a single line of code.

We'll use a dedicated Discord channel to upload the receipts, and then we'll send the image, and the data pulled form the receipt to a second discord channel - where you can see all of your receipts for the week (when it is time to do expense reporting). 

Zapier offers thousands of applications to integrate with - you might even find your expense reporting software  is supported - so the data can be sent right into a new expense report!

The tools required:

1. A Discord account with a channel you can use for uploading receipts.
2. A free Zapier account (sign up at [Zapier.com](https://zapier.com))
3. A [Mindee account](https://platform.mindee.com) with an Invoice parsing API key.

## Zapier

Zapier is a no code service that connects different tools with a secure no-code interface.  They call the connections “Zaps.”  Each Zap has a “trigger” an event that starts the process, and an "action" that occurs after the trigger has fired.

In the case of the Zap we are building, you will need a premium account. If you are a new user (or if you have a new Zapier account), you'll have free premium access for a week (but your Zap will turn off when the trial ends).

Once you have created a Zapier account, you’ll land at the app dashboard.  Click the black “Create Zap” button:

![create zap](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/34d360c-Screenshot_2021-10-06_at_19.32.06.png)

The first step in creating the Zap is creating the trigger - which will be a new message (with an attachment) being posted in a Discord channel:


## Trigger Creation

The trigger we want is a new message (with an attachment) being posted in a Discord channel.  Search the “App events” for Discord:

![discord](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/c7340ed-Screenshot_2021-10-07_at_21.34.35.png)

The trigger is a new message appearing in a channel:

![trigger](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/569e7d9-Screenshot_2021-10-07_at_21.35.09.png)

Log in to your Discord account, and pick the channel you're going to upload receipts to.  In this case, we have created a (creatively named) "#upload-receipts" channel.

![channel](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/0abf854-Screenshot_2021-10-07_at_21.37.25.png)

In the next step, Zapier will test the trigger, so make sure you have a message in your channel (it will be a lot easier if there is a receipt connected to the message).  So if you have not sent a message with a receipt to the channel, do that before you test the Trigger.

## Action time!

Now we will create an action, and we will use the Mindee OCR Expense Receipt Parsing API. Search for Mindee in the action search bar:

![search mindee](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/9a82d87-Screenshot_2021-10-06_at_19.40.22.png)

We want to use the Receipt endpoint from Mindee:
![expense receipt](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/549805c-Screenshot_2021-10-12_at_20.22.23.png)

If you have followed the other tutorials on Invoice or Passport OCR demos, you may have already logged in. If it's your first connection: 

![connection](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/7a8650d-Screenshot_2021-10-12_at_20.23.26.png)
![connection name](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/zapier-connection.png)

Then on the second field, you'll have to add a valid API Key.

In order to get this API Key, you should go to https://platform.mindee.com
You’ll need to sign in to your Mindee account, and then create or use one of your existing API keys.
Once connected, you can directly click on the top right corner of the page, on your username. 

![username](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/username.png)

Then you can click on Settings, which will direct you on the settings page.
On this page, click on API keys, on the left of your screen, in order to have access to all your valid API Keys. 

![API Key](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/API-keys.png)

Then, copy the key and paste it on your Zapier connection page.

![API key Zapier](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/API-Key-Zapier.png)

Insert your API key and Zapier will authenticate your account with Mindee.

We'll set the action to test the attachment that was sent into the discord channel. We do this by specifying the URL where Mindee can retrieve the image.
Finally, we'll test the Mindee action:

![test discord](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/f620fae-Screenshot_2021-10-12_at_20.39.40.png)

![test mindee](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/24c9f3b-Screenshot_2021-10-12_at_20.40.41.png)

In the response, we can see the 201 response with the parsed information from the receipt.
Now that we have extracted all this data, we can send a message in Discord to the "results" channel with all the receipt details.
You could do one of thousands of actions with this data. but for demo purposes, we'll just use the same Discord account. 

We'll pick the channel to send the results to, and then format the results:

![pick channel](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/1da8d4c-Screenshot_2021-10-12_at_20.51.38.png)


The channel message will extract the time from the Discord message, and then pull Mindee receipt data: 
Expense category
Expense subcategory
Document type
Locale & currency
Receipt date
Receipt time
Supplier
Taxes details
Total tax
Tip & Gratuity (typed and handwritten)
Total amount (typed and handwritten)
Total net (excluding taxes)

There is text added to format the message nicely, and when you test this, a message will appear in the Discord channel with your parsed receipt.

we'll name the messenger the "Mindee Bot" and use the Mindee logo.
The final step before activating our zap is to run the final test, and this message appears in Discord:


![demo discord](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/1b14e37-Screenshot_2021-10-12_at_20.52.42.png)


In this demo - we've sent a receipt to a Discord channel.
Zapier retrieves the URL of the attachment, and sends it to Mindee's Receipt API to parse the data. When the extraction is complete, a formatted message containing the extracted data, and a picture of the receipt is posted to a 2nd Discord channel.

&nbsp;
&nbsp;
**Questions?**
<img alt="Slack Logo Icon" style="display:inline!important" src="https://files.readme.io/5b83947-Slack.png" width="20" height="20">&nbsp;&nbsp;[Join our Slack](https://join.slack.com/t/mindee-community/shared_invite/zt-1jv6nawjq-FDgFcF2T5CmMmRpl9LLptw)