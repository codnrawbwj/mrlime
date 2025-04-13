import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ConfigModule } from '@nestjs/config';

// const mognoDB_URI = process.env.MOGNODB_URI;
// if (!mognoDB_URI) {
//   throw new Error('❌ MONGODB_URI is not defined.');
// }
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => {
        const mognoDB_URI = process.env.MONGODB_URI;
        if (!mognoDB_URI) {
          throw new Error('❌ MONGODB_URI is not defined.');
        }
        return { uri: mognoDB_URI };
      },
    }),
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
