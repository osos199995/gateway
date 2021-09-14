module.exports = {
  type: 'mongodb',
  seeds: ['src/database/seeders/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
  useUnifiedTopology: true,
  database: process.env.MONG_DATANASE_NAME,
  entities: ['src/models/**/entities/*{.ts,.js}'],
  logging: true,
};
