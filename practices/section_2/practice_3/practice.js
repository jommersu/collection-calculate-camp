/*function find(collection ,ch){
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
}*/
function count_same_elements(collection) {
  //在这里写入代码
/*  let result = [];
  let expandedCol = expand(collection);
  result = sum(expandedCol);
  //console.log(result);*/
  let result = [];
  collection.forEach(ele => {
    if(ele.includes("[")){
      let arr = ele.split("[");
      result.push({name : arr[0], summary:parseInt(arr[arr.length - 1])});
    }else if(ele.includes("-")){
      let arr = ele.split("-");
      result.push({name : arr[0], summary:parseInt(arr[1])});
    }else if(ele.includes(":")){
      let arr = ele.split(":");
      result.push({name: arr[0], summary:parseInt(arr[1])});
    }else if(!result.find( element => element.name === ele)){
      result.push({name: ele , summary: collection.filter(item => item === ele).length});
    }
  });
  let result2 = [];
  console.log(result);
  result.forEach(ele => {
    if (!result2.find(element => element.name === ele.name)) {
      result2.push(ele);
    } else {
      let obj = result2.filter(item => item.name === ele.name);
      let index = result2.indexOf(obj[0]);
      result2[index].summary += ele.summary;
    }
  });
  return result2;
}

module.exports = count_same_elements;
