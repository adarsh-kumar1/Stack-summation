const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "email"
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profileimage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
