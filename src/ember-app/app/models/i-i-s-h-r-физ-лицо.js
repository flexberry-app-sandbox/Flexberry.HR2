import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as Физ_лицоMixin
} from '../mixins/regenerated/models/i-i-s-h-r-физ-лицо';

import СотрудникModel from './i-i-s-h-r-сотрудник';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-h-r-сотрудник';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = СотрудникModel.extend(Физ_лицоMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
