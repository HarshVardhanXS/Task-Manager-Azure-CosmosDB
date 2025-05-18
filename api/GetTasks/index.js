const { CosmosClient } = require('@azure/cosmos');
const client = new CosmosClient(process.env.COSMOS_CONNECTION);
const container = client.database('taskdb').container('tasks');

module.exports = async function (context, req) {
    const { resources } = await container.items.readAll().fetchAll();
    context.res = { body: resources };
};