'use strict';
require('shimmingtest').start({
    application_id: 'applicationid_service2',
    service_name: 'service_service2',
    // host: 'localhost',
    app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczODhlOTNjMGE4MDk0YjFhMjJlMmJkIiwic3lzdGVtX2lkIjoiNTczODhlOWM3MDAyOGY0YjFhMTI2MTAxIiwiYXBwX2lkIjoiNTczODhmMGEzNjBkZjc0YjFhZTIzZTliIiwiaWF0IjoxNDYzMzI0NDI2fQ.Yq-W4rAZMSuSjCco8k5BWb5ReSxsuvBvVY_FQPfYWkc'
});

// require('shimmingtest').start({
//     application_id: 'applicationid_service2',
//     service_name: 'service_service2',
//     host: 'localhost',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczODY1YWMzNzYzNDc5OTlmZWFlZDc5Iiwic3lzdGVtX2lkIjoiNTczODY1Yjg3NGY1ZDc5OTlmMDYyMDJiIiwiYXBwX2lkIjoiNTczODY2MjZjM2MzOGI5OTlmOWYzOGM5IiwiaWF0IjoxNDYzMzEzOTU4fQ.As-m48SKQa8EDptSltgIfkP0xu8n0WW4M5I86qAKJGQ'
// });
//
const s = require('seneca')();

s.use(function (opts) {

    s.add({cmd: 'somethingelse', role: 'service2'}, function handlerFuerService2(args, callback) {
        let that = this;
        console.log('USER_SERVICE2: rcv #4', args);
        setTimeout(function () {
            //that.act('role:service3,cmd:somethingreallyelse', function() {
            callback(null, {from: 'service2'})
            //});
        }, Math.floor(Math.random() * 4000) + 100)

    });
    return {name: 'plugin-name-service'}
});

s.use('mesh', {auto: true, pins: ['role:service2']});
