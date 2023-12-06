import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата_приема: DS.attr('date'),
  должность: DS.belongsTo('i-i-s-h-r-должность', { inverse: null, async: false }),
  отдел: DS.belongsTo('i-i-s-h-r-отдел', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата_приема: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.дата_приема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-h-r-сотрудник.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-h-r-сотрудник', {
    iD: attr('ID', { index: 0 }),
    дата_приема: attr('Дата_приема', { index: 1 }),
    отдел: belongsTo('i-i-s-h-r-отдел', 'Отдел', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' }),
    должность: belongsTo('i-i-s-h-r-должность', 'Должность', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-h-r-сотрудник', {
    iD: attr('ID', { index: 0 }),
    дата_приема: attr('Дата_приема', { index: 1 }),
    отдел: belongsTo('i-i-s-h-r-отдел', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-h-r-должность', 'Название', {
      название: attr('Название', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
