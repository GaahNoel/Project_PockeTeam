import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from '../example/example.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mktnow:LLCVG0HOfJLmG4KU@bmsnutrition.h8xh0.mongodb.net/bmsnutrition?retryWrites=true&w=majority'), ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
