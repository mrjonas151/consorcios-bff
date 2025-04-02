import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'starcatcher_secret',
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  providers: [AuthService, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
