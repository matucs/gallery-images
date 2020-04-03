import environment from './base';


const baseApi = '';
const env = environment(baseApi);

const productionEnv = {
  ...env,
};

export default productionEnv;
