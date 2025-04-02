import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
//TODO fazer depois esses métodos para importar de forma certa
import { CotasModule } from './cotas/cotas.module';
import { AdministradorasModule } from './administradoras/administradoras.module';
import { GruposModule } from './grupos/grupos.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      introspection: true,
      context: ({ req }) => ({ req }),
    }),
    AuthModule,
    CotasModule,
    AdministradorasModule,
    GruposModule,
    ClientesModule,
  ],
})
export class AppModule {}
