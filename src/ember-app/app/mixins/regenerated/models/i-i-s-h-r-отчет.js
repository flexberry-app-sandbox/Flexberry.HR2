import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата_проверки: DS.attr('date'),
  тЧ_отчета: DS.belongsTo('i-i-s-h-r-т-ч-отчета', { inverse: 'отчет', async: false })
});

export let ValidationRules = {
  дата_проверки: {
    descriptionKey: 'models.i-i-s-h-r-отчет.validations.дата_проверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  тЧ_отчета: {
    descriptionKey: 'models.i-i-s-h-r-отчет.validations.тЧ_отчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетE', 'i-i-s-h-r-отчет', {
    дата_проверки: attr('Дата_проверки', { index: 0 })
  });
};
