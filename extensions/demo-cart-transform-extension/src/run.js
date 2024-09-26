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
    const cartLines = input.cart.lines.map((cartline) => ({ "cartLineId": cartline.id, "quantity": cartline.quantity }));

    console.log('cartLines', cartLines);

    return {
      "operations": [
        {
          "merge": {
            "cartLines": cartLines,
            "parentVariantId": "gid://shopify/ProductVariant/50426689257745",
            "price": {
              "percentageDecrease": {
                "value": -10.5
              }
            },
            "title": "Snowboard Kit"
          }
        }
      ]
    }
  }

  return NO_CHANGES;
};