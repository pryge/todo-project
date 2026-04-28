import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty()
  email: string;

  @MinLength(6, { message: 'Password should have at least 6 characters' })
  @IsNotEmpty()
  password: string;
}

export class RegisterDto extends LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
}
