'use strict';

require('shimmingtest').start({
    "app_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTc1ZWU2MWIyMTMxOTk1NzI3M2I5NTZiIiwic3lzdGVtX2lkIjoiNTc1ZWU3YzViMDhlN2U2NjI4NGQzMTRkIiwiYXBwX2lkIjoiNTc1ZWU3ZmIxZDEwODg2NjI4ZTFlMjFlIiwiaWF0IjoxNDY1ODM3NTYzfQ.yeg2zzc_Epk0rzrDgaT1fFKYlqPSLI7MqWYP5Y_R6gY"
});


const s = require('seneca')();

s.use('mesh', {auto: true});


s.use(function (options) {
    this.add('role:user', function (args, callback) {
        callback(null, {from: 'index'})
    });


    return {name: 'plugin-name-index'}

});
//
// const times = 10;
// let i = 0;
//
// let interval = setInterval(function () {
//     if(times > i) {
//         i++;
//         console.log('running for the', i + 'th time');
//         return doAct()
//     }
//     console.log('I\'m all done', i);
//     clearInterval(interval);
//
//     // setTimeout(doAct, 2000);
// }, 7000);
let a = [];
let j = 0;

for(var i = 0; i < 1000; i++) {
    a.push(Math.floor(Math.random() * 100) + 10);
}


setTimeout(doAct, 10000);

function doAct() {
    if(!a[j]) {
        console.log('doooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeee')
        console.log('doooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeee')
        console.log('doooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeee')
        console.log('doooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeee')
        console.log('doooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeeedoooooooooneeeeee')
        return;
    }
    setTimeout(doAct, a[j]);
    j++;
    console.log('USER_INDEX: act #1');
    s.act({role: 'service'}, function callbackFuerIndex(err, data) {
        console.log('client_index:', data);
    })


}
