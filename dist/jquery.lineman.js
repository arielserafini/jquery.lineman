/*! jQuery Lineman - v0.1.0 - 2012-09-25
* https://github.com/arielserafini/jquery.lineman
* Copyright (c) 2012 Ariel Serafini; Licensed MIT, GPL */

(function($) {
  "use strict";

  // Collection method.
  $.fn.lineman = function() {
    return this.each(function() {

      var $this = $(this),
        text = $this.text().trim(),
        words = text.split( " " ),
        finalHtml = "<span class='line line-1'>" + words[0],
        lines = 1,
        height,
        totalWords = words.length,
        i = 1,
        currentWord = words[0],
        currentHeight = $this.height();

      $this.text(currentWord);
      height = currentHeight;

      for ( i; i < totalWords; i++ ) {
        currentWord = words[i];
        currentHeight = $this.height();

        $this.text( $this.text() + " " + currentWord);

        if ( currentHeight > height ) {

            //add new line
            lines++;
            finalHtml += "</span><span class='line line-" + lines + "'>";
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
