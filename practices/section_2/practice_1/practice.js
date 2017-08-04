function find(collection , ch){
    for(let item of collection){
        if(item.key === ch){
            return item;
        }
    }
    return null;
}
function count_same_elements(collection) {
  //在这里写入代码
  let result = [];//{key:'a' , count:3}
  for(let item of collection){
     let obj = find(result , item);
     if(obj){
         obj.count ++;
     }else{
         result.push({key: item , count : 1});
     }
  }
  return result;
}

module.exports = count_same_elements;
