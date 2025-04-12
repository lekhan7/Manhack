const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');

const applicationDB = mongoose.createConnection('mongodb://localhost:27017/application', { useNewUrlParser: true, useUnifiedTopology: true });

const applicationSchema = new mongoose.Schema({
  name: String,
  disease: String,
  percentage: Number,
  lat: Number,
  lng: Number,
  gender: String,
  season: String
});

const Application = applicationDB.model('Application', applicationSchema);

app.use(cors());
app.use(express.json());

const data = [
  { name: "Brunei", disease: "Malaria", percentage: 20, lat: 4.5353, lng: 114.7277, gender: "Male", season: "Summer" },
  { name: "Cambodia", disease: "Dengue", percentage: 15, lat: 12.5657, lng: 104.9903, gender: "Female", season: "Winter" },
  { name: "East Timor", disease: "Chikungunya", percentage: 25, lat: -8.8742, lng: 125.7278, gender: "Male", season: "Autumn" },
  { name: "Indonesia", disease: "Malaria", percentage: 30, lat: -0.7893, lng: 113.9213, gender: "Female", season: "Spring" },
  { name: "Laos", disease: "Dengue", percentage: 25, lat: 19.8563, lng: 102.4955, gender: "Male", season: "Summer" },
  { name: "Malaysia", disease: "Malaria", percentage: 30, lat: 4.2105, lng: 101.9758, gender: "Female", season: "Winter" },
  { name: "Myanmar", disease: "Dengue", percentage: 20, lat: 21.9162, lng: 95.9565, gender: "Male", season: "Autumn" },
  { name: "Philippines", disease: "Chikungunya", percentage: 10, lat: 12.8797, lng: 121.774, gender: "Female", season: "Spring" },
  { name: "Singapore", disease: "Malaria", percentage: 25, lat: 1.3521, lng: 103.8198, gender: "Male", season: "Summer" },
  { name: "Thailand", disease: "Dengue", percentage: 20, lat: 15.8700, lng: 100.9925, gender: "Female", season: "Winter" },
  { name: "Vietnam", disease: "Chikungunya", percentage: 15, lat: 14.0583, lng: 108.2772, gender: "Male", season: "Autumn" },
  { name: "Bangladesh", disease: "Malaria", percentage: 20, lat: 23.8103, lng: 90.4125, gender: "Male", season: "Summer" },
  { name: "Bhutan", disease: "Dengue", percentage: 15, lat: 27.5142, lng: 90.4333, gender: "Female", season: "Winter" },
  { name: "India", disease: "Chikungunya", percentage: 25, lat: 20.5937, lng: 78.9629, gender: "Male", season: "Autumn" },
  { name: "Nepal", disease: "Malaria", percentage: 30, lat: 27.7172, lng: 85.3240, gender: "Female", season: "Spring" },
  { name: "Pakistan", disease: "Dengue", percentage: 25, lat: 30.3753, lng: 69.3451, gender: "Male", season: "Summer" },
  { name: "Sri Lanka", disease: "Chikungunya", percentage: 10, lat: 7.8731, lng: 80.7718, gender: "Female", season: "Winter" },
];

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
    console.log('Profasol entries:', application);
    res.status(200).send(application);
  } catch (error) {
    console.error('Error while getting profasol entries:', error);
    res.status(500).send('An error occurred. Please try again later.');
  }
});

app.post('/api/seed', (req, res) => {
  console.log('Received request to seed data');
  data.forEach((item) => {
    const application = new Application(item);
    application.save()
      .then((data) => {
        console.log('Data seeded successfully:', data);
      })
      .catch((error) => {
        console.error('Error while seeding data:', error);
      });
  });
  res.status(201).send('Data seeded successfully');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});