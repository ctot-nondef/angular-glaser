/// <reference path="~/scripts/jquery-1.4.2.js"/>
/*!
* jQuery Adlib Data plugin
* Version 1.0.1 (03-NOV-2010)
* Requires jQuery v1.4.2 or later
*
* Examples and usage: http://api.adlibsoft.com/
* ----------------------------------------------------------
* Copyright (C) Adlib Information Systems. All rights reserved.
* ----------------------------------------------------------
*/

(function ($) {

  $.fn.adlibdata = function (url, options, callback) {

    options.output = "json";
    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      async: true,
      cache: false,
      contentType: "application/x-www-form-urlencoded",
      data: htmlEncode(options),
      success: function (data) {

        //Check the diagnostic node for errors
        if (data.adlibJSON.diagnostic.error != undefined) {
          alert("error: " + data.adlibJSON.diagnostic.error.message);
        }
        else {
          callback(data.adlibJSON);
        }
      },
      error: function (xhr, msg) {
        alert("error: " + xhr.responseText + " " + msg);
      }
    });

  };

  var htmlEncode = function (options) {

    if (options.data == undefined)
      return options;

    //jQuery HTML encoding    
    options.data = $('<div/>').text(options.data).html();

    return options;
  }

})(jQuery);