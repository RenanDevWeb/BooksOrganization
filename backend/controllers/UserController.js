import userModel from "../models/user.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (req, res) => {
  const idd = req.params.id;
  try {
    const userForId = await userModel.find({ _id: idd });
    res.status(200).json(userForId);
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (req, res) => {
  const { name } = req.body;
  const { password } = req.body;
  const { perfil } = req.body;
  const user = {
    name,
    password: await bcrypt.hash(password, 10),
    perfil,
  };
  try {
    const newUser = new userModel(user);
    newUser.save();
    res.status(200).json({ mensagem: "inserido com sucesso", newUser });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    Object.assign(user, req.body);
    user.save();
    res.status(200).json("atualizado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteOne({ _id: id });
    res.status(200).json("excluido com sucesso");
  } catch (error) {
    console.log(error);
  }
};
