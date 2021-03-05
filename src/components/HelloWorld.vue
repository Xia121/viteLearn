<template>
  <div :class="$style.big">
    132132
  </div>
  <h1>{{ msg }}</h1>
  <el-button type="primary"  @click="addGroup(1)">主要按钮</el-button>
  <p>{{ State.groups.join(',') }}</p>
</template>

<script>
import {mapGetters, mapActions, mapState, mapMutations} from 'vuex'

export default {
    'name': 'HelloWorld',
    'props': {
        'msg': String
    },
    data() {
        return {
            'count': 0
        }
    },
    'computed': {
        ...mapState({'State': state => state}),
        ...mapGetters([])
    },
    created () {
        this.serverTest()
    },
    'methods': {
        ...mapActions([]),
        ...mapMutations(['addGroup']),
        'serverTest' : function() {
            //     console.log(this.$props)
            this.$services
                .qryPageConfig({
                    'method': 'get', // 默认
                    'params': {
                        'page': 'login'
                    }
                }).then((res)=>{
                    console.log(res)
                })
        }
    }
}
</script>

<style lang="scss" module>
  .big {
    font-size: 22px;
    width: 100%;
    height: 300px;
    color: red;
  }
</style>
