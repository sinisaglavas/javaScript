
export function getUserLocation() { // export daje dozvolu ucitavanje na drugom mestu
    let userLocation = '';

    while (userLocation.trim() === '') {
        userLocation = prompt('Enter location - your city');
    }

    return userLocation;
}