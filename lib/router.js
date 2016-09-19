Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading', // What's shown when the page is loading
    notFoundTemplate: 'notFound'
}); // These templates are in the client/templates/app directory

Router.route("/", {
    name: "homeIndex",
    data: function () {
        return {
            message: "Welcome to the Rocket Shop"
        }
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
    data: function () {
        return Products.findOne({sku: this.params.sku});
    }
});

Router.route("/vendors/:slug", {
    name: "vendorsShow",
    data: function () {
        return Vendors.findOne({slug: this.params.slug});
    }
});

Router.route("/cart", {
    name: "cartShow"
});