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

      var $this = $(this),
      text = $this.text().trim(),
      words = text.split( " " ),
      finalHtml = "<span class='jQlm-line jQlm-line-1'>" + words[0],
      lines = 1,
      height,
      totalWords = words.length,
      i = 1,
      currentWord = words[0],
      currentHeight;

      $this.text(currentWord);
      height = $this.height();

      for ( ; i < totalWords; i++ ) {
        currentWord = words[i];
        currentHeight = $this.height();

        $this.text( $this.text() + " " + currentWord);

        if ( currentHeight > height ) {

            //add new line
            lines++;
            finalHtml += "</span><span class='jQlm-line jQlm-line-" + lines + "'>";
            height = currentHeight;
          }

          finalHtml += " " + currentWord;
        }

        finalHtml += "</span>";
        $this.html(finalHtml);

        return $this;
      });
  };

}(jQuery));
