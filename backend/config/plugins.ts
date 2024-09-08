export default ({ env }) => ({
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  "protected-populate": {
    enabled: true,
    config: {
      ["auto-populate"]: true,
    },
  },
});
