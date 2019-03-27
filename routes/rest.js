exports.plugin = {
    async register(server, options) {
        server.route([
            {
                method: 'GET',
                path: '/rest/',
                options: {
                    description: 'main request handler',
                    handler: async (request, h) => {
                        return {name: 'restapi'};
                    }
                }
            },    
        ]);
    },
    version: require('../package.json').version,
    name: 'route-rest'
};