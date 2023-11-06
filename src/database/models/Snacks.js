module.exports = (sequelize, dataTypes) => {

    const Snack = sequelize.define(
        "Snack", 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            image: {
                type: dataTypes.STRING,
            },
            description: {
                type: dataTypes.STRING,
            },
            price: {
                type: dataTypes.DECIMAL,
            },
        },
        {
            tableName: "snack",
            timestamp: false,
            createdAt: false,
            updatedAt: false,
        }
    )
    return Snack;
}