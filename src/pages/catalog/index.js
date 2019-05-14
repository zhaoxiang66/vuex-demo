export default{
    data(){
        return{
            msg:"这是外面的盒子",
            activeId:"A"
        }
    },
    methods:{
        clickSpan(type){
            this.activeId = type;
            this.$router.push({name:type});
        }
    }
}