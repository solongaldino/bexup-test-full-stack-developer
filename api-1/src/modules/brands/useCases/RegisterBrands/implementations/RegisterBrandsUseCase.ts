import { FipeHttpClientInterface } from '@shared/httpClients/interfaces';
import { ApiError, EnvVariables } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  IRegisterBrandsUseCase,
  IRegisterBrandsUseCaseDTO,
  IRegisterBrandsUseCaseResponseDTO,
} from '../interfaces';
import { v2beta3 } from '@google-cloud/tasks';

@injectable()
export default class RegisterBrandsUseCase implements IRegisterBrandsUseCase {
  constructor(
    @inject('FipeHttpClient')
    private fipeHttpClient: FipeHttpClientInterface,
  ) {}

  async run({}: IRegisterBrandsUseCaseDTO): Promise<IRegisterBrandsUseCaseResponseDTO> {
    const lista = await this.fipeHttpClient.getList();

    if (!lista) throw new ApiError(404, 'List not found');

    const config = {
      project: EnvVariables.get_GCP_PROJECT_ID(),
      location: EnvVariables.get_GCP_LOCATION(),
      queue: EnvVariables.get_GCP_QUEUE_NAME(),
      url: EnvVariables.get_GCP_FUNCTION_URL(),
      email: EnvVariables.get_GCP_EMAIL(),
    };

    const client = new v2beta3.CloudTasksClient();

    const parent = client.queuePath(config.project, config.location, config.queue);

    for (const item of lista) {
      const convertedPayload = JSON.stringify(item);
      const body = Buffer.from(convertedPayload).toString('base64');

      client.createTask({
        parent,
        task: {
          httpRequest: {
            httpMethod: 'POST',
            url: config.url,
            oidcToken: {
              serviceAccountEmail: config.email,
              audience: new URL(config.url).origin,
            },
            headers: {
              'Content-Type': 'application/json',
            },
            body,
          },
        },
      });
    }
  }
}
