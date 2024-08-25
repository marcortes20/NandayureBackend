// import { Module } from '@nestjs/common';

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [MysqlConfigModule],
//       useFactory: async (mysqlConfigService: MysqlConfigService) => ({
//         type: 'mysql' as DatabaseType,
//         host: mysqlConfigService.host,
//         port: mysqlConfigService.port,
//         username: mysqlConfigService.username,
//         password: mysqlConfigService.password,
//         database: mysqlConfigService.database,
//         entities: [Language],
//         synchronize: true,
//       }),
//       inject: [MysqlConfigService],
//     } as TypeOrmModuleAsyncOptions),
//   ],
// })
// export class MysqlDatabaseProviderModule {}
