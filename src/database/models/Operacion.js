module.exports = (sequelize, dataTypes) => {
    let alias = 'Operacion';
    let cols = {
        id: {
            type: dataTypes.INTEGER(5),
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        concepto: {
            type: dataTypes.STRING(20),
            allowNull: true
        },
        monto: {
            type: dataTypes.DOUBLE(8,3),
            allowNull: true
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: true,
            defaultValue: dataTypes.NOW
        },
        tipo: {
            type: dataTypes.STRING(10),
            allowNull: true
        }
    };
    let config = {
        tableName: "operacion",
        timestamps: false
    }

    const Operacion = sequelize.define(alias, cols, config); 


    return Operacion;
};