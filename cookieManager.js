var getCookie = function(docCookie, name){
  console.log(docCookie, name);
  var n = docCookie.search(name);
  if (n===-1) return "";
  var first = n+name.length;
  var last = first;
  while ((last<docCookie.length)&&(docCookie[last+1]!=';')){
    last++;
  };
  return docCookie.substring(first,last);
};


//cookie is sent with request to the server; localStorage is for client side javascript only.
//this is getCookie function for Javascript in the client side.