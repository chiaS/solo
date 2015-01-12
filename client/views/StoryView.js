var StoryView = Backbone.View.extend({

  className: 'story-view',

  template: _.template('<h3><%= title %></h3><a href="#"><img src = "<%= imgUrl %>"></a>\
    By <%= author %><p><%= summary %></p>'),

  initialize : function(){

  },
  events: {
    'click': function(e){
      e.preventDefault();
      new ReadingView().render(this.model.get('content'));
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

var ReadingView = Backbone.View.extend({
  tagName: 'p',
  
  render: function(data){
    var content = this.$el.text(data);
    $('.reading-section p').remove();
    $('.reading-section').prepend(content);

    //add audio
    var audioText = encodeURIComponent(data);
    var audioElement = '<audio controls> <source src="http://tts-api.com/tts.mp3?q='+
                       audioText+'"  type="audio/mpeg"></audio>';
    $('.audio-box').html(audioElement);

    //add slider
    $('.slider-wrapper .glyphicon').remove();
    $('.slider-wrapper input').remove();

    $('.slider-wrapper').append('<span class="glyphicon glyphicon-text-height" aria-hidden="true"></span>\
     <input id="font-range" type="range" name="fontSize" min="16" max="26" value="12">');
    
    //need to create another view for reading section later
    $('#font-range').on('change', this.changeFontSize);
  },
  changeFontSize: function(){
    var newSize = $('#font-range').val();
    $('.reading-section p').css('font-size', newSize+'px');
  }
});
