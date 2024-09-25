// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {

  if (input.cart.lines.length > 1) {
    return {
      "operations": [
        {
          "merge": {
            "cartLines": input.cart.lines,
            "parentVariantId": "gid://shopify/ProductVariant/10102625894673",
            "price": {
              // "percentageDecrease": {
              //   "value": 10.5
              // }
            },
            "title": "Snowboard Kit"
          }
        }
      ]
    }
  }

  return NO_CHANGES;
};