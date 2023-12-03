module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //   Users.associate = (models) => {
  //     Users.hasMany(models.posts, {
  //       onDelete: "cascade",
  //     });
  //   };

  return Users;
};
