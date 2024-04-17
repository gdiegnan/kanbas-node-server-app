import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const { courseId } = req.params;
        const module = await dao.createModule(courseId, req.body);
        res.json(module);
    };
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };
    const findModulesForCourse = async (req, res) => {
        const { courseId } = req.params;
        const modules = await dao.findModulesForCourse(courseId);
        res.json(modules);
    };
    const findModuleById = async (req, res) => {
        const module = await dao.findModuleById(req.params.moduleId);
        res.json(module);
    };
    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };
    app.post("/api/courses/:courseId/modules", createModule);
    app.get("/api/courses/:courseId/modules", findModulesForCourse);
    app.get("/api/modules/:moduleId", findModuleById);
    app.put("/api/modules/:moduleId", updateModule);
    app.delete("/api/modules/:moduleId", deleteModule);
}
