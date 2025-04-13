import mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error('MONGODB_URI is not found.');

        const connection = await mongoose.connect(uri);
        console.log('✅ MongoDB connected.');
        return connection;
      } catch (error) {
        console.log('MongoDB connection error: ', error);
        throw error;
      }
    },
  },
];
