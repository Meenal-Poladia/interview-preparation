
/* Question 1: What is OAuth
    Certainly! Imagine you have a magical cookie jar, and you want to share some cookies with your friends, but you
    don't want them to take the whole jar. So, you decide to give them a special cookie pass that only works for a
    short time and only lets them take a few cookies.

    In the same way, when you use OAuth, you have some online information (like your pictures or posts), and you want
    to share it with a website or app. Instead of giving them your password, which is like giving away the whole
    cookie jar, OAuth lets you give them a special pass (called a token) that only works for a little while and only
    lets them see or use certain parts of your information. This way, you can share what you want without giving away
    your entire online "cookie jar" or secrets!

    OAuth, an open-standard authorization protocol, allows third-party services to use user data without exposing their
    credentials. It solves the problem of sharing access while maintaining security and privacy. Users can grant
    websites or applications (clients) access to their information on other websites (providers) but without giving
    them passwords. OAuth achieves this by providing tokens instead of actual credentials. These tokens provide
    specific permissions making it a safer method for both users and main servers.

 */

/* Question 2: Explain the OAuth 2.0 Authorization Flow
    The OAuth 2.0 Authorization Flow involves the following steps:
        - The client requests authorization from the resource owner.
        - The resource owner grants authorization.
        - The client receives an authorization grant.
        - The client requests an access token using the authorization grant.
        - The authorization server validates the authorization grant and issues an access token.

 */

/* Question 3: What is the purpose of an OAuth refresh token
    A refresh token is used to obtain a new access token when the current access token becomes invalid or expires. It
    allows the client to request new access tokens without requiring the user to re-authenticate.

 */

/* Question 4: Explain the role of Access Token and ID Token in OAuth 2.0
    An access token is a credential that represents the authorization granted to a client. It is used by the client to
    access protected resources. On the other hand, an ID token is a JSON Web Token (JWT) that contains identity
    information about the authenticated user. It provides information such as the user's unique identifier and
    authentication timestamp.

 */

/* Question 5: How does OAuth handle authentication and authorization
    OAuth, an open standard for access delegation, uses tokens to handle authentication and authorization. It starts
    with the client app requesting authorization from the resource owner to access their data. The owner authorizes
    this request and is redirected back to the application with an authorization code. This code is exchanged by the
    client with the authorization server for an access token. The client can now use this token to make requests on
    behalf of the user to the resource server. OAuth does not share password data but instead uses authorization
    tokens to prove an identity between consumers and service providers.

 */