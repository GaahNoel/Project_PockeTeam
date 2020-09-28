import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Example extends Document {
  @Prop()
  title: string;
}

export const ExampleSchema = SchemaFactory.createForClass(Example);
