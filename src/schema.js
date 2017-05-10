export const typeDefs = `
type Demo {
   id: ID!                # "!" denotes a required field
   name: String,
   date: String,
   store: String,
   line: String,
   location: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   demos: [Demo]    # "[]" means this is a list of channels
}
`;
