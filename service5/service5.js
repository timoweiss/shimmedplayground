'use strict';

require('shimmingtest').start({

    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc1ZWU2MWIyMTMxOTk1NzI3M2I5NTZiIiwic3lzdGVtX2lkIjoiNTc1ZWU3YzViMDhlN2U2NjI4NGQzMTRkIiwiYXBwX2lkIjoiNTc1ZWU4MWExZDEwODg2NjI4ZTFlMjIzIiwiaWF0IjoxNDY1ODM3NTk0fQ.IWj-3Wjx3vPolxe8hs0hc5lPM_PB5sEukV4nivGxtGY"

});

const s = require('seneca')();

s.use(function (opts) {

    s.add('role:service5', function handlerFuerService1(args, callback) {
        
        callback(null, {from: 'service5'})
    });


    return {name: 'plugin-name-service'}
});

s.use('mesh', {auto: true, pins: ['role:service5']});
