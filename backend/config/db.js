import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    const conn = await mongoose.connect("mongodb+srv://Mehdi:12345@cluster0.xqwvy9j.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`%cMongoDB Connected: ${conn.connection.host}`, 'color:green');
  } catch (error) {
    console.error(`%cError: ${error.message}`, 'color:red');
    process.exit(1);
  }
}
