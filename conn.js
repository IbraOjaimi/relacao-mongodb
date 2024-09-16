import mongoose from "mongoose";

const mongoDB = 'mongodb+srv://ibraojaimi:I125786bra@cluster0.fhhha.mongodb.net/';
const database = 'subDocumentos';
const main = async () => {
    try{
    await mongoose.connect(mongoDB + database);
    console.log('Conectado com sucesso!');
}  catch (error) {
    console.log(error);
}
}

main();

export default mongoose