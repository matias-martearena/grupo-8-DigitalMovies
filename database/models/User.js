module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define(
        "Users", 
        {
            id: {
                type: dataTypes.INTERGER,
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
        },
        {
            tableName: "users",
            timestamp: false,
        }
    )
    return User;
}