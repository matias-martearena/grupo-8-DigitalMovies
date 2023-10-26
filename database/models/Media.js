module.exports = (sequelize, dataTypes) => {

    const Media = sequelize.define(
        "Medias", 
        {
            id: {
                type: dataTypes.INTERGER,
                primaryKey: true,
                autoIncrement: true,
            },
            genre: {
                type: dataTypes.STRING,
            },
            image: {
                type: dataTypes.STRING,
            },
            link: {
                type: dataTypes.STRING,
            },
            rating: {
                type: dataTypes.INTERGER,
            },
            synopsis: {
                type: dataTypes.STRING,
            },
            title: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: dataTypes.DECIMAL,
            }
        },
        {
            tableName: "medias",
            timestamp: false,
        }
    )
    return Media;
}