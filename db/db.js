const mongoose = require('mongoose');
const mongo_url = "mongodb+srv://coolsummer113:minhnhan911@cluster0.fcjyhtd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(mongo_url)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}