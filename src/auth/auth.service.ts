import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly apiUrl: string;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.apiUrl =
      configService.get<string>('API_URL') || 'http://localhost:5000/api';
  }

  async login(username: string, password: string) {
    try {
      //Preciso deixar minha API do .NET ligada
      const response = await axios.post(`${this.apiUrl}/auth/login`, {
        username,
        password,
      });

      const { token, user } = response.data;

      if (!token) {
        throw new UnauthorizedException('Credenciais inválidas');
      }

      return {
        access_token: token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      };
    } catch (error) {
      if (error.response) {
        throw new HttpException(
          error.response.data.message || 'Erro na autenticação',
          error.response.status,
        );
      }
      throw new HttpException(
        'Erro ao conectar ao serviço de autenticação',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      return payload;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
