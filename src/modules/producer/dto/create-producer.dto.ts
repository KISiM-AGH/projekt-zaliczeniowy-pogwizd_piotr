import { IsString } from 'class-validator';

export class CreateProducerDto {
  @IsString()
  name: string;
  @IsString()
  about: string;
}
