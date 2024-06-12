export default class Model {
  static entity = null;

  static apiStorage = null;

  constructor(item) {
    this.$fill(item || {});
  }

  $self() {
    return this.constructor;
  }

  $fill(item) {
    const fields = this.$self().getFields();

    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      const value = item[key];

      this[key] = field.make(value, this, item, key);
    });
  }

  static attr(defaultValue) {
    return {
      value: defaultValue,

      make(newValue, ctx, item, key) {
        if (typeof this.value === 'function') {
          try {
            this.value = this.value(ctx, item, key);
          } catch (e) {
            this.value = undefined;
          }
          return this.value;
        }

        if (newValue) this.value = newValue;
        return this.value;
      },
    };
  }

  static fields() {
    return {};
  }

  static getFields() {
    return this.fields();
  }

  static registerApi(module, { axios }) {
    if (!this.apiStorage) this.apiStorage = module(this, axios);
    return this.apiStorage;
  }

  static registerStore(module, { store }) {
    if (!store.hasModule(this.entity)) {
      store.registerModule(this.entity, module);
    }

    return {
      state: store.state[this.entity],
      getters: {
        ...Object.keys(module.getters).reduce((acc, key) => {
          const path = `${this.entity}/${key}`;
          const value = store.getters[path];

          if (typeof value === 'function') {
            return { ...acc, [key]: (...args) => value(...args) };
          }

          return { ...acc, [key]: value };
        }, {}),
      },

      ...Object.keys(module.mutations).reduce((acc, key) => ({
        ...acc, [key]: (val) => store.dispatch(`${this.entity}/${key}`, val),
      }), {}),
    };
  }
}
