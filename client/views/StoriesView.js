// StoriesView.js - Defines a backbone view class for the stories.
var StoriesView = Backbone.View.extend({

  el: ".menu",

  initialize: function() {
    this.render();
  },

  events:{
    'click .icon-close': 'closeMenu'
  },

  render: function(){
    // this.$el.children().detach();
    this.$el.find('.stories-view').append(
      this.collection.map(function(story){
        return new StoryView({model: story}).render();
      })
    );
    // return this.el;
  }

});
