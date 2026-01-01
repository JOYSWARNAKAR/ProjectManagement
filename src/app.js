import express from "express"
import cors from "cors"


const app = express()
// basic cnfiguration
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))

// cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Authorization","Content-Type"],
    
})
);

// import the routes 
import  heathCheckRouter  from "./routes/heathcheck.routes.js"
app.use("/api/v1/heathcheck", heathCheckRouter)

app.get("/", (req,res) => {
    res.send("Welcome to basecampy")
})

export default app;







