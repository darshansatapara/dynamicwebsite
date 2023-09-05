const mongoose = require('mongoose');

// MongoDB connection URI
const dbURI = 'mongodb+srv://darshansatapara286:darshansatapara286@cluster0.je5whrr.mongodb.net/webdynamic?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
