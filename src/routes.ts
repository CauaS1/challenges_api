import { Router, Request, Response } from 'express';
import { createChallenges, getChallenge, getChallenges, updateChallenge } from './controller/ChallengesController';
import { register, getUser, login } from './controller/UsersController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
})

routes.get('/challenges', getChallenges);
routes.get('/challenge/:id', getChallenge);
routes.post('/challenges', createChallenges);
routes.patch('/challenge/:id', updateChallenge);

// User Creation
routes.get('/users', getUser);
routes.post('/user', register);

routes.post('/login', login);

export default routes;

