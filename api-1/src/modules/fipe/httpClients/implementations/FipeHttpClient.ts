import axios, { AxiosResponse } from 'axios';
import { FipeHttpClientInterface } from '../interfaces';
import { Brand } from '@shared/repositories/prisma';
import { injectable } from 'tsyringe';

@injectable()
export default class FipeHttpClient implements FipeHttpClientInterface {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://parallelum.com.br/fipe/api/v1';
  }

  public async getList(): Promise<Brand[]> {
    const response: AxiosResponse<Brand[]> = await axios.get(`${this.apiUrl}/carros/marcas`);
    return response.data;
  }
}
