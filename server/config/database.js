import mongoose from 'mongoose'

export const connectDatabase = ()=>{
    const connectk="mongodb+srv://tdacademy:tdacademy123@cluster0.dfynd.mongodb.net/?retryWrites=true&w=majority"
    
    mongoose.connect(connectk, { useNewUrlParser: true, useUnifiedTopology: true }) //Mongodb URI is fetched from environment variable
        .then( (c) => console.log( `Database Connected ${c.connection.name}` ))
        .catch((e)=>console.log(e))
}