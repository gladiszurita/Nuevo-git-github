import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('db_tareas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  })

  //creacion de funcion y prueba de conexion
  export const startDb = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({force: true});
        await sequelize.sync();
        console.log('Conexion establecida con exito.');
    } catch (error) {
        console.error('Imposible conectarse a la base de datos:', error);
    }
  }