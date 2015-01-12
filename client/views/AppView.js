// AppView.js - Defines a backbone view class for the whole app.
var AppView = Backbone.View.extend({
  //model:app
  className:'library-view',
  
  initialize:function(){
    this.render();
  },
  
  render: function(){
    new TopBarView();
    var storiesView = new StoriesView({collection: this.model.get('library')});
    // storiesView.setElement('#stories').render();
     // return this.$el.html(storiesView.render());
  }

});


