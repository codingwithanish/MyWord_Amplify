// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const config =  {
  API: {
      GraphQL: {
        endpoint: 'https://sjmhun36xzaolggdwsqo2vjylm.appsync-api.us-east-1.amazonaws.com/graphql',
        region: 'us-east-1',
        defaultAuthMode: 'apiKey',
        apiKey: 'da2-dgtj2fyhzrghzcdaethmsmepty'
      }
  },
  Auth: {
    Cognito:{
    region: 'us-east-1', // Extracted from the authority URL
    userPoolId: 'us-east-1_aPZ8vYTFb', // Extracted from the authority URL
    userPoolClientId: '7659b1kr7u2dip5la5ku43q79k', // Provided client_id
    mandatorySignIn: true, // Enforces user authentication
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    loginWith: { // Optional
    oauth: {
      domain: 'us-east-1eaedtpcae.auth.us-east-1.amazoncognito.com', // Replace with your Cognito domain (see below)
      scope: ['email', 'openid', 'phone'], // Match provided scopes
      redirectSignIn: ['http://localhost:3000'],
      redirectSignOut: ['http://localhost:3000'],
      responseType: 'code', // Match provided response_type
    },
    email: 'true', // Optional
  },
  },
}
};

export default config;