Template.cartShow.helpers({
    cart: function () {
        // A variable declared without 'var' becomes a GLOBAL variable
        currentCart = Carts.getCart(userKey);
        return currentCart;
    }
});

Template.cartShow.events({
    "click .remove-from-cart" : function (ev) {
        ev.preventDefault();

        // Here 'this' refers to individual items in the cart because
        // cart.items is getting looped over by #each in /cart/show.html
        removeFromCart(this.sku, function (err, res) {
            if(err) {
                console.log(err);
            }
            else {
                if(res.items.length === 0) {
                    // If no more items in the cart, redirect to the home page
                    Router.go("homeIndex")
                }
            }
        });
    },

    "change .item-qty" : function (ev) {
        var newQty = parseInt($(ev.currentTarget).val());
        var name = this.name;
        if(newQty === 0) {
            removeFromCart(this.sku);
        }
        else {
            this.quantity = parseInt(newQty);
            saveCart(currentCart, function (err, res) {
                if(err) {
                    console.log(err);
                }
                else {
                    alert(name + " updated");
                }
            });

            $(ev.currentTarget).val(newQty);
        }
    }
});