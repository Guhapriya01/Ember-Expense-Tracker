// import Model from '@ember-data/model';

// export default class CategoryModel extends Model {

// }
import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr('string'),
    transactions : DS.hasMany('transaction'),
})