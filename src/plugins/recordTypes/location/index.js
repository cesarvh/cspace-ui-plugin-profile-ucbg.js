import fields from './fields';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    location: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
