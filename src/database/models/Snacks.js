module.exports = (sequelize, dataTypes) => {
   const Snack = sequelize.define(
      'Snack',
      {
         id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
         image: {
            type: dataTypes.STRING,
            allowNull: true,
         },
         description: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         price: {
            type: dataTypes.DECIMAL,
            allowNull: false,
         },
      },
      {
         tableName: 'snack',
         timestamp: false,
         createdAt: false,
         updatedAt: false,
      }
   )
   return Snack
}
