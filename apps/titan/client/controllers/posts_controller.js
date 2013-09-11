
Titan.PostsController = Ember.ArrayController.extend({

  model: [],

  tags:  [{name: 'test'}],

  searchTerm: '',

  filteredContent: function() {
    var post = this.get('content');
    return post
    var search = this.get('searchTerm').toLowerCase();
    if('' === search) {
      return recipe;
    }
    return post.filter(function(recipe) {
      return post.get('title').toLowerCase().indexOf(search) !== -1;
    });
  }.property('content', 'searchTerm')
});
