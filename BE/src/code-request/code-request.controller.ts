import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CodeRequestService } from './code-request.service';
import { CreateCodeRequestDto } from './dto/create-code-request.dto';
import { UpdateCodeRequestDto } from './dto/update-code-request.dto';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('code-request')
export class CodeRequestController {
  constructor(private readonly codeRequestService: CodeRequestService) {}

  @Roles(Role.MENTEE)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(
    @Request() req,
    @Body() createCodeRequestDto: Prisma.CodeRequestUncheckedCreateInput,
  ) {
    return this.codeRequestService.create(req.user, createCodeRequestDto);
  }

  @Get()
  findAll() {
    return this.codeRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codeRequestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCodeRequestDto: UpdateCodeRequestDto,
  ) {
    return this.codeRequestService.update(+id, updateCodeRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codeRequestService.remove(+id);
  }
}
