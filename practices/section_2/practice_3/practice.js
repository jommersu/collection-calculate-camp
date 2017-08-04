function find(collection ,ch){
    for(let item of collection){
        if(item.name === ch){
            return item;
        }
    }  
    return null;
}
function sum(collection){
    let result = [];
    for(let item of collection){
        let obj = find(result , item);
        if(obj){
            obj.summary ++;
        }else{
            result.push({name: item , summary :1});
        }
    }
    return result;
}
function push(result , key ,count){
    for( let i = 0; i < count; i++){
        result.push(key);
    }
}
function split(item){
    let obj = {};
    if(item.search("-") === 1){
        let arr = item.split("-");
        return obj = {key : arr[0] , count : parseInt(arr[1])};
    }else if(item.search(":")  === 1 ){
        let arr = item.split(":");
        return obj = {key : arr[0] , count : parseInt(arr[1])};
    }else{
        let arr = item.split("[");
        return obj = {key : arr[0], count: parseInt(arr[arr.length - 1])};
    }
    
}
function expand(collection){
    let result = [];
    for(let item of collection){
        if(item.length === 1){
            result.push(item);
        }else{
            let {key , count } = split(item);
            push(result , key , count);
        }
    }
    return result;
}
function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  let expandedCol = expand(collection);
  result = sum(expandedCol);
  //console.log(result);
  
  return result;
}

module.exports = count_same_elements;
