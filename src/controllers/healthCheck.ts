import { Response, Request, NextFunction } from "express";

export const healthcheck = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.json({ health: "sain", uptime: process.uptime() });
};
