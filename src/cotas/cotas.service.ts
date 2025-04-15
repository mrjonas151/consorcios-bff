import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CotaInput } from './dto/cota.input';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CotasService {
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiUrl =
      configService.get<string>('API_URL') || 'http://localhost:5000/api';
  }

  async findAll(token: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`${this.apiUrl}/cotas`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      );
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: string, token: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`${this.apiUrl}/cotas/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      );
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async create(createCotaInput: CotaInput, token: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`${this.apiUrl}/cotas`, createCotaInput, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      );
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: string, updateCotaInput: CotaInput, token: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(`${this.apiUrl}/cotas/${id}`, updateCotaInput, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      );
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: string, token: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.delete(`${this.apiUrl}/cotas/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      );
      return { success: true, message: 'Cota removida com sucesso' };
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any) {
    if (error.response) {
      throw new HttpException(
        error.response.data.message || 'Erro ao processar solicitação',
        error.response.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    throw new HttpException(
      'Erro ao conectar ao serviço de cotas',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
