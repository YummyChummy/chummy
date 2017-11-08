
module.exports = {
  development: {
      username: "fpznmhcxgspmsl",
      password: "12ffbd9be7556656012fc8a58d54c6d332efe252f489cee8e75f2a3af5de959b",
      database: "d3nmo40m87dio0",
      host: "ec2-50-17-201-204.compute-1.amazonaws.com",
      dialect: "postgres",
      port: 5432,
      ssl: true,
      dialectOptions: {
          ssl: true
      }
  },
  production: {
      username: "gvvxmhbwyglftp",
      password: "657db41b648b2e42852d950280d1d553cf3156041a3b82a1a0a9859e0486d9f7",
      database: "db9jjg71dcvcvf",
      host: "ec2-54-243-42-218.compute-1.amazonaws.com",
      dialect: "postgres",
      port: 5432,
      ssl: true,
      dialectOptions: {
        ssl: true
      }
  }
}
