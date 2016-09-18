# rocket-shop

This project uses Meteor to build a working ecommerce website. The purpose is to learn more about Meteor.

The technologies used include:
* Meteor
* Bootstrap
* Node
* MongoDB

#Dependencies
## NPM

[Accounting](https://github.com/openexchangerates/accounting.js) - JavaScript library for formatting number, money, and currency.

[Moment](https://github.com/moment/moment) - JavaScript date library for parsing, validating, and formatting dates.

[Showdown](https://github.com/showdownjs/showdown) - A JavaScript Markdown to HTML converter.

[Knockout](https://github.com/knockout/knockout) - JavaScript library that makes it easier to create rich, desktop-like UI.

## Meteor ([Atmosphere](https://atmospherejs.com/))
 
[twbs:bootstrap](https://atmospherejs.com/twbs/bootstrap) - Bootstrap.

[iron:router](https://atmospherejs.com/iron/router) - Meteor router that works on the server and the browser.

[peel:loading](https://atmospherejs.com/pcel/loading) - for creating loading splash screen (please-wait + spinkit bundle).

[benjick:stripe-native](https://atmospherejs.com/benjick/stripe-native) - Implementing Stripe API as Meteor package without Node module.

[ian:accounts-ui-bootstrap-3](https://atmospherejs.com/ian/accounts-ui-bootstrap-3) - Bootstrap-styled accounts UI. Requires at least one accounts plugin, such as `meteor add accounts-password`, `meteor add accounts-github`, `meteor add accounts-google` for OAuth 2.0.
* `accounts-password` will return a `npm-bcrypt` error due to Meteor's upgrade to Node 4.4.7 [read more](https://guide.meteor.com/1.4-migration.html#binary-packages-require-build-toolchain)
* Install a compiler toolchain to recompile binary npm packages in the `node_modules` directory. OS X users should install commandline tools by running `xcode-select --install`, then run `meteor update --all-packages` and `meteor rebuild`.
* Finally, install `bcrypt` by running `meteor npm install --save bcrypt`.
* You can configure GitHub and Google Client ID after starting the server by running `meteor` and clicking on the _Sign in / Join_ button.
[alanning:roles](https://atmospherejs.com/alanning/roles) - Authorization package for Meteor for attaching permissions to users.
