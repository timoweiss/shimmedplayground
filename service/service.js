'use strict';
// require('shimmingtest').start({
//     application_id: 'applicationid_service',
//     service_name: 'service_service',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczOWM1M2FjMGE4MDk0YjFhMjJlMmJlIiwic3lzdGVtX2lkIjoiNTczOWM1NGM3MDAyOGY0YjFhMTI2MTAyIiwiYXBwX2lkIjoiNTczOWM1NWQzNjBkZjc0YjFhZTIzZTlkIiwiaWF0IjoxNDYzNDAzODY5fQ.wgkUI5s1Hj23NqGK2tOcE94bo94fYlAvp2Di1C1Ty_E'
// });

require('shimmingtest').start({
    application_id: 'applicationid_service',
    service_name: 'service_service',
    // host: 'localhost',
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc0NTViNDQ2MzZjNWU1YzNmMzdmMjYwIiwic3lzdGVtX2lkIjoiNTc0NTViNTU3NzM1NTA1YzNmMjM2MTUyIiwiYXBwX2lkIjoiNTc0NTViYzNkYmRhYjY1YzNmMmUxMzUyIiwiaWF0IjoxNDY0MTYzMjY3fQ.MJUXJ_YUGM_dqJdjuurmAJ6i5IbgUKwMvxjUVqa7Ubo"
});

const s = require('seneca')();

s.use(function (opts) {

    s.add('role:service', function handlerFuerService1(args, callback) {
        let that = this;
        console.log('USER_SERVICE: rcv #2', args);
        setTimeout(function () {
            console.log('USER_SERVICE: act #3');
            that.act({role: 'service2'}, function callbackFuerService1(err, data) {
                    this.act('role:service3,cmd:somethingreallyelse', function() {
                        callback(null, {from: 'service'})
                    });

            });
        }, Math.floor(Math.random() * 100))

    });


    return {name: 'plugin-name-service'}
});

s.use('mesh', {base: true, pins: ['role:service']});
