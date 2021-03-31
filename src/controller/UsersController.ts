import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Users } from '../entity/Users';

export const getUser = async (req: Request, res: Response) => {
  const users = await getRepository(Users).find();
  return res.json(users)
}

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const emailCreated = await getRepository(Users).findOne({ email: email  })

  if (emailCreated == undefined) {
    const user = await getRepository(Users).save({ email, password });
    return res.json(user);
  } 

 return res.json({ msg: 'This email already exist!' });
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getRepository(Users).findOne({
    email,
    password
  })

  if (email == user.email && password == user.password) {
    return res.json(user);
  } else if (user.email == undefined || user.password == undefined) { //Tbm tentei apenas else
    return res.json({ msg: 'Something is incorrect!' });
  }
}