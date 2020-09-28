import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './register/register.module';
import { RegisterService } from './register/register.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://PockeTeam:pocketeam@cluster0.z8nqp.mongodb.net/PockeTeam?retryWrites=true&w=majority'),
    RegisterModule
  ],
  controllers: [AppController],
  providers: [AppService, RegisterService],
})
export class AppModule {}
