Titan.Router.map(function () {
  this.route('home', { path: '/' });
  this.resource('posts', { path: '/blog' }, function () {
    this.route('show', { path: '/:post_id' });
  });
  this.resource('todos', { path: '/todos' }, function () {
    // additional child routes
    this.route('active');
    this.route('completed');
  });
});

Titan.Router.reopen({
  location: 'history'
});

Titan.PostsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('post');
  }
});

// Titan.PostsShowRoute = Ember.Route.extend({
//   model: function (params) {
//     debugger;
//     console.log("params");
//     return this.store.find('post', { slug: params.slug });
//   },
//
//   serialize: function (model) {
//     return { post_slug: model.get('slug') };
//   }
// });

Titan.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

Titan.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});

Titan.TodosActiveRoute = Ember.Route.extend({
  model: function () {
    return this.store.filter('todo', function (todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function (controller) {
    this.render('todos/index', {controller: controller});
  }
});

Titan.TodosCompletedRoute = Ember.Route.extend({
  model: function () {
    return this.store.filter('todo', function (todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function (controller) {
    this.render('todos/index', {controller: controller});
  }
});
