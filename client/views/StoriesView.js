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
    var self = this;
    this.$el.find('.stories-view').append(
      this.collection.map(function(story){
        var storyView = new StoryView({model: story});
        self.options.topBarView.listenTo(storyView, 'click:story',
          self.options.topBarView.toggleMenu);
        return storyView.render();
      })
    );
    // return this.el;
  }

});
