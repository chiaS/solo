var Stories = Backbone.Collection.extend({
  model: Story,
  url:'http://tellstory.azurewebsites.net/stories/library',
  parse: function(response) {
    return response.results;
  }

});
