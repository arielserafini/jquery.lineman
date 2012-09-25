/*
 * jquery.lineman
 * https://github.com/arielserafini/jquery.lineman
 *
 * Copyright (c) 2012 Ariel Serafini
 * Licensed under the MIT, GPL licenses.
 */

(function($) {
  "use strict";

  // Collection method.
  $.fn.lineman = function() {
    return this.each(function() {
      $.lineman(this);
    });
  };


  // Static method.
  $.lineman = function(elem) {

    var text = elem.innerText.trim(),
      words = text.split(" "),
      finalHtml = "<span class='line line-1'>" + words[0],
      lines = 1,
      height;

    elem.innerText = words[0];
    height = elem.clientHeight;

    for ( var i=1;i<words.length; i++ ) {

      elem.text += " " + words[i];


      if ( elem.clientHeight > height ) {

          //add new line
          lines++;
          finalHtml += "</span><span class='line line-" + lines + "'>";
          height = elem.clientHeight;
        }

        finalHtml += " " + words[i];
      }

      finalHtml += "</span>";
      elem.innerHTML = finalHtml;

      return $(elem);
  };

}(jQuery));
