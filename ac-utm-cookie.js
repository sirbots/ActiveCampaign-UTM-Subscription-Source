
/*********
 * 
 * Description: Creates a cookie with a visitor's UTM parameters, then inserts those parameters into a custom field for ActiveCampaign users.
 * Use: Distributed under the MIT License.
 * Creator: sirbots (https://github.com/sirbots) @ https://makemorecoffee.com
 * 
 *********/

var cookieNames = document.cookie.split(';');
var cookieSet = false;

for (i=0 ; i < cookieNames.length ; i++) {
  if ( cookieNames[i].substring(0,10) == ' UTMparams' || cookieNames[i].substring(0,9) == 'UTMparams') {
  cookieSet = true;
    }  
  }

// Check for utms in the query string
if (!cookieSet) {
  if (window.location.search.substring(1).search("utm") > -1 ) {

    // Store the parsed UTM parameters
    var medium = getQueryVariable("utm_medium");
    var source = getQueryVariable("utm_source");
    var campaign = getQueryVariable("utm_campaign");
    var content = getQueryVariable("utm_content");
    var term = getQueryVariable("utm_term");

    // Bake the cookie
    setCookie();

} else {

    // Handling for non-UTM traffic
    var referringDomain = (document.referrer == "") ? 'none' : document.referrer.split("/")[2];

    var medium = 'direct';
    var source = 'none';
    var campaign = 'none';
    var content = 'none';
    var term = 'none';

    if (referringDomain.indexOf('google') > -1) {
      var medium = 'organic';
      var source = 'google';
    } else if (referringDomain.indexOf('yahoo') > -1) {
      var medium = 'organic';
      var source = 'yahoo';
    } else if (referringDomain.indexOf('bing') > -1) {
      var medium = 'organic';
      var source = 'bing';
    } else if (referringDomain.indexOf('duckduckgo') > -1) {
      var medium = 'organic';
      var source = 'duckduckgo';
    } else if (referringDomain.indexOf('baidu') > -1) {
      var medium = 'organic';
      var source = 'baidu';
    } else if (!referringDomain.indexOf('') == 0) {
      var medium = 'referral';
      var source = 'referringDomain';
    }
  
    // Bake the cookie
    setCookie();
  }
}

// Parse the UTM parameters in the query string
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0 ; i < vars.length ; i++) {
    var pair = vars[i].split("=");
      if(pair[0] == variable) {
        return pair[1];
      }
  }
  return("none");
}

// Bake the cookie
function setCookie() {
  document.cookie = "UTMparams=" + medium + "/" + source + "/" + campaign + "/" + content + "/" + term + ";path=/;"
}

// Find the UTM cookie and parse it
function getUTMcookie() {
  var cookieNames = document.cookie.split(';');
  for (i=0 ; i < cookieNames.length ; i++) {
    if ( cookieNames[i].substring(0,10) == ' UTMparams' || cookieNames[i].substring(0,9) == 'UTMparams') {
      if ( cookieNames[i].substring(0,1) == ' ' ) {
        var utmCookie = cookieNames[i];
        var cleanName = utmCookie.substr(1); 
      } else {
        var cleanName = cookieNames[i];
      }
      utmArray = cleanName.substr(10).split('/');
    }
  }  
}

// Add the cookie data to memory before sending it to the form
var utmArray = [];
getUTMcookie();

// Insert the cookie data into the form fields
document.addEventListener("DOMContentLoaded", function() {

  /*******************************************************************
   * 1: Be sure to update the field numbers below to match your form!
   * 2: Run a test to make sure data is populating correctly in AC.
   ******************************************************************/

  document.querySelectorAll('input[name="field[30]"')[0].setAttribute("value", utmArray[0]); // utm_medium
  document.querySelectorAll('input[name="field[31]"')[0].setAttribute("value", utmArray[1]); // utm_source
  document.querySelectorAll('input[name="field[32]"')[0].setAttribute("value", utmArray[2]); // utm_campaign
  document.querySelectorAll('input[name="field[33]"')[0].setAttribute("value", utmArray[3]); // utm_content
  document.querySelectorAll('input[name="field[34]"')[0].setAttribute("value", utmArray[4]); // utm_term
});
