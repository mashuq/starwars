const Hapi = require('hapi');
const restAPI = require('./routes/rest');
const { ApolloServer} = require('apollo-server-hapi');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolver');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

const apolloServer = new ApolloServer({ typeDefs: schema, resolvers : resolvers });

// Start the server
const start = async function () {

    try {
        await server.register({
            plugin: restAPI,
        });        

        await apolloServer.applyMiddleware({
            app: server,
            path: '/graphql/',
        });

        await apolloServer.installSubscriptionHandlers(server.listener);

        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();