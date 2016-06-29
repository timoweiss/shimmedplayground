'use strict';

require('shimmingtest').start({
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc1ZWU2MWIyMTMxOTk1NzI3M2I5NTZiIiwic3lzdGVtX2lkIjoiNTc1ZWU3YzViMDhlN2U2NjI4NGQzMTRkIiwiYXBwX2lkIjoiNTc1ZWU4MGYxZDEwODg2NjI4ZTFlMjIxIiwiaWF0IjoxNDY1ODM3NTgzfQ.oLJzlG18ZEoSajfG_uAfyfqLXQqMVbDhmDxY21KDeRo"
});


const s = require('seneca')();

s.use(function(opts) {

    s.add('role:service3', function handlerFuerService2(args, callback) {
        // console.log('USER_SERVICE3: rcv #4', args);
        // setTimeout(function() {
        console.time('service4antwort')    
	s.act({role: 'service4'}, function callbackFuerIndex(err, data) {
                console.log('client_index:', data);
		console.timeEnd('service4antwort')
                callback(null, {from:'service3'})
            })
        // },1|| Math.floor(Math.random() * 100))

    });
    return {name: 'plugin-name-service3'}
});

s.use('mesh', {auto:true, pins: ['role:service3']});
