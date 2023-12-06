import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  результат: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-h-r-сотрудник', { inverse: null, async: false, polymorphic: true }),
  отчет: DS.hasMany('i-i-s-h-r-отчет', { inverse: 'тЧ_отчета', async: false })
});

export let ValidationRules = {
  результат: {
    descriptionKey: 'models.i-i-s-h-r-т-ч-отчета.validations.результат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-h-r-т-ч-отчета.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчет: {
    descriptionKey: 'models.i-i-s-h-r-т-ч-отчета.validations.отчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧ_отчетаE', 'i-i-s-h-r-т-ч-отчета', {
    результат: attr('Результат', { index: 0 }),
    сотрудник: belongsTo('i-i-s-h-r-сотрудник', 'Сотрудник', {
      iD: attr('ID', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'iD' }),
    отчет: hasMany('i-i-s-h-r-отчет', 'Отчет', {
      дата_проверки: attr('Дата_проверки', { index: 0 })
    })
  });

  modelClass.defineProjection('ТЧ_отчетаL', 'i-i-s-h-r-т-ч-отчета', {
    результат: attr('Результат', { index: 0 }),
    сотрудник: belongsTo('i-i-s-h-r-сотрудник', 'ID', {
      iD: attr('ID', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
