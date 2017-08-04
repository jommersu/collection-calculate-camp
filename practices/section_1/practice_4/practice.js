function includes(collection , ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = [];
  for(let item of collection_a){
      if(includes(object_b.value , item.key)){
          result.push(item.key);
      }
  }
  return result;
}

module.exports = collect_same_elements;
