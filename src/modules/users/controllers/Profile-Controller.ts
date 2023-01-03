import { Request, Response } from "express";
import { ShowProfileService } from "../services/Show-Profile-Service";
import { UpdateProfileService } from "../services/Update-Profile-Service";

export default class ProfileController {
    public async show(request: Request, response: Response): Promise<Response> {
        const showProfileService = new ShowProfileService()
        const user_id = request.user.id;

        const user = await showProfileService.execute({user_id});
        
        return response.json(user)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const updateProfileService = new UpdateProfileService()
        const user_id = request.user.id;
        const { name, email, password, old_password } = request.body;

        const user = await updateProfileService.execute({
            email,
            name,
            user_id,
            old_password,
            password
        });
        
        return response.json(user)
    }
}