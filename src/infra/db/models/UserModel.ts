import mongoose from "mongoose";
import moongose, { Schema, Document } from "mongoose";

export interface IUserDocument extends Document {
    nome: string;
    email: string;
}

const UserSchema = new Schema<IUserDocument>({
    nome: { type: String, required: true},
    email: { type: String, required: true}
});

export const UserModel = mongoose.model<IUserDocument>("User", UserSchema);