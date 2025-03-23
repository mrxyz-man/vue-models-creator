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
      const data = {
        phone: '',
        password: '',
        code: '',
      };
      this.$auth.login(data);
    },
    async test() {
      const resp = await Faculty.api.list();
      console.log(resp);
    },
  },
};
</script>
