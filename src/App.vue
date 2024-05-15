<template lang="pug">
  div Hello
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
  created() {
    console.log(new Role());
    console.log(new User());
  },
};
</script>
