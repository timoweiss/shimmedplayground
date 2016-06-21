'use strict';
// require('shimmingtest').start({
//     application_id: 'applicationid_service',
//     service_name: 'service_service',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczOWM1M2FjMGE4MDk0YjFhMjJlMmJlIiwic3lzdGVtX2lkIjoiNTczOWM1NGM3MDAyOGY0YjFhMTI2MTAyIiwiYXBwX2lkIjoiNTczOWM1NWQzNjBkZjc0YjFhZTIzZTlkIiwiaWF0IjoxNDYzNDAzODY5fQ.wgkUI5s1Hj23NqGK2tOcE94bo94fYlAvp2Di1C1Ty_E'
// });

require('shimmingtest').start({
    application_id: 'applicationid_service5',
    service_name: 'service_service5',
    // host: 'localhost',
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
