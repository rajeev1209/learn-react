export const OktaConfig = {
    clientId: '0oae7rt08kuAaYs6W5d7',
    issuer: 'https://dev-22103927.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}