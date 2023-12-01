module.exports = (sequelize, dataTypes) => {
   const User = sequelize.define(
      'User',
      {
         id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
         first_name: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         last_name: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         email: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         image: {
            type: dataTypes.STRING,
            allowNull: true,
         },
         password: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         profile: {
            type: dataTypes.STRING,
            allowNull: true,
         },
      },
      {
         tableName: 'user',
         timestamp: false,
         createdAt: false,
         updatedAt: false,
      }
   )
   return User
}
