if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.wordcount = function () {
  return {
    init: function () {
      var that = this;
      var $box = this.$box;
      
      if ($box.length > 0) {
        if ($box.find('.redactor-wordcount').length == 0) {
          var $wordcount_holder = $('<div class="redactor-wordcount"></div>');
          $box.append($wordcount_holder);

          $box.on('keyup', function () {
            $wordcount_holder.text('Words: ' + that.wordcount.doWordCount());
          });

          $wordcount_holder.text('Words: ' + that.wordcount.doWordCount());
        }
      }
    },

    doWordCount: function () {
      var html = this.code.get(),
        text = $(html).text().replace(/\t+/g, " ").replace(/\n/g, " ").replace(/\s+/g, " ");
      return text.split(' ').length - 1;
    }
  };
};

