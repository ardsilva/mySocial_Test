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
	users: db_result,
};

const resolvers = {
	user({ name }) {
		return providers.users.find((item) => item.name === name);
	},
	users() {
		return providers.users;
	},
};

var app = express();
app.use(cors());
app.use(
	'/',
	graphqlHTTP({
		schema: schema,
		rootValue: resolvers,
		graphiql: true,
	})
);

// EXPORTE A INSTÂNCIA DO APP PARA O VERCEL
module.exports = app;

// Opcional: Para continuar testando localmente com `node index.js`
// Adicione esta parte para que ele escute uma porta apenas em ambiente de desenvolvimento
if (process.env.NODE_ENV !== 'production') {
	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(
			`Running a GraphQL API server at http://localhost:${PORT}/graphql`
		);
	});
}
