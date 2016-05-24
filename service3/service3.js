'use strict';

require('shimmingtest').start({
    application_id: 'applicationid_service3',
    service_name: 'service_service3',
    // host: 'localhost',
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczYzdmYjA4MWNlODAzODU2YWY4OTU1Iiwic3lzdGVtX2lkIjoiNTczYzdmYmY4NDQyYTYzODU2YTljZDkxIiwiYXBwX2lkIjoiNTczYzdmZTFiMDJlNjczODU2MjhmN2E5IiwiaWF0IjoxNDYzNTgyNjg5fQ.fCALV6PUGvndr5Fon3oDE9m-1Km7yzkV1FWEDTLxF88"
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
