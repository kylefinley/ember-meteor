
Titan.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Titan.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember.js',
    publishedAt: new Date(),
    isCompleted: true
  },
  {
    id: 2,
    title: '...',
    publishedAt: new Date('8/20/2013'),
    isCompleted: false
  },
  {
    id: 3,
    title: 'Profit!',
    publishedAt: new Date('8/02/2013'),
    isCompleted: false
  }
];
