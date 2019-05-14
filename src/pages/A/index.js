// 在单独构建的版本中辅助函数为 Vuex.mapState
import {mapGetters,mapActions} from 'vuex'
export default{
    data(){
        return{
            msg:"这是A页面"
        }
    },
    computed:{
        ...mapGetters([
            'myState'
        ])
    },
    methods:{
        ...mapActions([
            'toggleState', // 将 `this.toggleState()` 映射为 `this.$store.dispatch('toggleState')`
        ]),
        changeState(){
            this.toggleState();
        }
    },
    mounted(){
       
    }
}