//---------- functions---------

// function sqr(x){
//    console.log(x*x)
// }
// sqr(5)



//----------- arrrow functions------------

// let cube= (x) => {
//   return (x*x*x)
// }
// console.log(cube(3))


//----------for-loop-----------

// let value=[1,2,3,4,5]
// for(i=0;i<value.length;i++){
//  console.log(value[i]*value[i])
// }


// -------------maps-----------

// let values=[1,2,3,4,5]
// let sqr= values.map((x)=>{
//  return x*x
// })
// console.log(sqr)

// -----------filters--------

// let values=[500,651,782,352,777,354,459,749,100,302,558]
// let sqr= values.map((x)=>{
//  return x*x
// })
// console.log(sqr)



// let values=[500,651,782,352,777,354,459,749,100,302,558]

// let graterThenThree=values.map((x)=>{
//     // return x>500

//     // return x>=200 && x<=600
//     return x*x*x
// })
// console.log(graterThenThree)


//------- chine-form-----------

let values=[1,2,4,7,5,9]
let cube=values.map((x)=>{
   return x*x*x
}).filter((x)=>{
return x>10
})
console.log(cube)