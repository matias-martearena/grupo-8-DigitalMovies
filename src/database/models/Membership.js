module.exports = (sequelize, dataTypes) => {
   const Membership = sequelize.define(
      'Membership',
      {
         id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
         description: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         price: {
            type: dataTypes.DECIMAL,
            allowNull: false,
         },
         tier: {
            type: dataTypes.INTEGER,
            allowNull: false,
         },
         discount_one: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         discount_two: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         discount_three: {
            type: dataTypes.STRING,
            allowNull: false,
         },
      },
      {
         tableName: 'membership',
         timestamp: false,
         createdAt: false,
         updatedAt: false,
      }
   )
   return Membership
}
