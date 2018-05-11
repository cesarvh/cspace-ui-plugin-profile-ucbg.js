export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:locations_common': {
        locTermGroupList: {
          locTermGroup: {
            termSource: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
