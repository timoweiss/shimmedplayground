'use strict';

require('shimmingtest').start({
    application_id: 'applicationid_service3',
    service_name: 'service_service3',
    // host: 'localhost',
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc0NTViNDQ2MzZjNWU1YzNmMzdmMjYwIiwic3lzdGVtX2lkIjoiNTc0NTViNTU3NzM1NTA1YzNmMjM2MTUyIiwiYXBwX2lkIjoiNTc0NTVjMGJkYmRhYjY1YzNmMmUxMzU0IiwiaWF0IjoxNDY0MTYzMzM5fQ.VZnYa4IwtvWp3UaJFeMWBD-16coEhDT2IO8oGAuoq0A"
});


const s = require('seneca')();

s.use(function(opts) {

    s.add('role:service3', function handlerFuerService2(args, callback) {
        // console.log('USER_SERVICE3: rcv #4', args);
        setTimeout(function() {

            callback(null, {from:'service3'})
        }, Math.floor(Math.random() * 100))

    });
    return {name: 'plugin-name-service3'}
});

s.use('mesh', {auto:true, pins: ['role:service3']});
