<template>
  <div class="home">
    <HelloWorld :msg="'Welcome, ' + myName"/>
    <button @click="openPage">Generate a name</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['name']),
    myName () {
      return this.name
    }
  },
  methods: {
    ...mapActions(['updateName']),
    openPage () {
      this.updateName()
    }
  },
  created () {
    this.updateName()
  }
}
</script>
