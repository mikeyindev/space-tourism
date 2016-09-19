Template.productsShow.events({
    // add-to-cart event
    "click #add-to-cart" : function (ev) {
        ev.preventDefault();
        // Default navigates the page, so we prevent it

        addToCart(this.sku, function (err, res) {
            console.log(err);
            console.log(res);
        });
    }
});