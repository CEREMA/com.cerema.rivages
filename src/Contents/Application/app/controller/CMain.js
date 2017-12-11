App.controller.define('CMain', {

    views: [
        "VMain"
    ],

    models: [],

    init: function() {

        this.control({
            'VMain': {
                'ons-button': {
                    click: this.onClickHello
                },
                'ons-button#close-button': {
                    click: function(event) {
                        App.$(event.target).up('ons-dialog').hide();
                    }
                }
            }
        });
        App.init('VMain', this.onLoad);

    },
    onClickHello: function() {
        App.$('#dialog-1').show();
    },
    onLoad: function() {
        console.log('Controller loaded.')
    }


});