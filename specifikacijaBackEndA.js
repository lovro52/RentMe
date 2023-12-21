import cors from "cors";
import express from "express";
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Welcome to the Car Rental App!");
});

//Registracija primjer uzet s vježbi
router.route("/user/register").post(async (req, res) => {
  try {
    const userData = req.body;
    const result = await methods.createUser(
      userData.name,
      userData.email,
      userData.password
    );
    res.setHeader("authenticated-user", result.email);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({});
  }
});

//Login primjer uzet s vježbi
router.route("/user/login").post(async (req, res) => {
  try {
    const userData = req.body;
    const user = await methods.checkCredentials(
      userData.email,
      userData.password
    );
    if (user) {
      res.setHeader("authenticated-user", await methods.generateHash());
      res.status(200).json({ ...user });
    } else {
      return res.status(401).json({});
    }
  } catch (error) {
    res.status(500).json({});
  }
});

// Lista automobila
router.get("/cars", (req, res) => {
  // Prikazi automobile
  res.send("Lista automobila");
});

// Detalji o odabranom automobilu
router.get("/cars/:carId", (req, res) => {
  const { carId } = req.params;
  // Prikazaj specifičnog automobilia putem Id parametra
  res.send(`Detalji o odabranom automobilu: ${carId}`);
});

// Rezervacija
router.post("/cars/:carId/reserve", (req, res) => {
  const { carId } = req.params;
  // Rezervacija automobila sa parametrom Id
  res.send(`Rezervacija automobila: ${carId}`);
});

// Pregled profila
router.get("/profile", (req, res) => {
  res.send("User Profile");
});

router.put("/profile/update", (req, res) => {
  // Update profila
  res.send("User Profile updated");
});

// Prikaz automobila od usera
router.get("/cars/list/userId", (req, res) => {
  // Prikaz automobila(ne znam ako treba dodati neki parametar da se zna koji user ili se to gleda kad smo logirani)
  res.send("Naši automobili");
});

// User dodaje automobil za najam
router.post("/cars/userId", (req, res) => {
  res.send("Dodaj automobil za najam");
});

// Rentaj automobil od drugog usera
router.post("/cars/:carId/rent", (req, res) => {
  const { carId } = req.params;
  // Gledamo parametar Id vozila
  res.send(`Automobil s ID ${carId} iznajmljen`);
});

module.exports = router; //(ne znam ako nam je trenutno bitan export ali neka stoji)

app.listen(port, () => {
  debugger;
  console.log(`Example app listening on port ${port}`);
});
