// bai1 
// var date = new Date();
// var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
// var day = days[date.getDay()];
// var hour = date.getHours();
// var minute = date.getMinutes();
// var sec = date.getSeconds();

// console.log("Today is " +day);
// console.log("Current time is : " +hour+ " " +minute+ " " +sec+" " );

// bai 2

// var stdin = process.openStdin();

// stdin.addListener("data", function(d){
//     console.log('you entered ' +d.toString().trim());
// })

// bai 3

// var today = new Date();
// var year = today.getFullYear();
// var month = today.getMonth() + 1;
// var day = today.getDate();

// console.log(month + "-" + day + "-" + year + ", " + month + "/" + day + "/" + year);

// bai 4

// var a = 5;
// var b = 6;
// var c = 7;

// var s = (a + b + c) / 2;
// var dt = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log("dien tich tam giac la : " + dt);
// bai 5

// var s = 'w3resource';
// var a = s.split('');
// console.log(a);

// var r = a.reverse();
// console.log(r);
// var e = r.join('');
// console.log(e);

// bai 6

// var stdin = process.openStdin();

// stdin.addListener("data", function (year) {
//     var result = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
//     console.log(result);
// })

// bai 7

// for(var year = 2014; year <= 2050; year++){
//     var checkDate = new Date(year, 0, 1);
//     if(checkDate.getDay() === 0){
//         console.log("that day is a sunday in "+ year);
//     }
// }

// bai 8

// var stdin = process.openStdin();
// var correct = Math.floor(Math.random() * 11);

// var checkNumber = stdin.addListener("data", function (number) {
//     if(number === correct){
//         console.log("correct!");
//     }
//     else
//         console.log("Try again");
//         checkNumber;
// })

// bai 9

// var oneDay = 60 * 60 * 24 * 1000;
// var today = new Date();
// var christmas = new Date(2019, 11, 25);
// var subTract = Math.round(Math.abs((christmas.getTime() - today.getTime()) / (oneDay)));
// console.log(subTract);

// bai 11

// var c = 60
// var f = 45;

// // var resultf = ((9 * c) / 5) + 32;

// var resultc = ((f - 32) * 5) / 9;

// console.log(resultc);

// bai 14

// const exampleFile = 'app.js';
// console.log(exampleFile.split('.').pop());

// bai 15

// var stdin = process.openStdin();

// stdin.addListener("data", function (number) {
//     if (number > 13) {
//         console.log((number - 13) * 2);
//     }
//     else
//         console.log(13 - number);
// })

// bai 16

// var a = 2;
// var b = 2;

// if(a == b){
//     var c = (a+b)*3;
//     console.log(c);
// }
// else {
//     var c = a+b;
//     console.log(c);
// }

// bai 17

// var stdin = process.openStdin();

// stdin.addListener("data", function (number) {
//     if (number > 19) {
//         console.log((number - 19) * 3);
//     }
//     else
//         console.log(19 - number);
// })



