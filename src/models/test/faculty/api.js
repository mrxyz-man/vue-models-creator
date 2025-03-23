import ModelAPICreator from '../../../../lib/utils/modelApiCreator';

const args = [];

const methods = {
  list: {
    method: 'get',
    extendUrl: (url) => `${url}/faculties/all`,
  },
};

export default (model, axios) => new ModelAPICreator(
  model,
  axios,
  args,
  methods,
);
