import mongoose, { Schema, model } from "mongoose";
import appconfig from "../config/appconfig";
import { IUser } from "../interfaces/IUser";

const userschema = new Schema<IUser>({
    email: {
        type: mongoose.SchemaTypes.String,
        index: true,
        required: true,
        minlength: [3, 'Must have at least 3 characters'],
        maxlength: [60, 'Must have at most 25 characters'],
        validate: {
            validator: (str: string) => {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(str);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Must have at least 8 characters'],
        maxlength: [100, 'Must have at most 100 characters'],
        validate: {
            validator: (str: string) => {
                return new RegExp(appconfig.auth.password_regex).test(str);
            },
            message: props => `${props.value} is not a valid password!`
        }
    }
}, {
    timestamps: true
});

export default model<IUser>('user', userschema);