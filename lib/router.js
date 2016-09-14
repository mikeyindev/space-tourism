Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading', // What's shown when the page is loading
    notFoundTemplate: 'notFound'
});

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
        var sku = this.params.sku; // parameters refers to :sku the URL
        return Products.findOne({sku: this.params.sku});
    }
});