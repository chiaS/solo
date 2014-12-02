var StoryView = Backbone.View.extend({

  className: 'story-view',

  template: _.template('<h3><%= title %></h3><a href="#"><img src = "<%= imgUrl %>"></a>\
    <%= author %><p><%= summary %></p>'),

  initialize : function(){

  },
  events: {
    'click': function(e){
      e.preventDefault();
      this.renderStory();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  renderStory: function(){
    $('.reading-section').text(this.model.get('content'));
  }
});
