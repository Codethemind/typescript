interface User{
    readonly _id:number,
    name:string,
    email:string,
    userId:number,
    googelId?:number
}


let newuser:User={
    _id:5687,
    name:'shahid',
    email:'mhd@gmail.com',
    userId:236
}

newuser.email='hsha@gamil.com'
// newuser._id=6598 cannot redeclare because it is readonly 