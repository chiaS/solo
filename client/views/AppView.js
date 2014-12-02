// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({
  //model:app
  className:'app-view',
  
  initialize: function(){
  },
  render: function(){
    var storiesView = new StoriesView({collection: this.model.get('library')});
    return this.$el.html(storiesView.render());
  }

});
