module.exports = (sequelize, dataTypes) => {

    const Cart = sequelize.define(
        "Carts", 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: dataTypes.INTEGER,
            },
            product_id: {
                type: dataTypes.INTEGER,
            },
            price: {
                type: dataTypes.DECIMAL,
            },
            ammount: {
                type: dataTypes.INTEGER,
            },
            
        },
        {
            tableName: "carts",
            timestamp: false,
        }
    )

    //Cart.associate = function(models){
     //   Cart.hasMany(models.Medias, {
     //       as: "medias",
     //       foreignkEY: "product_id"
     //   })
    //}
    return Cart;
}