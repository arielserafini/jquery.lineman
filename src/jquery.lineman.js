/*
 * jquery.lineman
 * https://github.com/arielserafini/jquery.lineman
 *
 * Copyright (c) 2012 Ariel Serafini
 * Licensed under the MIT, GPL licenses.
 */

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

    var $this = $( elem ),
      text = $this.text().trim(),
      words = text.split(' '),
      finalHtml = "<span class='line line-1'>" + words[0],
      lines = 1,
      height;

    $this.text(words[0]);
    height = $this.height();

    for ( var i=1;i<words.length; i++ ) {

      $this.text($this.text() + ' ' + words[i]);


      if ( $this.height() > height ) {
          //add new line
          lines++;
          finalHtml += "</span><span class='line line-" + lines + "'>";
          height = $this.height();

        }
        finalHtml += ' ' + words[i];
      }

      finalHtml += "</span>";
      $this.html(finalHtml).data("textLines", lines);

      return $this;
  };

}(jQuery));
