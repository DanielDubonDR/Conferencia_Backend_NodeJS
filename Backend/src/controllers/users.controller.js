import UserDB from '../db/users.db.js'
import userModel from '../db/models/user.model.js'

// & REGISTRO DE USUARIOS
export const signUp = async (req, res) =>{

  // * Obtiene los datos del body
  const { name, email, password, ...others } = req.body;

  // * Verifica que los datos requeridos no estén vacíos
  if(!name || !email || !password){
    res.status(400).json({message:"name, email and password are required"});
    return;
  }

  // * Buscar si el usuario ya existe
  const userExists = UserDB.find(user => user.getEmail() === email);

  // * Si el usuario ya existe, se envía un mensaje de error
  if(userExists){
    res.status(400).json({message:"User already exists"});
    return;
  }

  // * Crear un nuevo usuario
  const user = new userModel(name, email, password);

  // * Verifica si hay datos adicionales
  if(others.gender){
    user.setGender(others.gender);
  }

  if(others.birthdate){
    user.setBirthdate(others.birthdate);
  }
  
  // * Agregar el usuario a la "base de datos"
  UserDB.push(user);

  // * Respuesta
  const response = {
    message: "User created",
    user: user.toObject()
  };

  res.status(200).json(response);

};

// & INICIO DE SESIÓN DE UN USUARIO
export const signIn = async (req, res) =>{

  // * Obtiene los datos del body
  const { email, password } = req.body;

  if(!email || !password){
    res.status(400).json({message:"Email and Password are required"});
    return;
  }

  // * Buscar el usuario en la "base de datos"
  const user = UserDB.find(user => user.getEmail() === email && user.getPassword() === password);

  // * Si el usuario no existe, se envía un mensaje de error
  if(!user){
    res.status(400).json({message:"user not found"});
    return;
  }

  // * Respuesta
  const response = {
    message: "User found",
    user: user.toObject()
  };

  res.status(200).json(response);
};

// & OBTENER TODOS LOS USUARIOS REGISTRADOS
export const getUsers = async (req, res) =>{

  // * Mapear todos los usuarios
  const allUsers = UserDB.map(user => user.toObject());

  res.status(200).json({users: allUsers});

};

// & ACTUALIZAR EL NOMBRE DE UN USUARIO
export const updateNameUser = async (req, res) =>{

  // * Obtiene los datos del body
  const { email, name } = req.body;

  // * Verifica que los datos requeridos no estén vacíos
  if(!email || !name){
    res.status(400).json({message:"email and name are required"});
    return;
  }

  // * Buscar el usuario en la "base de datos"
  const user = UserDB.find(user => user.getEmail() === email);

  // * Si el usuario no existe, se envía un mensaje de error
  if(!user){
    res.status(400).json({message:"user not found"});
    return;
  }

  // * Actualizar el nombre del usuario
  user.setName(name);

  // * Respuesta
  const response = {
    message: "User updated",
    user: user.toObject()
  };

  res.status(200).json(response);

};

// & ELIMINAR UN USUARIO
export const deleteUser = async (req, res) =>{

  // * Obtiene el email como parámetro
  const { email } = req.params;

  // * Verifica que el email no esté vacío
  if(!email){
    res.status(400).json({message:"email is required"});
    return;
  }

  // * Buscar el usuario en la "base de datos"
  const userIndex = UserDB.findIndex(user => user.getEmail() === email);

  // * Si el usuario no existe, se envía un mensaje de error
  if(userIndex === -1){
    res.status(400).json({message:"User not found"});
    return;
  }

  // * Eliminar el usuario
  UserDB.splice(userIndex, 1);

  res.status(200).json({message:"User deleted"});

};