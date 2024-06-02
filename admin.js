const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  admin.connect();

  await admin.createTopics({
    topics: [{ topic: "rider-updates", numPartitions: 2 }],
  });

  await admin.disconnect();
}

init();
