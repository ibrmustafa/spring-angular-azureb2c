
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  adalConfig: {
    tenant: 'TENANT.onmicrosoft.com',
    clientId: 'XXXXXXXXX-XXXX-XXXX-XXXXXXX',
    postLogoutRedirectUri: 'http://localhost:4200',
    clientSecret: 'XXXXXXXXXXXXXXX',
    authorityHostUrl: 'https://login.microsoftonline.com',
    graphScope: 'https://graph.windows.net/.default',
    graphAPI: 'https://graph.windows.net/TENANT.onmicrosoft.com/users?api-version=1.6',
    extraQueryParameter: "p=B2C_1_myPolicy&scope=openid",
    signupURL: 'http://localhost/signup',
    signupPolicy: 'p=B2C_1_myPolicy&scope=openid&response_type=id_token&prompt=login&nonce=defaultNonce',
    postLogoutRedirectPolicy: 'p=B2C_1_myPolicy',
    logOutUri: 'https://login.microsoftonline.com/TENANT.onmicrosoft.com/oauth2/logout?post_logout_redirect_uri=http%3A%2F%2Flocalhost:4200&p=B2C_1_myPolicy'
  }
};