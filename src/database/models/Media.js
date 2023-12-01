module.exports = (sequelize, dataTypes) => {
   const Media = sequelize.define(
      'Media',
      {
         id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
         genre: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         image: {
            type: dataTypes.STRING,
         },
         link: {
            type: dataTypes.STRING,
         },
         rating: {
            type: dataTypes.INTEGER,
            allowNull: false,
         },
         synopsis: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         title: {
            type: dataTypes.STRING,
            allowNull: false,
         },
         price: {
            type: dataTypes.DECIMAL,
            allowNull: false,
         },
         category: {
            type: dataTypes.STRING,
         },
      },
      {
         tableName: 'media',
         timestamp: false,
         createdAt: false,
         updatedAt: false,
      }
   )

   //Media.associate = function(models){
   //    Cart.belongsTo(models.Carts, {
   //        as: "carts",
   //        foreignkEY: "product_id"
   //    })
   //}
   return Media
}
