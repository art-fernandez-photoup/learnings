import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://root:admin@mongodb:27017/store?authSource=admin'); 
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connect;