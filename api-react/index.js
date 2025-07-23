// api-react/index.js
var express = require('express');
var cors = require('cors');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const db_result = require('./db.json');

// --- GraphQL Schema and Resolvers (your existing code) ---
const schema = buildSchema(`
  type User { /* ... */ }
  type Query { /* ... */ }
`);

const providers = {
	users: db_result,
};

const resolvers = {
	user({ name }) {
		/* ... */
	},
	users() {
		/* ... */
	},
};

// --- Express App Setup ---
var app = express();

// CORS CONFIGURATION: Allow specific origins, including preview deployments
const allowedOrigins = [
	'https://my-social-test.vercel.app', // Your production domain
	'https://my-social-test-git-master-ardsilvas-projects.vercel.app', // Your specific preview domain from the error
	// Add other potential preview domains if you work on feature branches,
	// or use a regex for more dynamic preview URLs in a real project
	// For example, if you push a feature branch 'my-feature', it might be 'my-social-test-my-feature-yourusername.vercel.app'
	// For development, you might also include 'http://localhost:3000'
];

const corsOptions = {
	origin: function (origin, callback) {
		// Allow requests with no origin (like mobile apps or curl) or from our allowed list
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'), false);
		}
	},
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Ensure OPTIONS is included for preflight requests
	allowedHeaders: 'Content-Type,Authorization', // Add any other headers your frontend sends
	credentials: true, // If you're sending cookies or authentication headers
	optionsSuccessStatus: 204, // Standard status for successful preflight
};
app.use(cors(corsOptions));

// GraphQL endpoint - the path seen *by the serverless function* after Vercel's rewrite
app.use(
	'/graphql', // This MUST be '/graphql' because Vercel rewrites /api/graphql to /graphql for this function
	graphqlHTTP({
		schema: schema,
		rootValue: resolvers,
		graphiql: true, // Set to false for production environments
	})
);

// --- Export the Express App (unchanged) ---
module.exports = app;

// --- Local Development Server (unchanged) ---
if (process.env.NODE_ENV !== 'production') {
	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(
			`Running a GraphQL API server at http://localhost:${PORT}/graphql`
		);
	});
}
