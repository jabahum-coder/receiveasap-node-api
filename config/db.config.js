//Connection string for the database
//Used in Docker containers and development environments
const database_connection_string = process.env.REMOTEURL || "mongodb://localhost:27017/receiveasap_api" ;
module.exports = {

    development: {
        connection_string: database_connection_string,
        params: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    },
    //Connection to Mongo Atlas
    //Used by the Kumusoft Online test platform (https://efris.kumusoft.com)
    mongo_atlas: {
        connection_string: 'mongodb+srv://8TqUsCjbjPNbja8@test.oamsg.gcp.mongodb.net/test?retryWrites=true&w=majority',
        params: {
            user: "test",
            pass: "8TqUsCjbjPNbja8",
            dbName: "test",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    }
}