import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  лК: DS.attr('string'),
  вакансия: DS.belongsTo('i-i-s-h-r-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  лК: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.лК.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вакансия: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.вакансия.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетаE', 'i-i-s-h-r-анкета', {
    iD: attr('ID', { index: 0 }),
    лК: attr('ЛК', { index: 1 }),
    вакансия: belongsTo('i-i-s-h-r-должность', 'Вакансия', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('АнкетаL', 'i-i-s-h-r-анкета', {
    iD: attr('ID', { index: 0 }),
    лК: attr('ЛК', { index: 1 }),
    вакансия: belongsTo('i-i-s-h-r-должность', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
