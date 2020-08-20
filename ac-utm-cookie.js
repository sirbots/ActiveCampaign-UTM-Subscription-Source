
/*********
* 
* Description: Creates a cookie with a visitor's UTM parameters, then inserts those parameters into a custom field for ActiveCampaign users.
* Use: Distributed under the MIT License.
* Creator: sirbots (https://github.com/sirbots)
* 
*********/

document.addEventListener('DOMContentLoaded',UTMcookie());

// Uncomment this to use with a SquareSpace site:
// window.addEventListener('mercury:load', UTMcookie()); 

function UTMcookie() {
  var cookieNames = document.cookie.split(';');
  var formFieldExists = !!document.querySelectorAll('input[data-name="utm_medium"]')[0]

  // Set the UTMparams cookie with the current URL
  function setUTMCookie(medium,source,campaign,content,term) {
    document.cookie = "UTMparams=" + medium + "/" + source + "/" + campaign + "/" + content + "/" + term + ";SameSite=Strict;Max-Age=2600000;Secure;path=/;"
  }

  // Find the UTM cookie and parse it
  function getUTMCookie() {
    for (i=0 ; i < cookieNames.length ; i++) {
      if ( cookieNames[i].substring(0,10) == ' UTMparams' || cookieNames[i].substring(0,9) == 'UTMparams') {
        if ( cookieNames[i].substring(0,1) == ' ' ) {
          var utmCookie = cookieNames[i];
          var cleanName = utmCookie.substr(1); 
        } else {
          var cleanName = cookieNames[i];
        }
        // utmArray = cleanName.substr(10).split('/');
        return cleanName.substr(10).split('/');
      }
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

  // If the UTM cookie hasn't been set already...
  if (!getUTMCookie()) {
    // Check for a utm parameter in the URL
    if (window.location.search.substring(1).search("utm") > -1 ) {

      // Store the parsed UTM parameters
      var medium = getQueryVariable("utm_medium");
      var source = getQueryVariable("utm_source");
      var campaign = getQueryVariable("utm_campaign");
      var content = getQueryVariable("utm_content");
      var term = getQueryVariable("utm_term");

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
    }
    // Bake the cookie
    setUTMCookie(medium,source,campaign,content,term);
  }

  if (formFieldExists) { 
    // Insert the cookie data into the form fields
    document.querySelectorAll('input[data-name="utm_medium"]')[0].setAttribute("value", getUTMCookie()[0]); // utm_medium
    document.querySelectorAll('input[data-name="utm_source"]')[0].setAttribute("value", getUTMCookie()[1]); // utm_source
    document.querySelectorAll('input[data-name="utm_campaign"]')[0].setAttribute("value", getUTMCookie()[2]); // utm_campaign
    document.querySelectorAll('input[data-name="utm_content"]')[0].setAttribute("value", getUTMCookie()[3]); // utm_content
    document.querySelectorAll('input[data-name="utm_term"]')[0].setAttribute("value", getUTMCookie()[4]); // utm_term
  }
}