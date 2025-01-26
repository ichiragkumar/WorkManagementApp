import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class SocialService {


        login(data:any) {
            return {
                msg : "Login Successful",
                data : data
            };
        }
        signup(data:any) {
            return {
                msg : "Signup Successful",
                data : data
            };

        }        
        logout(data:any) {
            return {
                msg : "Logout Successful",
                data : null
            }
        }


        getUser(email:string) {
            return `User with email ${email} found`;
        }

      

        getUsers() {
            const allUsers = [
                {
                    id: 1,
                    username: "ichirag",
                    email: "ichiragkumar.dev@gmail.com",
                    password: "123456",
                    socialMedia: {
                        facebook: "ichiragkumar.dev",
                        twitter: "ichiragkumar",
                        instagram: "ichiragkumar",
                        linkedin: "ichiragkumar",
                        github: "ichiragkumar",
                    },
                },
                {
                    id: 2,
                    username: "ichirag2",
                    email: "ichiragkumar2@gmail.com",
                    password: "123456",
                    socialMedia: {
                        facebook: "ichiragkumar2",
                        twitter: "ichiragkumar2",
                        instagram: "ichiragkumar2",
                        linkedin: "ichiragkumar2",
                        github: "ichiragkumar2",
                    },
                },  
                {
                    id: 3,
                    username: "ichirag3",
                    email: "ichiragkumar3@gmail.com",
                    password: "123456",
                    socialMedia: {
                        facebook: "ichiragkumar3",
                        twitter: "ichiragkumar3",
                        instagram: "ichiragkumar3",
                        linkedin: "ichiragkumar3",
                        github: "ichiragkumar3",
                    },
                },
            ]
            return {
                msg : "Users Found",
                data : allUsers
            }
        }


        forgotPassword(data:{
            username:string,
            email:string
        }) {
            return "Forgot Password Successful";
        }       


}
