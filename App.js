import Lab5 from "./Lab5.js";
import CourseRoutes from "./kanbas/courses/routes.js";
import ModuleRoutes from "./kanbas/modules/routes.js";
import cors from "cors";
import Hello from "./Hello.js";
import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import "dotenv/config";
import session from "express-session";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://gdiegnan147:supersecretpassword@cluster0.zu6qmxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(CONNECTION_STRING);
const app = express();
const port = process.env.PORT || 4000;
app.use(
    cors({
        credentials: true,
        origin: [process.env.FRONTEND_URL, "http://localhost:3000"]
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "default", 
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
