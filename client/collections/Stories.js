var Stories = Backbone.Collection.extend({
  model: Story,
  url:'/stories/library',
  parse: function(response) {
    return response.results;
  }

});
