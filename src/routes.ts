import { Router, Request, Response } from 'express';
import { createChallenges, getChallenge, getChallenges, updateChallenge } from './controller/ChallengesController';
import { createUser, getUser } from './controller/RegisterController';

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
routes.post('/user', createUser);

export default routes;

