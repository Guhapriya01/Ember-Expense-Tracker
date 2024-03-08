// import Model from '@ember-data/model';

// export default class TransactionModel extends Model {

// }


import DS from 'ember-data';

export default DS.Model.extend({
    amount : DS.attr('dollars'),
    description : DS.attr('string'),
    date : DS.attr('date'),
    category : DS.belongsTo('category')
})