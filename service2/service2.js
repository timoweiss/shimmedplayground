'use strict';

require('shimmingtest').start({
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc1ZWU2MWIyMTMxOTk1NzI3M2I5NTZiIiwic3lzdGVtX2lkIjoiNTc1ZWU3YzViMDhlN2U2NjI4NGQzMTRkIiwiYXBwX2lkIjoiNTc1ZWU4MDkxZDEwODg2NjI4ZTFlMjIwIiwiaWF0IjoxNDY1ODM3NTc3fQ.MWCBJx8QGAIQhGfOTwsaPtSxVUqqb66xBXeZsksUVvg"
});

const s = require('seneca')();

s.use(function (opts) {

    s.add('role:service2', function handlerFuerService2(args, callback) {
        // console.time('service2antwort')
           setTimeout(function () {
// console.timeEnd('service2antwort')
//             console.log('service2 is sending response')
        callback(null, {from: 'service2'})
        }, 100|| Math.floor(Math.random() * 100))

    });
    return {name: 'plugin-name-service'}
});
s.use('mesh', {auto: true, pins: ['role:service2']});
