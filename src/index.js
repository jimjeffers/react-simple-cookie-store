import jwtDecode from "jwt-decode"
import { isDefined, isBlank } from "./helpers"
import cookie from "react-cookie"
import moment from "moment"

/**
 * Determines if the connection is currently utilizing HTTPS.
 * @returns {boolean} True if the connection is HTTPS.
 */
const isSecure = (): boolean =>
  isDefined(location) && location.protocol === "https:"

/**
 * Retrieves a value stored in an HTTP cookie.
 * @param {string} key The name of the cookie to lookup.
 * @returns {?any} The object in the cookie store or undefined. 
 */
export const getCookie = (key: string): ?any => {
  const item = cookie.load(key)
  return isBlank(item) ? undefined : item
}

/**
 * Stores a value inside of a cookie.
 * @param {string} key The name of the cookie to create or set.
 * @param {string} value The value to store in that cookie.
 * @param {number} days The number of days until the cookie expires.
 */
export const setCookie = (key: string, value: string, days: number): void => {
  const options = {
    path: "/",
    expires: moment.utc().add(days, "days").toDate(),
    maxAge: moment.duration(days, "days").asSeconds(),
    secure: isSecure()
  }
  cookie.save(key, value, options)
}

/**
 * Clears a browser cookie matching a supplied key.
 * @param {string} key The name of the cookie to remove.
 */
const removeCookie = (key: string): void => {
  cookie.remove(key, { path: "/" })
}
