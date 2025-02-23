import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './interfaces/todo';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return await this.todosService.findAll();
  }

  @Post()
  async createTodo(@Body() data: CreateTodoDto): Promise<Todo> {
    return await this.todosService.create(data);
  }

  @Put(':id')
  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateTodoDto,
  ): Promise<Todo> {
    return await this.todosService.update(id, data);
  }

  @Delete(':id')
  async deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return await this.todosService.delete(id);
  }
}
