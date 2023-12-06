import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  контакты: DS.attr('string'),
  образование: DS.attr('string'),
  опыт: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  контакты: {
    descriptionKey: 'models.i-i-s-h-r-физ-лицо.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-h-r-физ-лицо.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  опыт: {
    descriptionKey: 'models.i-i-s-h-r-физ-лицо.validations.опыт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-r-физ-лицо.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-h-r-сотрудник'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Физ_лицоE', 'i-i-s-h-r-физ-лицо', {
    фИО: attr('ФИО', { index: 0 }),
    контакты: attr('Контакты', { index: 1 }),
    образование: attr('Образование', { index: 2 }),
    опыт: attr('Опыт', { index: 3 }),
    iD: attr('ID', { index: 4 }),
    дата_приема: attr('Дата_приема', { index: 5 }),
    отдел: belongsTo('i-i-s-h-r-отдел', 'Отдел', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' }),
    должность: belongsTo('i-i-s-h-r-должность', 'Должность', {
      название: attr('Название', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('Физ_лицоL', 'i-i-s-h-r-физ-лицо', {
    фИО: attr('ФИО', { index: 0 }),
    контакты: attr('Контакты', { index: 1 }),
    образование: attr('Образование', { index: 2 }),
    опыт: attr('Опыт', { index: 3 }),
    iD: attr('ID', { index: 4 }),
    дата_приема: attr('Дата_приема', { index: 5 }),
    отдел: belongsTo('i-i-s-h-r-отдел', 'Название', {
      название: attr('Название', { index: 6 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-h-r-должность', 'Название', {
      название: attr('Название', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
