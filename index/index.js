'use strict';
// require('shimmingtest').start({
//     application_id: '_index',
//     service_name: 'service_index',
//     // host: 'localhost',
//     app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczODhlOTNjMGE4MDk0YjFhMjJlMmJkIiwic3lzdGVtX2lkIjoiNTczODhlOWM3MDAyOGY0YjFhMTI2MTAxIiwiYXBwX2lkIjoiNTczODhlYjAzNjBkZjc0YjFhZTIzZTk5IiwiaWF0IjoxNDYzMzI0MzM2fQ.St_OmtVXVZ88GvvhvN7gN84krtpU0PPumCclxq7HMvU'
// });
require('shimmingtest').start({
    application_id: '_index',
    service_name: 'service_index',
    // host: 'localhost',
    app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczYzdmYjA4MWNlODAzODU2YWY4OTU1Iiwic3lzdGVtX2lkIjoiNTczYzdmYmY4NDQyYTYzODU2YTljZDkxIiwiYXBwX2lkIjoiNTczYzdmZDFiMDJlNjczODU2MjhmN2E2IiwiaWF0IjoxNDYzNTgyNjczfQ.GFV3QIbxBJkIDWDfotvPALC647WUCRF7ejMWH0R8XPI'
});


const s = require('seneca')();

s.use('mesh', {auto: true});


s.use(function (options) {
    this.add('role:user', function (args, callback) {
        callback(null, {from: 'index'})
    });


    return {name: 'plugin-name-index'}

});

const times = 10;
let i = 0;

let interval = setInterval(function () {
    if(times > i) {
        i++;
        console.log('running for the', i + 'th time');
        return doAct()
    }
    console.log('I\'m all done', i);
    clearInterval(interval);

    // setTimeout(doAct, 2000);
}, 7000);

function doAct() {

    console.log('USER_INDEX: act #1');
    s.act({role: 'service'}, function callbackFuerIndex(err, data) {
        console.log('client_index:', data);
    })


}