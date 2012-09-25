/*! jQuery Lineman - v0.1.0 - 2012-09-25
* https://github.com/arielserafini/jquery.lineman
* Copyright (c) 2012 Ariel Serafini; Licensed MIT, GPL */

(function($) {
  'use strict';



  // Collection method.
  $.fn.lineman = function() {
    return this.each(function() {
      $.lineman(this);
    });
  };


  // Static method.
  $.lineman = function(elem) {

    var $this = elem,
      text = $this.innerText.trim(),
      words = text.split(' '),
      finalHtml = "<span class='line line-1'>" + words[0],
      lines = 1,
      height;

    $this.innerText = words[0];
    height = $this.clientHeight;

    for ( var i=1;i<words.length; i++ ) {

      $this.text += ' ' + words[i];


      if ( $this.clientHeight > height ) {

          //add new line
          lines++;
          finalHtml += "</span><span class='line line-" + lines + "'>";
          height = $this.clientHeight;
        }

        finalHtml += ' ' + words[i];
      }

      finalHtml += "</span>";
      $this.innerHTML = finalHtml;

      return $($this);
  };

}(jQuery));
