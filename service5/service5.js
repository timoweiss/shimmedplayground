'use strict';
// require('shimmingtest').start({
//     application_id: 'applicationid_service',
//     service_name: 'service_service',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczOWM1M2FjMGE4MDk0YjFhMjJlMmJlIiwic3lzdGVtX2lkIjoiNTczOWM1NGM3MDAyOGY0YjFhMTI2MTAyIiwiYXBwX2lkIjoiNTczOWM1NWQzNjBkZjc0YjFhZTIzZTlkIiwiaWF0IjoxNDYzNDAzODY5fQ.wgkUI5s1Hj23NqGK2tOcE94bo94fYlAvp2Di1C1Ty_E'
// });

require('shimmingtest').start({
    application_id: 'applicationid_service5',
    service_name: 'service_service5',
    host: 'localhost',
    app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczYzM0MjE2MDI3ZTYwMTFjYTYyYmVjIiwic3lzdGVtX2lkIjoiNTczYzM0MjlhYzRmZTIwMTFjZjQzNzgwIiwiYXBwX2lkIjoiNTczYzM0YWI2ODY0MDUwMTFjYjJhODcwIiwiaWF0IjoxNDYzNTYzNDM1fQ.gWw6Qhjr5RwQJwnsIWBlnwDnvliQoOvFC9I74lUvcg4'
});

const s = require('seneca')();
const joi = require('joi');
const parambulator = require('parambulator');


s.use(function (opts) {

    s.add('role:service5,cmd:crapTest', function handlerFuerService1(args, callback) {
        let that = this;
        callback(null, {from: 'service5'})


        // setTimeout(function () {
        //     that.act({cmd: 'somethingelse', role: 'service2'}, function callbackFuerService1(err, data) {
        //
        //             this.act('role:service3,cmd:somethingreallyelse', function() {
        //             });
        //
        //     });
        // }, 2000)

    });


    return {name: 'plugin-name-service'}
});

s.use('mesh', {auto: true, pins: ['role:service5']});
