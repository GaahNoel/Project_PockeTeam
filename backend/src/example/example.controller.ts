import { Body, Controller, Post } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { Example } from './schema/example.schema';
import { ExampleService } from './example.service';

@Controller('examples')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}
  @Post()
  create(@Body() createExampleDTO: CreateExampleDto): Promise<Example> {
    return this.exampleService.create(createExampleDTO);
  }
}