
Products = new Mongo.Collection("products");

Products.featured = function () {
  var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry"];
  return Products.find({sku : {$in : featuredSkus}},
  //    Restricting fields, not showing 'inventory' and 'cost' in client
  {fields : {inventory : false, cost: false}});
};

// Sets what CRUD actions are allowed on the 'Products' collection
Products.allow({
  update: function (userid, product) {
    return isAdmin();
    // Defined in permissions.js, checks if user is
    // assigned the role 'Administrator'
    // Prevents Products.update({"_id" ; "product-id-here"}, {$set : {price
    // : 0}});
  },
  insert : function (userid, product) {
    return isAdmin();
  },
  remove : function (userid, product) {
    return isAdmin();
  }
});

// Products.featured = function () {
//   var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry"];
//   return _.filter(Products, function (product) {
//     return featuredSkus.indexOf(product.sku) > -1;
//   });
// };

// Products.findOne = function (args) {
//     return _.find(Products, function (product) {
//         return product.sku === args.sku;
//     });
// };