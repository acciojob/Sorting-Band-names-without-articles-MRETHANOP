//your code here
// Array of band names


// Function to sort band names without articles
function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  // Custom comparison function to ignore articles
  function compareWithoutArticles(a, b) {
    const nameA = removeArticles(a);
    const nameB = removeArticles(b);
    return nameA.localeCompare(nameB);
  }

  // Function to remove articles from a band name
  function removeArticles(name) {
    const words = name.toLowerCase().split(' ');
    const withoutArticles = words.filter(word => !articles.includes(word));
    return withoutArticles.join(' ');
  }

  // Sort band names using the custom comparison function
  bandNames.sort(compareWithoutArticles);

  return bandNames;
}

// Sort the band names without articles
let sortedBandNames = sortBandNames(bandNames);

// Display the sorted band names inside the <ul> tag with id='band'
let ulElement = document.getElementById('band');
sortedBandNames.forEach(function(bandName) {
  let liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});

