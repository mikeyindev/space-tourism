# rocket-shop

This project uses Meteor to build a working ecommerce website. The purpose is to learn more about Meteor.

The technologies used include:
* Meteor
* Bootstrap
* Node
* MongoDB

#Dependencies
## NPM

These need to be imported explicitly in the files that use them, i.e.
 
`import 'accounting' from accounting;`

`import 'moment' from moment;` 

See the `/templates/main.js` file for examples.  

[Accounting](https://github.com/openexchangerates/accounting.js) - JavaScript library for formatting number, money, and currency.

[Moment](https://github.com/moment/moment) - JavaScript date library for parsing, validating, and formatting dates.

[Showdown](https://github.com/showdownjs/showdown) - A JavaScript Markdown to HTML converter.

[Knockout](https://github.com/knockout/knockout) - JavaScript library that makes it easier to create rich, desktop-like UI.

[Massive 2.0](https://github.com/robconery/massive-js) - A Relational data access tool for Postgres using SQL. Not an ORM.

[pg-native](https://www.npmjs.com/package/pg-native) - A slightly nicer interface to Postgres over `node-libq`. Requires Postgres client libraries and tools installed. `brew install postgres postgresql` and also `pg`.

## Meteor ([Atmosphere](https://atmospherejs.com/))
 
[twbs:bootstrap](https://atmospherejs.com/twbs/bootstrap) - Bootstrap.

[iron:router](https://atmospherejs.com/iron/router) - Meteor router that works on the server and the browser.

[peel:loading](https://atmospherejs.com/pcel/loading) - for creating loading splash screen (please-wait + spinkit bundle).

[ian:accounts-ui-bootstrap-3](https://atmospherejs.com/ian/accounts-ui-bootstrap-3) - Bootstrap-styled accounts UI. Requires at least one accounts plugin, such as `meteor add accounts-password`, `meteor add accounts-github`, `meteor add accounts-google` for OAuth 2.0.
* `accounts-password` will return a `npm-bcrypt` error due to Meteor's upgrade to Node 4.4.7 [read more](https://guide.meteor.com/1.4-migration.html#binary-packages-require-build-toolchain)
* Install a compiler toolchain to recompile binary npm packages in the `node_modules` directory. OS X users should install commandline tools by running `xcode-select --install`, then run `meteor update --all-packages` and `meteor rebuild`.
* Finally, install `bcrypt` by running `meteor npm install --save bcrypt`.
* You can configure GitHub and Google Client ID after starting the server by running `meteor` and clicking on the _Sign in / Join_ button.

[alanning:roles](https://atmospherejs.com/alanning/roles) - Authorization package for Meteor for attaching permissions to users.

[juliancwirko:s-alert](https://atmospherejs.com/juliancwirko/s-alert) - Simple notifications/alerts/errors for Meteor

## Testing

[practicalmeteor:mocha](https://atmospherejs.com/practicalmeteor/mocha) - The recommended package for writing mocha tests for meteor code. `Velocity` framework is no longer supported by Meteor. Don't forget to install `practicalmeteor:chai`!
* Create a `/test` directory under `/server` and one under `/client`
* Run `meteor test --full-app --driver-package=practicalmeteor:mocha` to test all `*.app-test.*` and `*.app-spec.*` files.

[mrgalaxy:stripe](https://atmospherejs.com/mrgalaxy/stripe) - A Meteor package containing Stripe scripts: `Stripe.js` (for client side), `Stripe Checkout`, and `Stripe for Node.js` (for server side).

## Stripe
The test API keys are stored in `settings.development.json`. Store your API keys in `settings.json`.

Use `meteor --settings settings.development.json` to tell Meteor to use the settings in it during development. Set it to `settings.json` for production.

Everything with the label `public` can be viewed by the public, otherwise they're only viewable on the server. 

[Test credit card numbers on Stripe](https://stripe.com/docs/testing#cards)