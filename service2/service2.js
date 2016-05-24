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
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczYzdmYjA4MWNlODAzODU2YWY4OTU1Iiwic3lzdGVtX2lkIjoiNTczYzdmYmY4NDQyYTYzODU2YTljZDkxIiwiYXBwX2lkIjoiNTczYzdmZGViMDJlNjczODU2MjhmN2E4IiwiaWF0IjoxNDYzNTgyNjg2fQ.UC8F2v7Pqon1Ozbs6Luj8Q6SkN9TVhdxpvVO6jDzwoE"
});

const s = require('seneca')();

s.use(function (opts) {

    s.add('role:service2', function handlerFuerService2(args, callback) {
        let that = this;
        setTimeout(function () {
            callback(null, {from: 'service2'})
        }, Math.floor(Math.random() * 500) + 100)

    });
    return {name: 'plugin-name-service'}
});
s.use('mesh', {auto: true, pins: ['role:service2']});
