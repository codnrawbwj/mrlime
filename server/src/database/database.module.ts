import { Module } from '@nestjs/common';
import { databaseProvider } from 'src/database/database.providers';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
