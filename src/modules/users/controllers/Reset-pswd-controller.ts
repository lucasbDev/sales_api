import { Request, Response } from 'express'
import { ResetPswdService } from '../services/Reset-Pswd-Service';


export default class ResetPswdController {
    public async create(request: Request,response: Response):Promise<Response> {
        const { password, token } = request.body
        const resetPswd = new ResetPswdService();
        
        await resetPswd.execute({
            password,
            token
        })
        return response.status(204).json()
    }
}