export default {
    documentInputField: {
        key: 'document',
        required: true,
        label: 'Your document',
        helpText: 'Specify the file you want to analyze (the doc itself, or a public HTTPS URL)',
        type: 'file',
        placeholder: 'Specify the file or the public HTTPS URL here...'
    },
    postHeaders: {
        'Authorization': 'Token {{bundle.authData.api_key}}',
        'content-type': 'application/json',
        'User-Agent': 'mindee-api-zapier'
    }
};
