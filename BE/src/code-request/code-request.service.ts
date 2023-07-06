import { Injectable } from '@nestjs/common';
import { CreateCodeRequestDto } from './dto/create-code-request.dto';
import { UpdateCodeRequestDto } from './dto/update-code-request.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class CodeRequestService {
  constructor(private prisma: PrismaService) {}

  async create(mentee: User, createCodeRequestDto: any) {
    const newCodeRequest = await this.prisma.codeRequest.create({
      data: {
        ...createCodeRequestDto,
        mentee: {
          connect: {
            id: mentee.id,
          },
        },
        mentor: {
          connect: {
            id: createCodeRequestDto.mentorId,
          },
        },
      },
    });
    return 'This action adds a new codeRequest';
  }

  findAll() {
    return `This action returns all codeRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codeRequest`;
  }

  update(id: number, updateCodeRequestDto: UpdateCodeRequestDto) {
    return `This action updates a #${id} codeRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} codeRequest`;
  }
}
