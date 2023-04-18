// const square = {
//     area : (a) =>(a*a),
//     perimeter : (a) =>(4*a),
// }

const square = require('./square.js');
const calsquare = (a) =>{
    console.log(`The Area of a is : ${a} `+ square.area(a));
    console.log(`The Perimeter of a is : ${a} `+ square.perimeter(a));
}

calsquare(5);    