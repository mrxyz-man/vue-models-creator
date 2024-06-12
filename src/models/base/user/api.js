import ModelAPICreator from '../../../../lib/utils/modelApiCreator';

const args = [];

const methods = {
  login: {
    method: 'post',
    extendUrl: (url) => `${url}/users/login/`,
  },
};

export default (model, axios) => new ModelAPICreator(
  model,
  axios,
  args,
  methods,
);
