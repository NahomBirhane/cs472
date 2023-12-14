// function cb1(){
//     console.log('1');
// }
// function cb2(){
//     console.log('2');
// }
// function cb3(){
//     console.log('3');
// }
// function cb4(){
//     console.log('4');
// }
// function cb5(){
//     console.log('5');
// }

// process.nextTick(cb1);// 1st excuted
// setTimeout(cb2, 0); // 4th excuted
// Promise.resolve().then(cb4); // 3rd excuted
// process.nextTick(cb3); // 2nd excuted
// setImmediate(cb5); // 5th excuted

// /* Solution out put
// 1
// 3
// 4
// 2
// 5
// */
const http = require("http");
let server = http.createServer(function(req, res){
    console.log("Hello From Server");
});

server.listen(3000, () => {
    console.log("The server");
})