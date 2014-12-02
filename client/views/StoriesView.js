// LibraryView.js - Defines a backbone view class for the music library.
var StoriesView = Backbone.View.extend({

  className: "stories-view",

  initialize: function() {
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(
      this.collection.map(function(story){
        return new StoryView({model: story}).render();
      })
    );
    return this.el;
  }

});
