import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateIdeaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
}
