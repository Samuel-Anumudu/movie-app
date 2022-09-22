import { Document } from "mongoose"


/**
 * Representing a user model in the system
 */
export interface IUser {
    email: string,
    password: string
}

export interface IUserDocument extends IUser, Document {};