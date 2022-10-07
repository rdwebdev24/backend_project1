import { v4 as uuidv4 } from 'uuid';
let users = [];

export const createUser = (req,res) =>{
     const user = req.body
     users.push({...user,id:uuidv4(),age:Math.floor(Math.random()*100)});
     res.status(200).json({"status":200,"msg":"success"})
}

export const getUser = (req,res)=>{
     res.send(users);
}

export const getSingleUser = (req,res)=>{
     const {id} = req.params; 
     const singleUser = users.find(user=>user.id===id)
     res.send(singleUser)
}

export const deleteUser = (req,res)=>{
     const {id} = req.params;
     users = users.filter(user=>user.id!==id);
     res.send(users);
}

export const updateUser = (req,res)=>{
     const {id} = req.params;
     const {firstname,lastname,age} = req.body;
     const user = users.find((user)=>user.id===id)

     if(firstname) user.firstname = firstname;
     if(lastname) user.lastname = lastname;
     if(age) user.age = age;

     res.status(200).send({"status":200,msg:"updated"})
     console.log(users);
     
}