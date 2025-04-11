const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');

const applicationDB = mongoose.createConnection('mongodb://localhost:27017/application', { useNewUrlParser: true, useUnifiedTopology: true });
const applicationSchema = new mongoose.Schema({
    userId: String,
  region:String,

  agegroup: String,
  gender: String
  });

  const Application = applicationDB.model('Application', applicationSchema);
  app.use(cors());
  app.use(express.json());

app.post('/api/application', (req, res) => {
  console.log('Received request to add new profasol entry:', req.body);
  const application = new Application(req.body);
  application.save()
    .then((data) => {
      console.log('Profasol entry added successfully:', data);
      res.status(201).send('Business Idea Added Successfully');
    })
    .catch((error) => {
      console.error('Error while adding profasol entry:', error);
      res.status(500).send('An error occurred. Please try again later.');
    });
});
app.get('/api/application', async (req, res) => {
    try {
      console.log('Received request to get all profasol entries');
      const application = await Application.find();
      console.log('Profasol entries:', profasols);
      res.status(200).send(application);
    } catch (error) {
      console.error('Error while getting profasol entries:', error);
      res.status(500).send('An error occurred. Please try again later.');
    }
  });
// Start the server


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });