import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from 'src/modules/todos/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/modules/todos/dto/update-todo.dto';
import { Todo } from 'src/modules/todos/interfaces/todo';

@Injectable()
export class InMemoryDatabaseService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: CreateTodoDto): Todo {
    const id = this.todos.length;
    const newTodo: Todo = {
      id,
      createdAt: new Date().toISOString(),
      completed: todo?.completed ?? false,
      ...todo,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updatedTodo: UpdateTodoDto): Todo | null {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updatedTodo };
      return this.todos[index];
    }
    return null;
  }

  delete(id: number): Todo | null {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      const deletedTodo = this.todos.splice(index, 1);
      return deletedTodo[0];
    }
    return null;
  }
}
