import { container } from 'tsyringe';

import * as resource from '../httpClients/implementations';

for (const [key, value] of Object.entries(resource)) {
  console.log(key);
  container.registerSingleton<unknown>(key, value);
}
