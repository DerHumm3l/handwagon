const mongoose = require("mongoose");
const settings = require("../../src/config/settings");

const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect(settings.mongoose.url, settings.mongoose.options);
  });

  beforeEach(async () => {
    await Promise.all(
      Object.values(mongoose.connection.collections).map(async (collection) =>
        collection.deleteMany()
      )
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;
