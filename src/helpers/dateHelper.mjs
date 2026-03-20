
export function getDateInFuture(days) {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + days); // dodajemo 30 dana od danasnjeg datuma, ali je potreban format: 2026-03-18

    return futureDate.toISOString().split('T')[0]; // split funkcija je razdvojila u niz kod slova T
}

export function getFormattedDate(date) {
    let newDate = new Date(date);

    const option = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    const formattedDate = newDate.toLocaleDateString('sr-RS', option);
    // Da bi prvo slovo bilo veliko (Četvrtak)
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}