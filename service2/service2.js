'use strict';

// require('shimmingtest').start({
//     application_id: 'applicationid_service2',
//     service_name: 'service_service2',
//     // host: 'localhost',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczOWM1M2FjMGE4MDk0YjFhMjJlMmJlIiwic3lzdGVtX2lkIjoiNTczOWM1NGM3MDAyOGY0YjFhMTI2MTAyIiwiYXBwX2lkIjoiNTczOWRkOGQzNjBkZjc0YjFhZTIzZTllIiwiaWF0IjoxNDYzNDEwMDYxfQ.CShrjRBQgC5eZvvYks_o2kcgv2bcQ7BuSgEOdEeDX2U'
// });

require('shimmingtest').start({
    application_id: 'applicationid_service2',
    service_name: 'service_service2',
    // host: 'localhost',
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc0NTViNDQ2MzZjNWU1YzNmMzdmMjYwIiwic3lzdGVtX2lkIjoiNTc0NTViNTU3NzM1NTA1YzNmMjM2MTUyIiwiYXBwX2lkIjoiNTc0NTVjMDBkYmRhYjY1YzNmMmUxMzUzIiwiaWF0IjoxNDY0MTYzMzI4fQ.GIljBigSj7hdfTXYDuDYWfx-0wVK6Tm3WISLyor6P1g"
});

const s = require('seneca')();

s.use(function (opts) {

    s.add('role:service2', function handlerFuerService2(args, callback) {
        let that = this;
        setTimeout(function () {
            callback(null, {from: 'service2'})
        }, Math.floor(Math.random() * 300))

    });
    return {name: 'plugin-name-service'}
});
s.use('mesh', {auto: true, pins: ['role:service2']});
