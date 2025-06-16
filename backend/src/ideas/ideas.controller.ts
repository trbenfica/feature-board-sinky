import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { CreateIdeaDto } from './dto/crete-idea.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Get()
  findAll() {
    return this.ideasService.findAll();
  }

  @Post(':id/vote')
  vote(@Param('id', ParseIntPipe) id: number) {
    return this.ideasService.vote(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() CreateIdeaDto: CreateIdeaDto) {
    return this.ideasService.create(CreateIdeaDto.title);
  }
}
