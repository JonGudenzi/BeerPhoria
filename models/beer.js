

module.exports = function (sequelize, DataTypes){

var beer = sequelize.define("beer", {
   brewery_name: {
       type: DataTypes.STRING,
       allowNull: true,
       validate: {
           len: [1]
       }
   },
   beer_name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    beer_style: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    alcohol_content: {
        type: DataTypes.DECIMAL(10,2),
        //type: DataTypes.RANGE(DataTypes.DECIMAL) numeric range//
        allowNull: true,
    },
    malt_type: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    hop_type: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    beer_taste: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    beer_pairing: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    beer_price: {
        type: DataTypes.DECIMAL(10,2),
        //type: DataTypes.RANGE(DataTypes.DECIMAL) numeric range//
        allowNull: true,
        
    },
    ordered: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
},{timestamps: false});
return beer;
}