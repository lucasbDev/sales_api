import { Request, Response } from 'express'
import {  UpdateAvatarService } from '../services/UpdateUserAvatar';

export default class UserAvatarController {
    public async update(request: Request,response: Response): Promise<Response> {
        const updateAvatar = new UpdateAvatarService();

        const user = updateAvatar.execute({
            user_id: request.user.id,
            avatarFileName: request.file?.filename as string
        })

        return response.json(user)
    }
}