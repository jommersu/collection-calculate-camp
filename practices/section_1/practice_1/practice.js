/*function includes(collection , ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}*/

function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
/*  let result = [];
  for(let item of collection_a){
      if(includes(collection_b, item)){
          result.push(item);
      }
  }*/
  let result = collection_a.filter( ele =>{
    return collection_b.find( item => item === ele);
  });
  return result;
}

module.exports = collect_same_elements;
