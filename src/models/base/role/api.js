import ModelAPICreator from '../../../../lib/utils/modelApiCreator';

const args = [];

const methods = {
  get: true,
};

export default (model, axios) => new ModelAPICreator(
  model,
  axios,
  args,
  methods,
);
