import { adapters } from './adapters';
import { configure } from './application/configure';

const init = () => {
  configure(adapters);
};

export { init };
