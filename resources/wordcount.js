if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.wordcount = {
	init: function() {
    var self = this;
    var $box = $(this.getBox());
    if ($box.length>0) {
      if ($box.find('.redactor-wordcount').length==0) {
        var $wordcount_holder = $('<div class="redactor-wordcount"></div>');
        $box.append($wordcount_holder);
        
        $box.on('keyup', function () {
          $wordcount_holder.text('Words: ' + self.count());
        });
        
        $wordcount_holder.text('Words: ' + self.count());
      }
    }
  },

  count: function() {
    var html = this.get(),
    text = $(html).text().replace(/\t+/g, " ").replace(/\n/g, " ").replace(/\s+/g, " ");
    return text.split(' ').length - 1;
  }
};

