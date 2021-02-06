import { Request, Response } from "express";

const IndexController = async (req: Request, res: Response) => {
  res.render("index", {
    title: "Shop Apotheke",
  });
};

export default IndexController;
