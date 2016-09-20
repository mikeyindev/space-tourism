// ReactiveVar is a reactive variable. When receiptData changes, the change will
// be rendered onto the screen.
receiptData = new Blaze.ReactiveVar();

Template.receiptShow.helpers({
  receipt : function(){
    return receiptData.get(); // Return the receiptData
  }
});

// Calling onRendered returns the data from the route set in 'router.js' for
// this template 'receiptShow'. It returns the receipt id, which we can get
// by calling 'this.data.id'.
Template.receiptShow.onRendered(function(){
  console.log(this.data.id);

  getReceipt(this.data.id, function(err,res){
    receiptData.set(res);
  });
});