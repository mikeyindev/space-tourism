Meteor.startup(function () {
    // Using 'juliancwirko:s-alert' package for notifications
    sAlert.config({
        effect: '',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });
});