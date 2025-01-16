module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        username: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING},
        // age: {type: DataTypes.INTEGER}
    })
}