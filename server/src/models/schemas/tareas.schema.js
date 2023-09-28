import { body } from "express-validator";

export const createTaskSchema = [
    body("title")
       .isString().withMessage("Debe ser un string")
       .notEmpty().withMessage("No debe estar vacio"),
    body("description")
       .isString().withMessage("Debe ser un string")
       .notEmpty().withMessage("No debe estar vacio"),
    body("poster")
       .isURL().withMessage("Debe ser un enlace valido")
       .notEmpty().withMessage("No debe estar vacio"),
    ]

export const editTaskSchema = [
    body("title")
       .optional()
       .isString().withMessage("Debe ser un string")
       .notEmpty().withMessage("No debe estar vacio"),
    body("description")
       .optional()
       .isString().withMessage("Debe ser un string")
       .notEmpty().withMessage("No debe estar vacio"),
    body("poster")
       .optional()
       .isURL().withMessage("Debe ser un enlace valido")
       .notEmpty().withMessage("No debe estar vacio"),
    ]