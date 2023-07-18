// @ts-check
// Use JSDoc annotations for type safety
/**
* @typedef {import("../generated/api").InputQuery} InputQuery
* @typedef {import("../generated/api").FunctionResult} FunctionResult
* @typedef {import("../generated/api").Operation} Operation
*/
// The @shopify/shopify_function package will use the default export as your function entrypoint
export default
/**
* @param {InputQuery} input
* @returns {FunctionResult}
*/
  (input) => {

      let toReorder = input.cart.deliveryGroups
        // Collect the delivery options from these groups
        .flatMap(group => group.deliveryOptions)
        // Construct a move operation for each, adding the index 0 if title includes "standard"
        .map(option => /** @type {Operation} */({
          move: {
            deliveryOptionHandle: option.handle,
            index: option.title?.toLowerCase().includes('standard') ? 0 : 1 
          }
        }));


    return {
      operations: toReorder
    };
  };


// // @ts-check
// // Use JSDoc annotations for type safety
// /**
// * @typedef {import("../generated/api").InputQuery} InputQuery
// * @typedef {import("../generated/api").FunctionResult} FunctionResult
// * @typedef {import("../generated/api").Operation} Operation
// */
// // The @shopify/shopify_function package will use the default export as your function entrypoint
// export default
// /**
// * @param {InputQuery} input
// * @returns {FunctionResult}
// */
//   (input) => {
//     // The message to be added to the delivery option
//     const message = "May be delayed due to weather conditions";

//     let toRename = input.cart.deliveryGroups
//       // Filter for delivery groups with a shipping address containing the affected state or province
//       .filter(group => group.deliveryAddress?.provinceCode &&
//         group.deliveryAddress.provinceCode == "NC")
//       // Collect the delivery options from these groups
//       .flatMap(group => group.deliveryOptions)
//       // Construct a rename operation for each, adding the message to the option title
//       .map(option => /** @type {Operation} */({
//         rename: {
//           deliveryOptionHandle: option.handle,
//           title: option.title ? `${option.title} - ${message}` : message
//         }
//       }));

//     // The @shopify/shopify_function package applies JSON.stringify() to your function result
//     // and writes it to STDOUT
//     return {
//       operations: toRename
//     };
//   };

// // @ts-check

// /**
//  * @typedef {import("../generated/api").InputQuery} InputQuery
//  * @typedef {import("../generated/api").FunctionResult} FunctionResult
//  */

// /**
//  * @type {FunctionResult}
//  */
// const NO_CHANGES = {
//   operations: [],
// };

// export default /**
//  * @param {InputQuery} input
//  * @returns {FunctionResult}
//  */
// (input) => {
//   const configuration = JSON.parse(
//     input?.deliveryCustomization?.metafield?.value ?? "{}"
//   );

//   return NO_CHANGES;
// };