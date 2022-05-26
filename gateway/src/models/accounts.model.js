const AccountsModel = (sequelize, { DataTypes }) => {
  const Accounts = sequelize.define("accounts", {
    uid: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    state: {
      type: DataTypes.ENUM("A", "I", "D"),
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM("RQ", "VL", "APP"),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    },
    phone: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    },
    keys: {
      type: DataTypes.BLOB,
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    },
    verified: {
      type: DataTypes.ENUM("TRUE", "FALSE"),
      defaultValue: "FALSE"
    },
    personal_info: {
      type: DataTypes.BLOB,
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    },
    subject_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    linked_account_uid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    }
  },
  {
    freezeTableName: true,
    //timestamps: true,
    underscored: true
  });




  /*
  Accounts.associate = (models) => {

  };
*/
  return Accounts;
};

module.exports = AccountsModel;