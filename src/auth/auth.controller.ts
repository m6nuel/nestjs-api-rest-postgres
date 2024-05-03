import {
  Body,
  Controller,
  Get,
  Post /* Req, UseGuards*/,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
// import { AuthGuard } from './guard/auth.guard';
// import { Request } from 'express';
// import { Roles } from './decorators/roles.decorator';
// import { RolesGuard } from './guard/roles.guard';
import { Role } from '../common/enum/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // @Get('profile')
  // @Roles(Role.ADMIN)
  // @UseGuards(AuthGuard, RolesGuard)
  // profile(@Req() req: RequestWhitUser) {
  //   return req.user;
  // }

  @Get('profile')
  @Auth(Role.USER)
  profile(
    @ActiveUser() user: UserActiveInterface /*@Req() req: RequestWhitUser*/,
  ) {
    return this.authService.profile(user);
  }
}
