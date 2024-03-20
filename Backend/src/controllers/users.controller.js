import UserDB from '../db/users.db.js'
import userModel from '../db/models/user.model.js'

export const signUp = async (req, res) =>{

  const { name, email, password, ...others } = req.body;

  if(!name || !email || !password){
    res.status(400).json({message:"name, email and password are required"});
    return;
  }

  const user = new userModel(name, email, password);

  if(others.gender){
    user.setGender(others.gender);
  }

  if(others.birthdate){
    user.setBirthdate(others.birthdate);
  }
  
  UserDB.push(user);

  res.status(200).json({user: user.toObject()});

};