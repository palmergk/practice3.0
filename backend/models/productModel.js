module.exports = (sequelize, DataTypes) => {
    return sequelize.define('product', {
        price: { type: DataTypes.INTEGER },
        size: { type: DataTypes.STRING },
    })
}