import express from "express";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./kanbas/courses/routes.js";
import ModuleRoutes from "./kanbas/modules/routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);