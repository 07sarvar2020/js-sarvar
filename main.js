//  var  misol = +prompt('yoshingizni kiriting')
//  if (misol > 0 && misol <= 18) {
//     console.log("siz yoshsiz o'qishingiz kerak")
// }else if (misol > 18 &&  misol <= 50){
//     console.log("ishlashingiz kerak")
// }else if ( misol > 50 && misol <= 59){
//     console.log(" yaqinda pensiyaga chiqasiz")
// }else if ( misol > 59 && misol <= 150) {
//     console.log("pensiyanerga o'xshaysiz , agarda trik bo'lsangiz ")
// }


// var ism = prompt('ism kiriting');
// if (ism == 'sarvar') {
//     console.log('Hello Boss')
// }else{
//     console.log('Hello gues')

// }
var misol1 = +prompt('soni kiriting')
var misol2 = +prompt('soni kiriting')
var misol3 = +prompt('soni kiriting')
// console.log('2')
// console.log('20')
// console.log('10')
if (misol1 > misol2 && misol1 < misol3 || misol1 < misol2 && misol1 > misol3) {
    console.log('1-son katta')
} else if (misol2 > misol1 && misol2 < misol3 || misol2 < misol1 && misol2 > misol3) {
    console.log('2-son katta')
} else if (misol3 > misol1 && misol3 < misol2 || misol3 < misol1 && misol3 > misol2) {
    console.log('3-son katta')
}