'use strict';
require('shimmingtest').start({
    application_id: 'applicationid_service',
    service_name: 'service_service',
    app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczODhlOTNjMGE4MDk0YjFhMjJlMmJkIiwic3lzdGVtX2lkIjoiNTczODhlOWM3MDAyOGY0YjFhMTI2MTAxIiwiYXBwX2lkIjoiNTczODhlZjAzNjBkZjc0YjFhZTIzZTlhIiwiaWF0IjoxNDYzMzI0NDAwfQ.tnojmYwpbyjVqxjkX-qoUmgVdFI2QjUch7pil9UM3XA'
});
//
// require('shimmingtest').start({
//     application_id: 'applicationid_service',
//     service_name: 'service_service',
//     host:'localhost',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczODY1YWMzNzYzNDc5OTlmZWFlZDc5Iiwic3lzdGVtX2lkIjoiNTczODY1Yjg3NGY1ZDc5OTlmMDYyMDJiIiwiYXBwX2lkIjoiNTczODY2MGNjM2MzOGI5OTlmOWYzOGM4IiwiaWF0IjoxNDYzMzEzOTMyfQ.2O62jmdtAPuhaeLxAemsMEYYk7JPdzVGtp-aM0h4Hlc'
// });

const s = require('seneca')();
const joi = require('joi');
const parambulator = require('parambulator');

const schema = joi.object().keys({
    aa: joi.string().min(4)
})


s.use(function (opts) {

    s.add('role:service,cmd:something', function handlerFuerService1(args, callback) {
        let that = this;
        console.log('USER_SERVICE: rcv #2', args);
        setTimeout(function () {
            console.log('USER_SERVICE: act #3');
              that.act({cmd: 'somethingelse', role: 'service2'}, function callbackFuerService1(err, data) {
                //
                //
                callback(null, {from: 'service'})
            });
        }, 2000)

    });


    return {name: 'plugin-name-service'}
});

s.use('mesh', {base: true, pins: ['role:service']});
