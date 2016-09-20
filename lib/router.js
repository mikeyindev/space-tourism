Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading', // What's shown when the page is loading
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return [Meteor.subscribe("vendors"), Meteor.subscribe("cart", userKey)];
    }
}); // These templates are in the client/templates/app directory

Router.route("/", {
    name: "homeIndex",
    // It will wait until the data is ready before rendering the template
    waitOn: function () {
        // See 'publications.js' for where it's published
        return Meteor.subscribe("featured-products");
    }
});

Router.route("/about", {
    name: "homeAbout",
});

Router.route("/contact", {
    name: "homeContact",
});

Router.route("/products/:sku", {
    name: "productsShow",
    waitOn: function () {
        Meteor.subscribe("products-by-sku", this.params.sku);
    },
    data: function () {
        return Products.findOne({sku: this.params.sku});
    }
});

Router.route("/vendors/:slug", {
    name: "vendorsShow",
    waitOn: function () {
        return Meteor.subscribe("products-by-vendor", this.params.slug);
    },
    data: function () {
        return Vendors.findOne({slug: this.params.slug});
    }
});

Router.route("/cart", {
    name: "cartShow"
});

Router.route("/checkout", {
    name: "checkoutShow"
});

// Doesn't require publish/subscribe because it's done by Postgres, Massive,
// and Stripe
Router.route("/receipt/:id", {
    name: "receiptShow",
    data: function () {
        return {id: this.params.id};
    }
});