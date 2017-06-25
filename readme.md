~~React~~ Simple Cookie Store
=========================

A dead simple interface for storing cookies. Built on top of [universal-cookies](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie) and [momentjs](https://momentjs.com). Automatically sets cookies as secure provided the user is browsing via HTTPS. To illustrate usage, check out this simple example storing an access token:

```js
import { setCookie, getCookie, removeCookie } from "react-simple-cookie-store"

// Do some work...
async function login(email,password) {
    let token = await authenticate(username,password)
    // Sets a cookie to store some value (i.e. accessToken) which will be valid for 2 days.
    setCookie("token", token, 2)
}

// Retrieves the stored accessToken.
function currentUser() {
    return getCookie("token")
}

// Clear the cookie storing the current user's access token.
function logout() {
    removeCookie("token")
}
```
