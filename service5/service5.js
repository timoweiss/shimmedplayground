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
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc0NTViNDQ2MzZjNWU1YzNmMzdmMjYwIiwic3lzdGVtX2lkIjoiNTc0NTViNTU3NzM1NTA1YzNmMjM2MTUyIiwiYXBwX2lkIjoiNTc0NTVjMWNkYmRhYjY1YzNmMmUxMzU1IiwiaWF0IjoxNDY0MTYzMzU2fQ.0oF3UO2E_zjERgK5a7J7TYTGEdosd9f-FJPZNcds9BA"
});

const s = require('seneca')();

s.use(function (opts) {

    s.add('role:service5', function handlerFuerService1(args, callback) {
        let that = this;
        this.act('role:service', function(err, data){
            console.log('service5 response from role:service', err, data);
            callback(null, {from: 'service5'})
        });
    });


    return {name: 'plugin-name-service'}
});

s.use('mesh', {auto: true, pins: ['role:service5']});
