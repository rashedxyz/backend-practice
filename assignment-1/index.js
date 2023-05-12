const express = require("express");

const app = express();

/**
 * We have a function that can take two arguments called start and end. Both arguments will be a valid integer number. The function will return a random value in the given range.
 * Test URL: http://localhost:5000/api/random_number?start=10&end=20
 */

const generateRandomNumberFromGivenRange = (start, end) =>
  Math.floor(Math.random() * (end - start)) + start;

app.get("/api/random_number", (req, res) => {
  const startNumber = Number(req.query.start);
  const endNumber = Number(req.query.end);

  // Check if the startNumber and endNumber query parameters are present
  if (!startNumber || !endNumber) {
    res.status(400).json({
      error: "Invalid request"
    });
    return;
  }

  // Check if the startNumber and endNumber query parameters are numbers
  if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) {
    res.status(400).json({
      error: "Invalid request"
    });
    return;
  }

  // Check if the startNumber is less than or equal to the endNumber
  if (startNumber > endNumber) {
    res.status(400).json({
      error: "Invalid request"
    });
    return;
  }

  const randomNumberFromGivenRange = generateRandomNumberFromGivenRange(
    startNumber,
    endNumber
  );

  res.status(200).json({
    randomNumber: randomNumberFromGivenRange
  });
});


app.listen(5000, () => {
  console.log("App is running on port 5000");
});
