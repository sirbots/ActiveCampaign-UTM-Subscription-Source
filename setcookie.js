


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

}

var medium = getQueryVariable("utm_medium");
var source = getQueryVariable("utm_medium");
var campaign = getQueryVariable("utm_campaign");
var content = getQueryVariable("utm_content");
var term = getQueryVariable("utm_term");


function setCookie() {
  var expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  expirationString = expirationDate.toUTCString;

  document.cookie = "UTMparams=" + medium + "/" + source + "/" + campaign + "/" + content + "/" + term + ";expires=" + expirationString + ";path=/;"
  console.log("UTMparams=" + medium + "/" + source + "/" + campaign + "/" + content + "/" + term );
}

setCookie();


  //  When you are creating a cookie, you can set six parts: 
  //  name, value, expires, path, domain, and secure.

  //  The latter four of these are optional. 
    

