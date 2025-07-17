
import './GetQuote.css'

export default function GetQuote() {

    // Funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault(); // Impedisce il ricaricamento della pagina

        // 1. Raccogli i dati del form
        // Puoi accedere agli input tramite e.target (il form stesso)
        const name = e.target.name.value; // 'name' è l'attributo name dell'input
        const carModel = e.target.carModel.value; // 'carModel' è l'attributo name dell'input della macchina
        const serviceType = e.target.service.value; // 'service' è l'attributo name del select
        const message = e.target.message.value; // 'message' è l'attributo name dell'input del messaggio

        // Verifica se l'utente ha selezionato un servizio valido
        if (!serviceType) {
            alert("Please select a service type.");
            return; // Ferma l'esecuzione se nessun servizio è selezionato
        }

        // 2. Costruisci il messaggio per WhatsApp
        let whatsappMessage = `Hi, I want a quote for `;

        // Aggiungi il tipo di servizio in base alla selezione
        if (serviceType === "starlight") {
            whatsappMessage += `Starlight Installation`;
        } else if (serviceType === "ambient_light") {
            whatsappMessage += `Custom Ambient Lighting`;
        } else {
            whatsappMessage += `${serviceType}`; // Per il caso "Other" o altri futuri
        }

        // Aggiungi il modello dell'auto se fornito
        if (carModel) {
            whatsappMessage += ` for my ${carModel}`;
        }
        
        // Aggiungi il nome dell'utente se fornito
        if (name) {
            whatsappMessage += `.\nMy name is ${name}.`;
        }

        // Aggiungi il messaggio aggiuntivo se fornito
        if (message) {
            whatsappMessage += `\nAdditional details: ${message}.`;
        }

        // 3. Codifica il messaggio per l'URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // 4. Numero di telefono per WhatsApp (incluso il prefisso internazionale)
        const phoneNumber = '436607234433'; // Numero fornito, senza '+' o spazi

        // 5. Costruisci l'URL di WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // 6. Apri la chat WhatsApp in una nuova scheda/finestra
        window.open(whatsappURL);

        // Optional: Reset the form fields after submission
        e.target.reset(); 
    }

    return (
        <form className="get-quote-wrapper" onSubmit={handleSubmit}>
            <p className="get-quote-title">Instant quote on WhatsApp</p>
            
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="carModel" placeholder="Car Model (e.g. BMW M6)" required /> 
            
            <select name="service" id="service-type" required> 
                <option value="" disabled selected>Select a service type</option>
                <option value="starlight">Starlight Installation</option>
                <option value="ambient_light">Custom Ambient Lighting</option>
                <option value="other">Other Service</option>
            </select>

            
            <textarea name="message" placeholder="Optional: Any specific requests or questions?" rows="3"></textarea>
            
            <button type="submit" className="get-quote-submit-button">Get Quote</button>
        </form>
    )
}