import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  findAll() {
    return [];
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  create(@Body() dto: CreateUserDto) {
    return dto;
  }
}
