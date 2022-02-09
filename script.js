// NASA API
const count = 10;
const apiKey = 'aWrttL0gddPjkNhFT8rohqo18S6b9iWzLd30sFOP';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 Images from NASA API
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
  } catch (error) {
    // Catch Error here
  }
}

// On Load
getNasaPictures();
