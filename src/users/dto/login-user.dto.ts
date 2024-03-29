import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  @MinLength(8)
  password: string;
}
