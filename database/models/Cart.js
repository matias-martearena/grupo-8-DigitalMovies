module.exports = (sequelize, dataTypes) => {

    const Cart = sequelize.define(
        "Carts", 
        {
            id: {
                type: dataTypes.INTERGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: dataTypes.INTERGER,
            },
            product_id: {
                type: dataTypes.INTERGER,
            },
            price: {
                type: dataTypes.DECIMAL,
            },
            ammount: {
                type: dataTypes.INTERGER,
            },
            
        },
        {
            tableName: "carts",
            timestamp: false,
        }
    )
    return Cart;
}