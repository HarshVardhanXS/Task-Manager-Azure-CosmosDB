const { CosmosClient } = require('@azure/cosmos');
const client = new CosmosClient(process.env.COSMOS_CONNECTION);
const container = client.database('taskdb').container('tasks');

module.exports = async function (context, req) {
    const id = req.query.id;
    await container.item(id, id).delete();
    context.res = { status: 204 };
};