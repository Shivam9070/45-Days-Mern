function getRandomQuote() {
  fetch('https://dummyjson.com/quotes/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      return response.json();
    })
    .then(data => {

      const quoteElement = document.getElementById('quote-text');
      const authorElement = document.getElementById('quote-author');
      quoteElement.textContent = data.quote;
      authorElement.textContent = '- ' + data.author;
      console.log('Quote updated:', data);
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      const quoteElement = document.getElementById('quote-text');
      quoteElement.textContent = 'Failed to load quote. Please try again.';
    });
}

const newQuoteBtn = document.getElementById('new-quote-btn');
newQuoteBtn.addEventListener('click', getRandomQuote);

getRandomQuote();
