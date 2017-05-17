'use strict';

module.exports = (sequelize, DataTypes) => {
  let Attachments;
  let schema;
  let association;

  ///////// Schema
  schema = {
    attachmentDescription: {
      type: DataTypes.STRING
    },
    urls: {
      type: DataTypes.TEXT
    }
  };

  ///////// Association - m:1
  association = {
    classMethods: {
      associate: models => {
        Attachments.belongsTo(models.Projects, {foreignKey: {allowNull: false}});
      }
    }
  };

  Attachments = sequelize.define("Attachments",schema, association);
  return Attachments;
};