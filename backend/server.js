import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

//Making our express server
const app = express()

//applying or middleware, things and modules that express would use
app.use(cors())
app.use(express.json()) //We don't need to use body parser again, in new versions of express


//Specifying some of the initial routes are
app.use("/api/v1/restaurants" , restaurants)
app.use("*",  (req, res) => res.status(404).json({error: "Page not found"}))


export default app