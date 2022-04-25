# Mindee's Zapier Integrations

At Mindee, we recently launched no-code versions of our ‘off the shelf’ APIs (invoice, receipt and passport OCR extraction) as a part of the Zapier platform. Zapier is a no code platform that allows for easy integration between literally thousands of different applications - with no (or a very little bit) of coding.

Our mantra is to help automate your documentation extraction, so this collaboration just makes sense - any way we can help you easily add our Optical Character Recognition (OCR) and Machine Learning data extraction tools, we’ll do it!

Zapier’s automations are known as ‘zaps’, and they have a trigger that begins the Zap - creating a series of actions that follow one another.

Our three APis (invoice, passport and receipt) are Zapier actions.  The typical trigger is “a new file has arrived - now extract the data with Mindee. Now that you have the data extracted by Mindee, do things with that data.

In this post, we will walk through how we created the Zapier actions.  There are a couple of reasons we wanted to document “how we did it.”

1. There were a few tricky bits tha involved file uploads, so if we can help others build document transfer Zaps, the developer community is better for it.
2. Our Document Builder API allows you to create your own document OCR extraction API.  By following the steps in this post, you can create Zapier actions with YOUR API.

> Creating your Zapier action will not be a no-code operation, you may want someone with development experience to help out create this action for you. We’ll try to keep it as ‘low-code’ as possible, but you will be making changes to code to make your Zap Action or Trigger.

## Starting off Creating an action

Zapier has a great web interface to create triggers and actions. Unfortunately, the online GUI does not support uploading documents as a part of the action.  The documentation points you to the Command Line Interface (the Zapier CLI) to create your Action.  

The documentation for the CLI has tutorials that don’t exactly match the sample code, and the rest of the documentation really focuses on using the web GUI.  So hopefully, this walk through will help those stuck in the same predicament we found at Mindee to build their Zapier Triggers or Actions.

