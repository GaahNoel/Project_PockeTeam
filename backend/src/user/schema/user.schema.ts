import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop()
  login: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
  
  @Prop()
  info: string;

  @Prop()
  id_favorite_pokemon: string;

  @Prop()
  id_principal_team: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
