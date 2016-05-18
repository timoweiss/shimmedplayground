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
    host: 'localhost',
    app_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWlkIjoiNTczYzM0MjE2MDI3ZTYwMTFjYTYyYmVjIiwic3lzdGVtX2lkIjoiNTczYzM0MjlhYzRmZTIwMTFjZjQzNzgwIiwiYXBwX2lkIjoiNTczYzM0ODI2ODY0MDUwMTFjYjJhODZiIiwiaWF0IjoxNDYzNTYzMzk0fQ.LwK6eMwd-GYqNXVyDqbe5-jNSo9b8IXoVIwW7keuLiw'
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

    //
    // console.log('USER_INDEX: act #1');
    // s.act({role: 'service', cmd: 'something'}, {aa: 'cc'}, function callbackFuerIndex(err, data) {
    //     console.log('client_index:', data);
    // })


    console.log('USER_INDEX: act #1');
    s.act({role: 'service', cmd: 'something'}, {aa: 'cc'}, function callbackFuerIndex(err, data) {
        console.log('client_index:', data);
        // this.act('role:user', {test: 'data'}, function () {
        //     console.log('will this be reported?');
        // });
    })


}

// // add this to the VERY top of the first file loaded in your app
// var opbeat = require('opbeat').start({
//     appId: '98a4f007a4',
//     organizationId: 'b025a041fa684f1a8f7961baa1c9d94e',
//     secretToken: '8bb39d48d0b135011607ecc7a82550d1c5406717'
// });
//
//
//
// const Hapi = require('hapi');
//
// // Create a server with a host and port
// const server = new Hapi.Server();
// server.connection({
//     host: 'localhost',
//     port: 8000
// });
//
// // Add the route
// server.route({
//     method: 'GET',
//     path:'/hello',
//     handler: function (request, reply) {
//
//         return reply('hello world');
//     }
// });
//
// // Start the server
// server.start((err) => {
//
//     if (err) {
//         throw err;
//     }
//     console.log('Server running at:', server.info.uri);
// });