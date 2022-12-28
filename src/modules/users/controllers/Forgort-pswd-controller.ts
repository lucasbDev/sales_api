import { Request, Response } from 'express'
import { SendForgotEmailService } from '../services/SendForgotPswdEmailService'

export default class ForgortPswdController {
    public async create(request: Request,response: Response) {
        const { email } = request.body
        const SendForgotPswdEmail = new SendForgotEmailService()
        
        await SendForgotPswdEmail.execute({
            email
        })
        return response.status(2004).json()
    }
}