const express = require("express");
const app = express();
const port = 3000

let dogBreeds = [
    {
      breedName: "Labrador Retriever",
      origin: "Canada",
      lifeSpan: "10-12 years",
      temperament: "Outgoing, Even Tempered, Gentle, Agile, Kind, Intelligent",
      img: "",
    },
    {
      breedName: "German Shepherd",
      origin: "Germany",
      lifeSpan: "9-13 years",
      temperament: "Confident, Courageous, Smart, Watchful, Obedient",
      img: "",
    },
    {
      breedName: "Golden Retriever",
      origin: "Scotland",
      lifeSpan: "10-12 years",
      temperament: "Intelligent, Friendly, Devoted",
      img: "",
    },
    {
      breedName: "Bulldog",
      origin: "England",
      lifeSpan: "8-10 years",
      temperament: "Docile, Willful, Friendly",
      img: "",
    },
    {
      breedName: "Poodle",
      origin: "Germany",
      lifeSpan: "10-18 years",
      temperament: "Intelligent, Active, Alert, Faithful, Instinctual",
      img: "",
    },
    {
      breedName: "Beagle",
      origin: "England",
      lifeSpan: "12-15 years",
      temperament: "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
      img: "",
    },
    {
      breedName: "Rottweiler",
      origin: "Germany",
      lifeSpan: "8-10 years",
      temperament: "Good-natured, Devoted, Loyal, Steady, Alert, Confident",
      img: "",
    },
    {
      breedName: "Yorkshire Terrier",
      origin: "England",
      lifeSpan: "11-15 years",
      temperament: "Bold, Independent, Confident, Intelligent, Courageous",
      img: "",
    },
    {
      breedName: "Boxer",
      origin: "Germany",
      lifeSpan: "10-12 years",
      temperament: "Playful, Devoted, Bright, Energetic, Calm",
      img: "",
    },
    {
      breedName: "Dachshund",
      origin: "Germany",
      lifeSpan: "12-16 years",
      temperament: "Clever, Stubborn, Devoted, Lively, Playful",
      img: "",
    }
  ];
  

app.get("/", (req, res) => {
  res.send("Hello! Here are some different dog breeds! Try typing '/random' or '/search/labrador retriever' after the url to get some data.");
});

app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * dogBreeds.length);
    const randomBreed = dogBreeds[randomIndex];
    res.json(randomBreed);
  });

  app.get('/search/:string', (req, res) => {
    const searchString = req.params.string.toLowerCase();
    const matchingBreed = dogBreeds.find(breed => breed.breedName.toLowerCase() === searchString);
  
    if (matchingBreed) {
      res.json(matchingBreed);
    } else {
      res.status(404).json({ error: 'Dog breed not found' });
    }
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });