module.exports = (sequelize, dataTypes) => {

    const Snack = sequelize.define(
        "Snacks", 
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
            tableName: "snacks",
            timestamp: false,
        }
    )
    return Snack;
}