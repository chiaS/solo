var Stories = Backbone.Collection.extend({
  model: Story,
  url:'http://127.0.0.1:3000/stories/library',
  parse: function(response) {
    return response.results;
  }

});
