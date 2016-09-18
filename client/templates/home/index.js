Template.homeIndex.helpers({
    featured: function () {
        return Products.featured();
        // Defined in products.js file. This is what makes {{#each featured}} in
        // index.html work
    }
});