var StoryView = Backbone.View.extend({

  className: 'story-view',

  template: _.template('<h4><%= title %></h4><a href="#"><img src = "<%= imgUrl %>"></a>\
    By <%= author %><p><%= summary %></p>'),

  events: {
    'click': function(e){
      e.preventDefault();
     // new ReadingView().render(this.model.get('content'));
      new ReadingView({model: this.model, topBarView: this.options.topBarView});
      this.trigger('click:story');
    }
  },

  initialize: function() {
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

var ReadingView = Backbone.View.extend({
  tagName: 'p',

  initialize: function() {
    new ControlView({model: this.model, topBarView:this.options.topBarView});
    this.render();
  },

  render: function(){
    var content = this.$el.text(this.model.get('content'));
    $('#app-view .slogan').remove();
    $('.reading-section p').remove();
    $('.reading-section').prepend(content);
  }
});
