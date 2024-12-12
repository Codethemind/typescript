// function addTwo(n:number):number{
//     return n+2
// }
// addTwo(2)
// console.log(addTwo(4))

// function getUpper(val:string){
//     return val.toUpperCase()
// }

// console.log(getUpper('shahid'))

// function signUpUser(name:string,email:string, isPaid:boolean){}
// signUpUser('shahid','shahid@gmail.com',true)
// let logInUser=(name:string , email:string , isPaid:boolean=false)=>{}
// logInUser('sha','sha@gmail.com',)


// const gethello=(val:string):string=>{
//     return ""
// }

// const heros =['shahid','swadiq','swafa', 'marva']
// // const heros =[1,2,3,]

// const modi=heros.map((hero):string=>{
//     return hero+'hi'
// })

// console.log(modi)




function consoleError(errorMassege:string):void{
    console.log(errorMassege)
}
function handleError(errorMassege:string):never{
    throw new Error(errorMassege)
}

export{}