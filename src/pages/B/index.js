// 在单独构建的版本中辅助函数为 Vuex.mapState
import {mapGetters} from 'vuex'
export default{
    data(){
        return{
            msg:"这是B页面"
        }
    },
    computed:{
        ...mapGetters([
            'myState'
        ])
    },
    methods:{
        
    },
    mounted(){
       
    }
}