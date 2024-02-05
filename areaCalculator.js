//Area Calculator

let length = 3
let width = 5

let base = 6
let height = 9

let r = 7
// using function declaration
function rectangleAre(a, b){
    return a * b
}

function triangleArea(base, height){
    return 1/2 * base * height
}

function circleArea(r){
    return Math.PI * Math.pow(r, 2)
}

console.log(rectangleAre(length, width))
console.log(triangleArea(base, height))
console.log(circleArea(r))
// const rectangleArea = (length, width) => length * width
// const triangleArea = (base, height) => 1/2 * base * height
// const circleArea = (r) => Math.PI * Math.pow(r,2)

// const calculateRectangleArea = rectangleArea(length, width)
// const calculateTriangleArea = triangleArea(base, height)
// const calculateCircleArea = circleArea(r)

// console.log(`The area of the rectangle is : ${calculateRectangleArea}`)
// console.log(`The area of the triangle is : ${calculateTriangleArea}`)
// console.log(`The area of the circle is : ${calculateCircleArea}`)


