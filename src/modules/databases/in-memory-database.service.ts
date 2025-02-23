import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from 'src/modules/todos/dto/create-todo.dto';
import { Todo } from 'src/modules/todos/interfaces/todo';

@Injectable()
export class InMemoryDatabaseService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  create(data: CreateTodoDto): Todo {
    const id = this.todos.length;
    const newTodo: Todo = {
      id,
      title: data?.title ?? '',
      notes: data?.userRole === 'paid' ? data?.notes : undefined,
      completed: data?.completed ?? false,
      createdAt: new Date().toISOString(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, data: CreateTodoDto): Todo | null {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newTodoTitle = (data?.title ?? '').trim();
      this.todos[index] = {
        ...this.todos[index],
        title:
          newTodoTitle?.length > 0 ? newTodoTitle : this.todos[index].title,
        notes: data?.userRole === 'paid' ? data?.notes : undefined,
        completed: data?.completed ?? false,
      };
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
