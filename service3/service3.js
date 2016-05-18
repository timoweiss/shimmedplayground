'use strict';

require('shimmingtest').start({
    application_id: 'applicationid_service3',
    service_name: 'service_service3',
    host: 'localhost',
    app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczYzM0MjE2MDI3ZTYwMTFjYTYyYmVjIiwic3lzdGVtX2lkIjoiNTczYzM0MjlhYzRmZTIwMTFjZjQzNzgwIiwiYXBwX2lkIjoiNTczYzM0YTQ2ODY0MDUwMTFjYjJhODZlIiwiaWF0IjoxNDYzNTYzNDI4fQ.ONmin07XJ7t747_TpKaNLdTRwkJiaPbDqE8HwNAzOWs'
});


const s = require('seneca')();

s.use(function(opts) {

    s.add({cmd:'somethingreallyelse', role:'service3'}, function handlerFuerService2(args, callback) {
        // console.log('USER_SERVICE3: rcv #4', args);
        setTimeout(function() {

            callback(null, {from:'service3'})
        }, Math.floor(Math.random() * 100))

    });
    return {name: 'plugin-name-service3'}
});

s.use('mesh', {auto:true, pins: ['role:service3']});
