// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
  //library: library
  initialize: function(){
    
  },
   parse: function(response){
    return response.results;
  }

});
