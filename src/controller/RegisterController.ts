import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Register } from '../entity/Register';

export const getUser = async (req: Request, res: Response) => {
  // const users = await getRepository(Register).find();
  // return res.json(users)

  const emailCreated = await getRepository(Register).findOne({ email: 'ex@gmassil.com'  })

  if (emailCreated == undefined) {
    return res.json({ msg: "This email doesn't exit! "});
  } 
  return res.json(emailCreated)

}

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const emailCreated = await getRepository(Register).findOne({ email: email  })

  if (emailCreated == undefined) {
    const user = await getRepository(Register).save({ email, password });
    return res.json(user);
  } 

 return res.json({ msg: 'This email already exist!' });
}