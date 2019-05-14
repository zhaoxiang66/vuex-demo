export default{
    //数组去重复
    duplicate(arr,type){
        var newArr = [];
        var tArr = [];
        if(arr.length == 0){
            return arr;
        }else{
            if(type){
                for(var i = 0; i < arr.length;i++){
                    if(!tArr[arr[i][type]]){
                        newArr.push(arr[i]);
                        tArr[arr[i][type]] = true;
                    }
                }
                return newArr;
            }else{
                for(var i = 0; i < arr.length;i++){
                    if(!tArr[arr[i]]){
                        newArr.push(arr[i]);
                        tArr[arr[i]] = true;
                    }
                }
                return newArr;
            }
        }
    }
}