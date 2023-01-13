Every time you plan an international trip, you are asked for  your passport number, date of birth, country of citizenship, so that you can prove who you are.

What if the airlines had a specialized tool to extract this information from an official document like a passport?  You could simply upload an image, and the'd extract the data, and enter it into their database.

With Mindee's Passport OCR API it is possible... using Mindee and Zapier - you can do it with no code!

All you need is 

1. A Google account 
2. A free [Zapier account](https://zapier.com)
3. A free [Mindee API key](https://platform.mindee.com/apishub/products/mindee/passport?setup=default#tokens)

To do this work with no coding at all, we'll use Zapier.
Zapier is a no code service that connects different tools with a secure no-code interface.
They call the connections "Zaps".
Each Zap has a "trigger" an event that starts the process, and an "action" that occurs after the trigger has fired.

In the case of the Zap we are building, you will need a premium account.
If you are a new user (or if you have a new Zapier account), you'll have free premium access for a week (but your Zap will turn off when the trial ends).

## Our Zap Trigger

We'll create a simple Google Form that will ask for a passport image.
When the form is submitted, it is saved in Google Drive.  Our Zap will be triggered by "New File in Google Drive".

### Creating a Google Form

From your Google account - you can create a form at [Google Forms](https://docs.google.com/forms).
We've created a simple form that only asks for a file upload for a passport:

![forms](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/a7d6fda-Screenshot_2021-10-13_at_17.48.55.png) 

Now, all the files uploaded will appear in a folder in my Google Drive.
This is what will trigger our zap. At Zapier.com, click the "Create Zap" button

![create zap](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/3ddc05d-Screenshot_2021-10-13_at_17.54.04.png) 

Our Trigger will be from Google Drive.
We want to trigger whenever there is a new file in a folder (note that the file upload folder may be 2 layers deep in your Google Drive):

![drive](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/50454d9-Screenshot_2021-10-13_at_21.26.06.png) 

You'll be asked to sign into Google, and to share your Drive access to Zapier.
The next steps are share the folder, and to choose the folder.
Google Drive names the folder with the name of the Google Form, which is handy for finding the correct content.

Now, to test this trigger, you must upload a passport using the form, so that Zapier can find a file.
I recommend the Isabel Santos fake passport (Google it, it's a bit of a ride - and the Bruce Lee signature is the pièce de résistance).

## Adding an Action

The Zap will Trigger when a new file lands in Google Drive.
Now the Action to undertake is to parse the passport photo with Mindee, and add it to a database.
This is actually 2 actions: Mindee OCR extraction and then depositing the extracted results.
First, of course is to add the Mindee Passport Action:

![passport action](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/9a07584-Screenshot_2021-10-13_at_21.28.22.png) 

You'll be asked to sign in to a Mindee account.
If you have followed the other tutorials on Invoice or Passport OCR demos, you may have already logged in.
If it's your first connection: 

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

The document to send to Mindee is clearly the document that was uploaded to Google drive (but you have to tell Zapier that):

![get doc](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/a0832df-Screenshot_2021-10-13_at_21.35.23.png) 

You can test this Action, and you should get a 201 response from Mindee with the extracted data.

Now, we have the data, let's place it in a database.  there are a lot of databases in Zapier, but we'll use everyone's favourite - a Google Sheet :)

We create a Sheet in our Google account, naming columns to associate with passport data, and link to it in Zapier:

![link sheet](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/bb3b316-Screenshot_2021-10-13_at_21.41.42.png) 

We fill in the predicted values from Mindee into the columns that Zapier extracted from the spreadsheet, and when we test the Zap, the values are added into our 'database':

![predicted values](https://raw.githubusercontent.com/mindee/integration-zapier/main/docs/img/26b5585-Screenshot_2021-10-13_at_21.44.39.png) 

And thats all there is to it.  We've build a sample app that an airline could use to simplify the data entry for international travel - with just a few clicks and using no code!

> Clearly this is a sample app - as this sort of data does require more security than storing in a Google account.  But as a proof of concept, it shows the process that one could follow.  

there are thousands of applications already set up in Zapier - and we're excited to see what sorts of apps can be built with Mindee.

&nbsp;
&nbsp;
**Questions?**
<img alt="Slack Logo Icon" style="display:inline!important" src="https://files.readme.io/5b83947-Slack.png" width="20" height="20">&nbsp;&nbsp;[Join our Slack](https://join.slack.com/t/mindee-community/shared_invite/zt-1jv6nawjq-FDgFcF2T5CmMmRpl9LLptw)