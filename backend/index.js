import app from "./server.js"
import mongodb, { MongoClient } from "mongodb"
import dotenv from "dotenv"


// configue the env file
dotenv.config()

const MongoClinet = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolsize: 50,
        vtimeout: 2500,
        useMewUrlParse: true
    }
)
.catch(err =>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    app.listen(port, () =>{
        console.log(`Listening on port ${port}`)
    })
})