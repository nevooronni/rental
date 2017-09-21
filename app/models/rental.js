import DS from 'ember-data';

export default DS.Model.extend({
	owner: DS.attr(),
	city: DS.attr(),
	tfype: DS.attr(),
	image: DS.attr(),
	bedrooms: DS.attr()
});
