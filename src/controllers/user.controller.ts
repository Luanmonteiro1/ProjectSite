import { Request, Response } from "express";
import { UserReturn } from "../interfaces/user.interface"
import { createUserService, readUserService } from "../services/user.service"

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await createUserService(req.body)
    
    return res.status(201).json(user)
}

export const readUserController = async (req: Request, res: Response): Promise<Response> => {
    const users = await readUserService()
    return res.status(200).json(users)
}