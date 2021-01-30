
var express = require('express');
var cors = require('cors');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const db_result = require('./db.json'); 


const schema = buildSchema(`
  type User {
    id: ID
    picture: String
    age: Int
    eyeColor: String
    company: String
    name: String
    email: String
    friends: [User]
  }
  type Query {
    user(name: String!): User
    users: [User]
  }
`);

const providers = {
  users : db_result
};

const resolvers = {
  user({ name }) {
    return providers.users.find(item => item.name === name);
  },
  users() {
    return providers.users;
  },
};

var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');