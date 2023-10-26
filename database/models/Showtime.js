module.exports = (sequelize, dataTypes) => {

    const Showtime = sequelize.define(
        "Showtimes", 
        {
            id: {
                type: dataTypes.INTERGER,
                primaryKey: true,
                autoIncrement: true,
            },
            price: {
                type: dataTypes.DECIMAL,
                allowNull: false,
            },
            room: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            genre: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: dataTypes.STRING,
                allowNull: true,
            },
            synopsis: {
                type: dataTypes.STRING,
                allowNull: true,
            },
            title: {
                type: dataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "showtimes",
            timestamp: false,
        }
    )
    return Showtime;
}