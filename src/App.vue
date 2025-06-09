<template lang="pug">
  div
    p {{ $auth.loggedIn ? 'Авторизован' : 'Не авторизован' }}
    button(@click="login") login
    button(@click="test") test
</template>

<script>
import Role from './models/base/role';
import User from './models/base/user';
import Faculty from './models/test/faculty';

export default {
  data() {
    return {
      User,
      Role,
    };
  },
  methods: {
    login() {
      const payload = {
        data: {
          phone: '',
          password: '',
          code: '',
        },
        params: { test: 132 },
      };
      Faculty.api.create(payload);
      this.$auth.login(payload);
    },
    async test() {
      const resp = await Faculty.api.list({});
      console.log(resp);
    },
  },
};
</script>
