import mongoose, { Schema, model } from "mongoose";
import appconfig from "../config/appconfig";
import { IMovie } from "../interfaces/IMovie";

const movieschema = new Schema<IMovie>({
    title: {
        type: mongoose.SchemaTypes.String,
        required: true,
        index: true,
        minlength: [1, 'Must have at least 1 character'],
        maxlength: [100, 'Must have at most 100 characters']
    },
    year: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        min: [1800, 'Movies should not be older than the year 1800 after JC'],
        max: 2050,
        validate: {
            validator: (year: number): boolean => {
                return /^\d{4}$/.test(`${year}`)
            }
        }
    },
    category: {
        type: mongoose.SchemaTypes.String,
        required: true,
        index: true,
        enum: ["movie", "serie"],
        default: "movie"
    },
    rating: {
        type: mongoose.SchemaTypes.String,
        required: true,
        index: true,
        enum: ["E", "A", "E", "E10", "T", "M", "PG", "RP", "RP+"],
        default: "E"
    },
    isTrending: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        index: true,
        default: false
    },
    thumbnail: {
        trending: {
            small: {
                type: mongoose.SchemaTypes.String,
                required: true,
            },
            medium: {
                type: mongoose.SchemaTypes.String,
                required: true
            }
        }
    },
    regular: {
        small: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        medium: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        large: {
            types: mongoose.SchemaTypes.String,
            required: true
        }
    }


}, { timestamps: true })



export default model<IMovie>('movie', movieschema);