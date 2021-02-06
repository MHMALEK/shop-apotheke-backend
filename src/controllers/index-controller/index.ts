import { Request, Response } from 'express';

const IndexController = async (req: Request, res: Response) => {
  res.send('success');
};

export default IndexController;
