
Titan.Post = DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),
  body: DS.attr(),
  publishedAt: DS.attr(),
});

Titan.Post.FIXTURES = [
  {
    id: 1,
    slug: 'learn-ember',
    title: 'Learn Ember.js',
    body: 'Body of Post',
    publishedAt: new Date(),
    isCompleted: true
  },
  {
    id: 2,
    slug: 'dot-dot-ember',
    title: '...',
    body: 'Body of Post',
    publishedAt: new Date('8/20/2013'),
    isCompleted: false
  },
  {
    id: 3,
    slug: 'profit-ember',
    title: 'Profit!',
    body: 'Body of Post',
    publishedAt: new Date('8/02/2013'),
    isCompleted: false
  }
];
