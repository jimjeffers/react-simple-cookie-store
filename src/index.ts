import { DateTime, Duration } from "luxon"
import Cookies from "universal-cookie"
import { isBlank, isDefined } from "./helpers"

const cookies = new Cookies()

/**
 * Determines if the connection is currently utilizing HTTPS.
 * @returns {boolean} True if the connection is HTTPS.
 */
export const isSecure = (): boolean =>
  isDefined(location) && location.protocol === "https:"

/**
 * Retrieves a value stored in an HTTP cookie.
 * @param {string} key The name of the cookie to lookup.
 * @returns {?any} The object in the cookie store or undefined.
 */
export const getCookie = (key: string): any => {
  const item = cookies.get(key)
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
    expires: DateTime
      .utc()
      .plus({ days })
      .toJSDate(),
    maxAge: Duration.fromObject({ days }).as('seconds'),
    path: "/",
    secure: isSecure()
  }
  cookies.set(key, value, options)
}

/**
 * Clears a browser cookie matching a supplied key.
 * @param {string} key The name of the cookie to remove.
 */
export const removeCookie = (key: string): void => {
  cookies.remove(key, {
    path: "/"
  })
}
