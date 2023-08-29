async function main(event, context) {
  return {
    statusCode: 200, body: "test second route"
  }
};
exports.handler = main;
