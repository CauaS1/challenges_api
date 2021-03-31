import { getRepository }  from 'typeorm';
import { Request, Response } from 'express';
import { Challenges } from '../entity/Challenges';

export const getChallenges = async (req: Request, res: Response) => {
  const challenges = await getRepository(Challenges).find()
  return res.json(challenges)
  // return res.json({ message: "Challenges requested" });
}

export const createChallenges = async (req: Request, res: Response) => {
  const challenge = await getRepository(Challenges).save(req.body);
  return res.json(challenge);
}

export const getChallenge = async (req: Request, res: Response) => {
  const { id } = req.params;
  const challenge = await getRepository(Challenges).findOne(id);
  return res.json(challenge);
}

export const updateChallenge = async (req: Request, res: Response) => {
  const { id } = req.params;
  const challenge = await getRepository(Challenges).update(id, req.body);

  if(challenge.affected == 1) {
    const challengeUpdated = await getRepository(Challenges).findOne(id);
    return res.json(challengeUpdated);
  }

  return res.status(404).json({ message: "Challenge not found" });
}