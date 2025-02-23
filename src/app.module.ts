import { Module } from '@nestjs/common';
import { TodosModule } from './modules/todos/todos.module';
import { DatabaseModule } from './modules/databases/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TodosModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
