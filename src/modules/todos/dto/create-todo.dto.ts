import { IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @MaxLength(200, {
    message(validationArguments) {
      console.log(validationArguments);
      return `Title is too long. Maximal length is ${validationArguments.value as number} characters.`;
    },
  })
  title: string;

  @MaxLength(1000, {
    message(validationArguments) {
      console.log(validationArguments);
      return `Notes is too long. Maximal length is ${validationArguments.value as number} characters.`;
    },
  })
  notes?: string;

  @IsBoolean()
  completed?: boolean;
}
