import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InMemoryDatabaseService } from 'src/modules/databases/in-memory-database.service';
import { Todo } from './interfaces/todo';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private readonly dbService: InMemoryDatabaseService) {}

  async findAll(): Promise<Todo[]> {
    try {
      return this.dbService.findAll();
    } catch {
      throw new InternalServerErrorException('Find all todos failed');
    }
  }

  async create(todo: CreateTodoDto): Promise<Todo> {
    try {
      return this.dbService.create(todo);
    } catch {
      throw new InternalServerErrorException('Create todos failed');
    }
  }

  async update(todo: UpdateTodoDto): Promise<Todo> {
    try {
      const updatedTodo = this.dbService.update(todo.id, todo);

      if (updatedTodo) {
        return updatedTodo;
      }
      throw new NotFoundException('Todo not found');
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Update todo failed');
    }
  }

  async delete(id: number): Promise<Todo> {
    try {
      const deletedTodo = this.dbService.delete(id);

      if (deletedTodo) {
        return deletedTodo;
      }
      throw new NotFoundException('Todo not found');
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Delete todos failed');
    }
  }
}
