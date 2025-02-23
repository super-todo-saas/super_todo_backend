import {
  IsBoolean,
  IsDefined,
  IsIn,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTodoDto {
  @IsDefined()
  @IsNotEmpty()
  @MinLength(1, {
    message() {
      return `title is too short. Minimum length is 1 characters.`;
    },
  })
  @MaxLength(200, {
    message(validationArguments) {
      return `title is too long. Maximal length is ${validationArguments.value as number} characters.`;
    },
  })
  title: string;

  @IsOptional()
  @MaxLength(1000, {
    message(validationArguments) {
      return `notes is too long. Maximal length is ${validationArguments.value as number} characters.`;
    },
  })
  notes?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsIn(['free', 'paid'])
  userRole: 'free' | 'paid';
}
