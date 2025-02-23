import { IsInt, IsNumber } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends CreateTodoDto {
  @IsNumber()
  @IsInt()
  id: number;
}
