const { CosmosClient } = require('@azure/cosmos');
const client = new CosmosClient(process.env.COSMOS_CONNECTION);
const container = client.database('taskdb').container('tasks');

module.exports = async function (context, req) {
    const { text } = req.body;
    const newItem = { text, id: Date.now().toString() };
    await container.items.create(newItem);
    context.res = { status: 201, body: newItem };
};