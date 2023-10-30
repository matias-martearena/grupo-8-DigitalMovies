module.exports = (sequelize, dataTypes) => {

    const Membership = sequelize.define(
        "Memberships", 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            description: {
                type: dataTypes.STRING,
            },
            price: {
                type: dataTypes.DECIMAL,
            },
            tier: {
                type: dataTypes.INTEGER,
            },
            discount_one: {
                type: dataTypes.STRING,
            },
            discount_two: {
                type: dataTypes.STRING,
            },
            discount_three: {
                type: dataTypes.STRING,
            }
        },
        {
            tableName: "memberships",
            timestamp: false,
        }
    )
    return Membership;
}