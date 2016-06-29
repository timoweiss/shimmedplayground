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
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc1ZWU2MWIyMTMxOTk1NzI3M2I5NTZiIiwic3lzdGVtX2lkIjoiNTc1ZWU3YzViMDhlN2U2NjI4NGQzMTRkIiwiYXBwX2lkIjoiNTc1ZWU4MTQxZDEwODg2NjI4ZTFlMjIyIiwiaWF0IjoxNDY1ODM3NTg4fQ.3ijGLGY-FPhHkcj_sNAE4SczihTwPQ_oliHq_HZw-EM"

});

const s = require('seneca')();

s.use(function (opts) {


    const times = 5;
    let i = 0;

    // let interval = setInterval(function() {
    //     if(times > i) {
    //         i++;
    //         console.log('running for the', i + 'th time');
    //         s.act('role:service5', function(){
    //             console.log('from service5')
    //         });
    //         return;
    //     }
    //
    //     console.log('I\'m all done', i);
    //     clearInterval(interval);
    // }, 3000);

    // setTimeout(() => {
    //     s.act('role:service5', function(){
    //         console.log('from service5')
    //     });
    // }, 5000);


    s.add('role:service4', function handlerFuerService1(args, callback) {
//        this.act('role:service', function(){
            setTimeout(function() {

                callback(null, {from: 'service4'})
            }, 100);
  //      });

    });


    return {name: 'plugin-name-service'}
});

s.use('mesh', {auto: true, pins: ['role:service4']});
