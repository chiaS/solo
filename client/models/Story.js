
var Story = Backbone.Model.extend({
  initialize: function(){
   

  },
  display: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
