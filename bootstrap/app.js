const express = require('express');
const mongoose = require('mongoose');
const config = require('../config/database');
const apiRoutes = require('../Routes/api');
const errorHandler = require('../app/Http/Middleware/ErrorHandler');

class Application {
  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    // Middleware
    this.app.use(express.json());

    this.app.use('/api', apiRoutes);

    // Error Handling
    this.app.use(errorHandler);
  }

  async boot() {
    try {
      await mongoose.connect(config.database.mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection error:', error);
      process.exit(1);
    }
  }

  start(port = process.env.PORT || 3000) {
    this.boot().then(() => {
      this.app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    });
  }
}

const app = new Application();
app.start();

module.exports = app.app;