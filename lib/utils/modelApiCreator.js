const METHOD_TYPES = {
  list: 'list',
  get: 'get',
  create: 'create',
  update: 'update',
  delete: 'delete',
};

const METHOD_DATA = {
  [METHOD_TYPES.list]: {
    method: 'get',
    extendUrl: (url) => `${url}`,
  },
  [METHOD_TYPES.get]: {
    method: 'get',
    extendUrl: (url, id) => `${url}/${id}`,
  },
  [METHOD_TYPES.create]: {
    method: 'post',
    extendUrl: (url) => `${url}`,
  },
  [METHOD_TYPES.update]: {
    method: 'post',
    extendUrl: (url, id) => `${url}/${id}`,
  },
  [METHOD_TYPES.delete]: {
    method: 'delete',
    extendUrl: (url, id) => `${url}/${id}`,
  },
};

const ABBREVIATION_METHODS = {
  crudl: { ...METHOD_DATA },
  crud: {
    ...Object.fromEntries(
      Object.entries(METHOD_DATA)
        .filter(([methodName]) => methodName !== METHOD_TYPES.list),
    ),
  },
};

export const getNormalizedMethods = (name, value) => ABBREVIATION_METHODS[name]
  || (
    METHOD_TYPES[name]
    && { [name]: METHOD_DATA[METHOD_TYPES[name]] }
    && typeof value === 'boolean'
    && value
  )
  || { [name]: value };

const createRequest = ({ method, extendUrl = (data) => data }, params, axios, args, model) => {
  let axiosUrl = `${args.join('/')}`;

  const Model = model;
  const extendArgs = params?.args || [];

  axiosUrl = extendUrl(axiosUrl, ...extendArgs);

  return new Promise((resolve, reject) => {
    axios[method](axiosUrl, { ...params })
      .then((response) => {
        const { data } = response;

        if (Array.isArray(data)) {
          resolve({
            data,
            response,
            items: data.map((i) => new Model(i)),
          });
        }

        resolve({
          data,
          response,
          item: new Model(data),
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
};

class ModelAPICreator {
  constructor(model, axios, args, methods) {
    Object.entries(methods).forEach(([name, value]) => {
      const normalizedMethods = getNormalizedMethods(name, value);
      Object.entries(normalizedMethods).forEach(([crudMethodName, crudMethod]) => {
        this[crudMethodName] = (params) => createRequest(crudMethod, params, axios, args, model);
      });
    });
  }
}

export default ModelAPICreator;
