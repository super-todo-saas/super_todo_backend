import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Todo } from './interfaces/todo';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return await this.todosService.findAll();
  }

  @Post()
  async createTodo(todo: CreateTodoDto): Promise<Todo> {
    return await this.todosService.create(todo);
  }

  @Put()
  async updateTodo(todo: UpdateTodoDto): Promise<Todo> {
    return await this.todosService.update(todo);
  }

  @Delete()
  async deleteTodo(id: number): Promise<Todo> {
    return await this.todosService.delete(id);
  }
}
