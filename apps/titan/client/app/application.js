Titan = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// Titan.ApplicationAdapter = DS.MeteorAdapter.extend();
Titan.ApplicationAdapter = DS.FixtureAdapter.extend();

Ember.Handlebars.helper('formatDate', function (date, block) {
  if (window.moment) {
    var f = block.hash.format || "MMM Do, YYYY";
    return moment(new Date(date)).format(f);
  }
  return date;
});

