const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();
  console.log("Connecting Producer");
  await producer.connect();
  console.log("connected ");
  await producer.send({
    topic: "rider-update",
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({ name: "Tony stark", loc: "SOUTH" }),
      },
    ],
  });
}
