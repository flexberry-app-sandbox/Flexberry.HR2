import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as Физ_лицоMixin
} from '../mixins/regenerated/models/i-i-s-h-r-физ-лицо';

import СотрудникModel from './i-i-s-h-r-сотрудник';

let Model = СотрудникModel.extend(Физ_лицоMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
