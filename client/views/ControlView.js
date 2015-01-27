var ControlView = Backbone.View.extend({
  className: 'control-view',

  initialize: function () {
    this.listenTo(this.options.topBarView, 'menu:open', this.changeSize);
    this.listenTo(this.options.topBarView, 'menu:closed', this.changeSize);

    this.render();
  },

  render: function() {
     //add audio
    var audioText = encodeURIComponent(this.model.get('content'));
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
  },

  changeSize: function(state) {
    if(state === 'open')
      $('div.control-panel').css('width', '70%');
    else if(state === 'closed')
      $('div.control-panel').css('width', '100%');

  }

});