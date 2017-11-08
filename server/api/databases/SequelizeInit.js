const ENV = process.env.NODE_ENV
const Sequelize= require('sequelize')

var sequelize;
if (ENV === 'development'){
     sequelize = new Sequelize(
         'd3nmo40m87dio0',
         'fpznmhcxgspmsl',
         '12ffbd9be7556656012fc8a58d54c6d332efe252f489cee8e75f2a3af5de959b',
         {
             dialect:  'postgres',
             protocol: 'postgres',
             port: 5432,
             host: 'ec2-50-17-201-204.compute-1.amazonaws.com',

             dialectOptions: {
                 ssl: true
             },

             pool: {
                 max: 20,
                 min: 0,
                 idle: 5000
             }
         });
 }
 else{
    sequelize = new Sequelize(
        'db9jjg71dcvcvf',
        'gvvxmhbwyglftp',
        '657db41b648b2e42852d950280d1d553cf3156041a3b82a1a0a9859e0486d9f7',
        {
            dialect:  'postgres',
            protocol: 'postgres',
            port: 5432,
            host: 'ec2-50-17-201-204.compute-1.amazonaws.com',

            dialectOptions: {
                ssl: true
            },

            pool: {
                max: 20,
                min: 0,
                idle: 5000
            }
        });
}

module.exports = sequelize;