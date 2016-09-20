// This is necessary after removing 'autopublish', or else data won't get
// published to the client.
Meteor.publish("featured-products", function () {
    return Products.featured();
});

Meteor.publish("vendors", function () {
    return Vendors.find();
});

Meteor.publish("products-by-vendor", function (slug) {
   return Products.find({"vendor.slug" : slug});
});

// findOne() doesn't work with Meteor.publish(). It expects a 'cursor'.
Meteor.publish("products-by-sku", function (sku) {
    return Products.find({sku : sku});
});

Meteor.publish("cart", function (key) {
    return Carts.find({userKey: key});
});