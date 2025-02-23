import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { InMemoryDatabaseService } from '../databases/in-memory-database.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService, InMemoryDatabaseService],
})
export class TodosModule {}
