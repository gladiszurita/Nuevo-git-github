import { Router } from "express";
import { ctrlCreateTask, ctrlDeleteTask, ctrlGetTasks, ctrlUpdateTask } from "../controllers/tareas.controllers.js";
import { createTaskSchema, editTaskSchema } from "../models/schemas/tareas.schema.js";
import { validator } from "../middlewares/validator.js";


const tareasRouter = Router();      //creacion de constante

//endpoint para traer todas las tareas
tareasRouter.get('/api/tasks', ctrlGetTasks)

//endpoint para crear una tarea
tareasRouter.post('/api/tasks', createTaskSchema, validator, ctrlCreateTask)

//endpoint para modificar una tarea
tareasRouter.put('/api/tasks/:id', editTaskSchema, validator,  ctrlUpdateTask)

//endpoint para eliminar una tarea
tareasRouter.delete('/api/tasks/:id', ctrlDeleteTask)

export { tareasRouter }