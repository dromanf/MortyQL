module.exports = {
  client: {
    service: {
      name: "rick-and-morty",
      localSchemaFile: "src/generated/graphql.schema.json",
    },
    excludes: ["**/generated/**", "src/modules/apollo/typeDefs.ts"],
  },
};