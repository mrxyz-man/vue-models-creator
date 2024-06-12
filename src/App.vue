<template lang="pug">
  div
    p {{ $auth.loggedIn ? 'Авторизован' : 'Не авторизован' }}
    button(@click="login") login
</template>

<script>
import Role from './models/base/role';
import User from './models/base/user';

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
  },
};
</script>
