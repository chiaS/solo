
// TopBarView.js - Defines a backbone view class for top bar
var TopBarView = Backbone.View.extend({
  //model:none
  el:'#top-view',
 
  events:{
    'click .icon-menu': 'toggleMenu'
  },

  initialize: function() {
    this.render();
    this.on('click:story', this.toggleMenu);

  },

  render: function() {
    var temp = _.template($('#top-bar-template').html());
    this.$el.html(temp());
  },

  toggleMenu: function() {
    if($('.menu').hasClass('closed')){
      //open menu

      $('.menu').animate({
        left: "0px"
      }, 200);

      $('body').animate({
        left: "30%"
      }, 200);
      $('.menu').removeClass('closed');
    }else{
      //close menu

       $('.menu').animate({
        left: "-30%"
      }, 200);

      $('body').animate({
        left: "0"
      }, 200);
      $('.menu').addClass('closed');

    }

  }
 

});