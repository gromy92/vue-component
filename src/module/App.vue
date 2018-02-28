<template>
  <div id="app">
    <transition>
      <router-view class="view">12433214</router-view>
    </transition>
  </div>
</template>


<script>
  export default {
    data() {
      return {}
    },
    beforeCreate(){
      
    },
    created() {
     this.loadBridge(()=> {

      });
    },
    methods: {
        
      },
    },
  }
</script>

