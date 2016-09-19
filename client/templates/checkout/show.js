const ko = require('knockout');

Template.checkoutShow.helpers({
    cart : function () {
        currentCart = Carts.findOne({userKey : userKey});
        return currentCart;
    }
});

Template.checkoutShow.onRendered(function () {

    //wire up Knockout and some test data
    checkoutModel = new CheckoutViewModel({
        name : "Jill Test",
        email : "jill@test.com",
        address : {
            street : "12 Test Street",
            city : "Hanalei",
            state : "HI",
            zip : "96714",
            country : "US"
        }
    });

    // Meteor doesn't have page refresh, so when user returns to the page,
    // the Knockout binding will fire again and cause an error. cleanNode()
    // cleans the bindings on the DOM element.
    var panel = document.getElementById("checkout-panel");
    ko.cleanNode(panel);

    // Then apply the bindings
    ko.applyBindings(checkoutModel, panel);
});