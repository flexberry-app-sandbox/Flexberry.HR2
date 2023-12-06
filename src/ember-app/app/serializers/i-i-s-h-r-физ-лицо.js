import { Serializer as Физ_лицоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-r-физ-лицо';
import СотрудникSerializer from './i-i-s-h-r-сотрудник';

export default СотрудникSerializer.extend(Физ_лицоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
