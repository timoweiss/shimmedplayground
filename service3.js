'use strict';
require('shimmingtest').start({application_id: '_service3', service_name: 'service_service3'});

const s = require('seneca')();

s.use(function(opts) {

    s.add({cmd:'somethingreallyelse', role:'service3'}, function handlerFuerService2(args, callback) {
        // console.log('USER_SERVICE3: rcv #4', args);
        setTimeout(function() {

            callback(null, {from:'service3'})
        }, Math.floor(Math.random() * 2000))

    });
    return {name: 'plugin-name-service3'}
});

s.use('mesh', {auto:true, pins: ['role:service3']});
