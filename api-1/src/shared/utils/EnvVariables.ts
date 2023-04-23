import { env } from 'process';

class EnvVariables {
  allEnvVariablesExist() {
    this.get_SERVER_PORT();
    this.get_GCP_PROJECT_ID();
    this.get_GCP_LOCATION();
    this.get_GCP_QUEUE_NAME();
    this.get_GCP_FUNCTION_URL();
    this.get_GCP_EMAIL();
  }

  get_SERVER_PORT() {
    const envVariable = env.SERVER_PORT;
    if (!envVariable) throw new Error('Env variable SERVER_PORT not found.');
    return envVariable;
  }

  get_GCP_PROJECT_ID() {
    const envVariable = env.GCP_PROJECT_ID;
    if (!envVariable) throw new Error('Env variable GCP_PROJECT_ID not found.');
    return envVariable;
  }

  get_GCP_LOCATION() {
    const envVariable = env.GCP_LOCATION;
    if (!envVariable) throw new Error('Env variable GCP_LOCATION not found.');
    return envVariable;
  }

  get_GCP_QUEUE_NAME() {
    const envVariable = env.GCP_QUEUE_NAME;
    if (!envVariable) throw new Error('Env variable GCP_QUEUE_NAME not found.');
    return envVariable;
  }

  get_GCP_FUNCTION_URL() {
    const envVariable = env.GCP_FUNCTION_URL;
    if (!envVariable) throw new Error('Env variable GCP_FUNCTION_URL not found.');
    return envVariable;
  }

  get_GCP_EMAIL() {
    const envVariable = env.GCP_EMAIL;
    if (!envVariable) throw new Error('Env variable GCP_EMAIL not found.');
    return envVariable;
  }
}

export default new EnvVariables();
