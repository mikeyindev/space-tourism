import accounting from 'accounting';
import showdown from 'showdown';

// Helper method using accounting.js to format currency
UI.registerHelper("money", function (amount) {
    return accounting.formatMoney(amount);
});

// Helper method using showdown.js to convert Markdown to HTML
UI.registerHelper("markdown", function (text) {
    var converter = new showdown.Converter();
    return converter.makeHtml(text);
});