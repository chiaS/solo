// AppView.js - Defines a backbone view class for the whole app.
var AppView = Backbone.View.extend({
  //model:app
  className:'library-view',
  
  initialize:function(){
    this.render();
  },
  
  render: function(){
    var topBarView = new TopBarView();
    var storiesView = new StoriesView({
      collection: this.model.get('library'),
      topBarView: topBarView
    });
  }

});


