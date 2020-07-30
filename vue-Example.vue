// This shows examples related with Vue.js.

<script>
export default {
  methods: {
    update() {}
  },
  mounted() {
    window.addEventListener('hashchange', this.update, false);
  },
  beforeDestroy() {
    window.removeEventListener('hashChange', this.update, false);
  }
}
</script>

<template>
  <div :class="fooClass" :v-if="isFoo">
    <div v-if="shouldHi">Hi</div>
    <div v-else="shouldBye">Bye</div>
    <ul>
      <li v-if="users" v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <comp v-for="item in items">
      {{ item.name }}
    </comp>
    <template v-show="flag">
      Only show me if flag is true!
    </template>
  </div>
</template>
