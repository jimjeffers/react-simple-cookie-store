// @flow

/**
 * A convenience method to test if a passed prop has been defined.
 * @param {*} prop A property to test.
 * @return {boolean} True if the passed prop is defined.
 */
export const isDefined = (prop: any): boolean =>
  typeof prop !== "undefined" && prop !== "undefined"

/**
 * A convenience method to test if a passed property is a blank string.
 * @param {*} prop A property to test.
 * @return {boolean} True if the passed prop is in fact a blank string.
 */
export const isBlank = (prop: any): boolean => !isNotBlank(prop)

/**
 * A convenience method to test if a passed property is a non blank string.
 * @param {*} prop A property to test.
 * @return {boolean} True if the passed prop is in fact a non blank string.
 */
export const isNotBlank = (prop: any): boolean =>
  isDefined(prop) && typeof prop === "string" && prop !== ""
