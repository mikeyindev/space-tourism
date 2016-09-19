Carts = new Mongo.Collection("carts");

Carts.getCart = function (userKey) {

    var cart = Carts.findOne({userKey : userKey});
    if(!cart) {
        cart = {
            userKey : userKey,
            created_at : new Date(),
            itemCount : 0,
            total : 0,
            items : [],
            notes : []
        };

        // Carts.insert(cart); // This won't work after 'insecure' is
        // removed. Can't write to the database from the client anymore
    }
    return cart;
};