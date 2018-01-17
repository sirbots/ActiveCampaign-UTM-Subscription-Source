


  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
        if(pair[0] == variable) {
          return pair[1];
        }
    }
    
    return(false);
    console.log(pair);
  }


/*
function setCookie(UTMstring) {


  var expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  expirationString = expirationDate.toUTCString;


  


    
    
    document.cookie =   "UTMparams=[UTM-STUFF];expires=" + expirationString + ";path=/;"
    
*/


  //  When you are creating a cookie, you can set six parts: 
  //  name, value, expires, path, domain, and secure.

  //  The latter four of these are optional. 
    

