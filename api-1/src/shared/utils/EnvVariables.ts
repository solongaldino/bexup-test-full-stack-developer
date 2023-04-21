import { env } from 'process';

class EnvVariables {
  allEnvVariablesExist() {
    this.get_SERVER_PORT();
  }

  get_SERVER_PORT() {
    const envVariable = env.SERVER_PORT;
    if (!envVariable) throw new Error('Env variable SERVER_PORT not found.');
    return envVariable;
  }
}

export default new EnvVariables();
