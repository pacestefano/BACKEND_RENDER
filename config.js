// config.js

// Funzione per recuperare la chiave API dal backend
async function fetchApiKey() {
    const response = await fetch('https://ai-text-generator-1.onrender.com/api-key'); // Sostituisci <tuo-dominio-render> con il tuo dominio effettivo
    const data = await response.json();
    return data.apiKey;
}

// Recupera la chiave API e esportala
let OPENAI_API_KEY;

fetchApiKey().then(apiKey => {
    OPENAI_API_KEY = apiKey;
    // Puoi aggiungere qui il codice per inizializzare la tua app
    // ad esempio, chiamare una funzione di inizializzazione
    initializeApp();
});

export { OPENAI_API_KEY };

// Funzione di inizializzazione della tua app
function initializeApp() {
    // Codice per inizializzare la tua app
}
