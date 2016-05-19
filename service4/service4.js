'use strict';
// require('shimmingtest').start({
//     application_id: 'applicationid_service',
//     service_name: 'service_service',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczOWM1M2FjMGE4MDk0YjFhMjJlMmJlIiwic3lzdGVtX2lkIjoiNTczOWM1NGM3MDAyOGY0YjFhMTI2MTAyIiwiYXBwX2lkIjoiNTczOWM1NWQzNjBkZjc0YjFhZTIzZTlkIiwiaWF0IjoxNDYzNDAzODY5fQ.wgkUI5s1Hj23NqGK2tOcE94bo94fYlAvp2Di1C1Ty_E'
// });

require('shimmingtest').start({
    application_id: 'applicationid_service4',
    service_name: 'service_service4',
    // host: 'localhost',
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczYzdmYjA4MWNlODAzODU2YWY4OTU1Iiwic3lzdGVtX2lkIjoiNTczYzdmYmY4NDQyYTYzODU2YTljZDkxIiwiYXBwX2lkIjoiNTczYzdmZTViMDJlNjczODU2MjhmN2FhIiwiaWF0IjoxNDYzNTgyNjkzfQ.Aq8r-6jNpk58bHtaDBOLZw2ZqIBUJ5djuFw5aA9_bT0"
});

const s = require('seneca')();

s.use(function (opts) {


    const times = 5;
    let i = 0;

    let interval = setInterval(function() {
        if(times > i) {
            i++;
            console.log('running for the', i + 'th time');
            s.act('role:service5,cmd:crapTest', function(){});
            return;
        }

        console.log('I\'m all done', i);
        clearInterval(interval);
    }, 3000);


    s.add('role:service4,cmd:crapTest', function handlerFuerService1(args, callback) {
        let that = this;
        callback(null, {from: 'service4'})


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

s.use('mesh', {auto: true, pins: ['role:service4']});
