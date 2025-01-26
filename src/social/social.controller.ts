import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SocialService } from './social.service';

@Controller('social')
export class SocialController {
    constructor(private readonly socialService: SocialService) {}





    @Post('/login')
    login(@Body() data: {
        username: string,
        password: string
    }) {
        return this.socialService.login(data);
    }


    @Post('/signup')
    signup(@Body() data: {
        username: string,
        password: string,
        email: string
    }) {
        return this.socialService.signup(data);
    }


    @Post('/logout')
    logout(@Body() data: {
        username: string,
        password: string
    }) {
        return this.socialService.logout(data);
    }

    @Get('/getuser/:email')
    getUser(@Param('email') email: string) {
        return this.socialService.getUser(email);
    }


    @Get('/getusers')
    getUsers() {
        return this.socialService.getUsers();
    }

    @Put("/forgotpassword")
    forgotPassword(@Body () data: {
        username:string,
        email:string
    }) {
        return this.socialService.forgotPassword(data);
    }


}
