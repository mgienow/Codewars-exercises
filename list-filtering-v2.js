function filter_list(l) {
  var newList = [];
  for (var i=0; i<l.length; i++){
    if(typeof(l[i]) === 'number'){
      newList.push(l[i]);
    }
  }
  return newList;
}
