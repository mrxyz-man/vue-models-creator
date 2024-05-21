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
    const role = new Role();
    console.log(role);
    console.log(new User());
    console.log(role.count);
    console.log(role.countSum(10));
  },
};
</script>