You’ll need to start off by installing the Zapier CLI. We’ll assume you have Node JS installed (if you don't, a Google search will help you with the steps for your computer’s operating system).

Install the Zapier CLI:

```Shell
# install the CLI globally
npm install -g zapier-platform-cli
```

Next yu’ll need to login to Zapier via the command line (You’ll need a free [Zapier account](https://zapier.com) to accomplish this):

```Shell
zapier login
```

## Creating a CLI integration

From here, we’ll move away from the Zapier CLI tutorial, and go our own route.  We have the code for our three OCR integrations available on [GitHub](https://github.com/dougsillars/MindeeZapierIntegrations).

Clone this repository to your computer, and open the directory, Inside is the Mindee directory - which contains the Zapier integration. In this tutorial we’ll create an action for a Mindee Document Builder API - one that extracts data from the US tax for W-9. Rename the “Mindee” directory to what you’ll call your Zapier integration. Inside this directory, delete the file ‘.zapierapprc’ (if you do not see this file, you may need to do a Google search on how to see hidden files in your operating system).

The .zapierapprc file has a unique ID for the app you just duplicated.  As we go through the process of creating your Action - the CLi will create a new file (with your new unique ID for your Zapier action).

### Authentication

When you build a Zap with any trigger or Action, you’ll often be asked to login or authenticate with the service: For example,  if your Zap is saving into Google Drive - the Zap needs access to your google account.

The authentication step is stored in the authentication.js file.  If you are using an API for your action - you can use the url for the authentication step. In the case of Mindee, the api key goes into an authorization header.  

If we were building authentication for a typical service, it might look like this:

```JSON
test: {
   url: 'https://api.mindee.net/v1/products/mindee/passport/v1/predict',
   method: 'POST',
   params: {},
   headers: { Authorization: 'Token {{bundle.authData.api_key}}' },
   body: {
     document:
       'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=',
   },
   removeMissingValuesFrom: {},
```

### A trick

The Mindee APIs do not have an authentication API endpoint.  But Zapier is just looking for an API call using the API token that results in a success message.  So we are tricking the authentication step: actually sending a Base64 encoded image to the OCR endpoint. The image is a 1x1 png, so there is no data extracted by the API, but the response is a 200 code.  WIth that result, Zapier has authenticated you as a user of the Mindee API.  So, its a bit of a hack, but it works!

### Authentication instructions

When your users are setting up their Zap with your action, there is text provided to help them find their API key.  That is in the ‘fields’ section of the authentication.js file:

```JSON
fields: [
   {
     computed: false,
     key: 'api_key',
     required: false,
     type: 'string',
     helpText:
       'Insert your api key in order to make calls to the Mindee platform. You can find & create your api key: https://platform.mindee.com/apishub/products/mindee/passport?setup=default#tokens',
   },
 ],

```

If you are building your API based action, you should change this for your endpoint, as the Mindee Passport url will not be terribly helpful for your API.

### Three Authentication pathways

If you look in the Authentication.js for Mindee - it looks a bit different.  Mindee’s 3 APIs all have unique API keys, so when creating a Zap , we want our users to authenticate against the correct API endpoint.  To account for this, we extended the above “typical” authentication to allow for 3 authentication pathways.

#### A dropdown

The first field in the Authentication will be a dropdown that lists the three APIs (and holds the API endpoints as the values):

```JSON
{
     computed: false,
     key: 'api_endpoint',
     required: true,
     choices: [
       {
         sample:
           'https://api.mindee.net/v1/products/mindee/expense_receipts/v3/predict',
         value:
           'https://api.mindee.net/v1/products/mindee/expense_receipts/v3/predict',
         label: 'Receipt API',
       },
       {
         sample:
           'https://api.mindee.net/v1/products/mindee/invoices/v2/predict',
         value:
           'https://api.mindee.net/v1/products/mindee/invoices/v2/predict',
         label: 'Invoice API',
       },
       {
         sample:
           'https://api.mindee.net/v1/products/mindee/passport/v1/predict',
         value:
           'https://api.mindee.net/v1/products/mindee/passport/v1/predict',
         label: 'Passport API',
       },
     ],
     label: 'The API endpoint you wish to authenticate against',
   }
```

This results in the following dropdown when the Zap is being created:

The 2nd field asks for the API key for the endpoint:

```JSON
{
     computed: false,
     key: 'api_key',
     required: true,
     type: 'string',
     helpText:
       'Insert your api key in order to make calls to the Mindee platform. You can find or create your api key: https://platform.mindee.com/',
   }

```

The test entry takes the value from the dropdown (recall that the value holds theit is the API endpoint URL), and the API key, and runs a test:

```JSON
{
     computed: false,
     key: 'api_key',
     required: true,
     type: 'string',
     helpText:
       'Insert your api key in order to make calls to the Mindee platform. You can find or create your api key: https://platform.mindee.com/',
   }

```

The result is that the user is authenticated against the API. If they wish to use a 2nd API, they can authenticate against Mindee again - and use the 2nd endpoint/API key combination.

## Create your Action

Actions are saved in the `creates` directory (triggers are in the triggers directory).  In your app, you’ll see three `Mindee_<endpoint>.js` files.  If you’re building a different API, you can rename one of these files to whatever you like, and delete the other two.  There are a few lines you’ll need to change:

inputFields - all of the fields (and whether or not they are required) for the API. For Mindee based APIs, the only item is the document (and it is required).

```JSON
   inputFields: [
     { key: 'document', required: true, type: 'file' }
   ],
```

Perform: This lists what the Action will do.  In the case of the Mindee API, it is a POST to the API endpoint URL, with the file in the body (with descriptor ‘document’), and the headers with an API key.

```JSON
body: {
         'document': bundle.inputData.document
       },
       headers: {
         'Authorization':  'Token {{bundle.authData.api_key}}',
         'content-type': 'application/json'
       },

```

Sample:  This section has a sample output from the API.  This is used when building a Zap and there is not input data from a previous step.  You can grab this from the LIve interface on platform.mindee.com - just copy the JSON response into the document.
After the sample are a few very important sections:

```JSON
key: 'Mindee_passport',
 noun: 'Passport',
 display: {
   label: 'Mindee International Passport Parsing',
   description:
     'Instantly extract data from any passport using the Mindee Passport Extraction API',
   hidden: false,
   important: true,
 },
```

Key:  a term that make sense as a key for your application
Noun: In the Zap building state, this noun is used to describe what is happening, and is added into the standard Zapier text.  You can experiment with different nouns to see how each step reads. It is kind of like doing Mad-Libs, but in a professional setting!
Display: the label and description on how the Action will appear when it is being created, and in searches in the Zapier platform:

## Register your zap

In the terminal window, browse to the directory with your new action. You can register your Action by naming it:

```Shell
zapier register "Mindee OCR"
```

Now you can add this to Zapier by pushing the action to the Zapier server:

```Shell
zapier push
```

Assuming that this step is successful - your action has been uploaded into Zapier and can now be tested.  You can go and create a Zap with it!   If you’’re not happy with any of the steps (maybe the ‘noun’, or one of the descriptions is off), you can edit and ```zapier push``` the code again.

## Begin the publishing process

There are a bunch of steps in the Zapier developer website that must be completed in order to publish your Zap.  Head over to [https://developer.zapier.com/](https://developer.zapier.com/), nad select the new integration that you just published.  Click the “edit” button (it’s the gear next to the name). There’s a bunch of things to fill out about your company and how the Integration with Zapier will be used.  You’ll also need to create an account for the Zapier team to test your integration - they’ll create API keys and go and build Zaps.

Once you’ve completed this form, you should be all set to press the publish button. There are a few requirements to pass publication, but the GUI will walk you through them - you must have running Zaps that have been successful. There must be  3 different accounts that have have integrated your ‘invite only’ Zaps.  To invite other people (or your sock puppet accounts), click “Sharing” in the left hand navigation:

This uRL will invite other accounts to use your Zap actions,a nd if they accept, they can search for your Action while creating a Zap.

## Conclusion

That’s about it: we created a Zapier Actionusing the Command Line Interface - copying from the Mindee Zapier integration.  This dealt with an interesting authentication concern - where we have 3 different endpoints with different API key requirements - in a way that is easy to follow, and our customers can understand.

WE also created 3 actions that utilize document upload (the reason we are on the CLI in the first place).  WE pushed the code to Zapier,a nd submitted the Actions for publication.  Once the week is up, these Zapier Actions will be available for the general public to add to their n-code document processing
