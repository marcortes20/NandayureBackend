import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
//import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Role } from './roles/entities/role.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

//import { MailClientModule } from './mail-client/mail-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa ConfigModule aquí
      inject: [ConfigService], // Inyecta ConfigService
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
    UsersModule,
  ],

  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3306,
  //     username: 'root',
  //     password: '1234',
  //     database: 'db_nanda',
  //     //entities: [User, Role],
  //     synchronize: true,
  //     autoLoadEntities: true,
  //   }),
  //   AuthModule,
  //   UsersModule,
  //   MailClientModule,
  //   ConfigModule.forRoot({
  //     envFilePath: '.env',
  //     isGlobal: true,
  //     expandVariables: true,
  //   }),
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
