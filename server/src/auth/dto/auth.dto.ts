import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty()
  email: string;

  @MinLength(6, { message: 'Password should have at least 6 characters' })
  @IsNotEmpty()
  password: string;
}
