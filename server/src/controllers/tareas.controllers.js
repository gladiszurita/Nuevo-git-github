import { TaskModel } from "../models/tareas.js"
import { editTaskSchema } from "../models/schemas/tareas.schema.js";


//controlador para obtener las tareas
export const ctrlGetTasks = async (req, res) => {
    try {
        const tareas = await TaskModel.findAll(); //metodo que sirve para traer todos los datos
        if (!tareas) return res.status(404)
        return res.status(200).json(tareas)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para crear una tareas
export const ctrlCreateTask = async (req, res) => {
    try {
        const newTask = await TaskModel.create(req.body)
        return res.status(201).json(newTask)        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para modificar una tareas
export const ctrlUpdateTask = async (req, res) => {
    const { id } = req.params
    try {
        const task = await TaskModel.findByPk(id)

        if(!task) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }
        task.update(req.body)
        return res.status(200).json
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }

}

//controlador para eliminar una tareas
export const ctrlDeleteTask = async (req, res) => {
    const { id } = req.params
    try {
        const taskDeleted = await TaskModel.destroy({
            where: {
                id: id
            }
        })
        if (!taskDeleted) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }
        return res.status(200).json({
            message: 'Tarea eliminada'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }

}