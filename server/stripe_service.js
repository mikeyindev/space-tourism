Meteor.startup(function(){

  // Typical Stripe API call using Stripe Node API
  var Stripe = StripeAPI(Meteor.settings.stripeSecretKey);

  var StripeWrapper = function(){
    //process the charge...
    this.runCharge = function(checkout){
      var stripeCall = Async.runSync(function(done){

        var charge = {
          amount: checkout.total,
          currency: "usd",
          source: checkout.token.id,
          description: checkout.description
        };

        Stripe.charges.create(charge, done);
      });

      return stripeCall.result;
    };

    this.refundCharge = function(charge_id){
      //extra credit for you...
    };
  };

  StripeService = new StripeWrapper();

});