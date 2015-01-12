
// TopBarView.js - Defines a backbone view class for top bar
var TopBarView = Backbone.View.extend({
  //model:none
  el:'#top-view',
 
  events:{
    'click .icon-menu': 'toggleMenu'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    var temp = _.template($('#top-bar-template').html());
    this.$el.html(temp());
  },

  toggleMenu: function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "30%"
    }, 200);
  }
 

});