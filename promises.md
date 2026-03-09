# Promise
- obecanje da cemo dobiti neki odgovor
- potreban nam je kako cemo dobiti obecanje da cemo dobiti nazad odgovor od fetch-a ili nekog asinhronog koda
# Await
- sluzi da se vrati na kod kada dobije odgovor od Promise-a
  - await na liniji 15 (sve ostalo sto nije await neka nastavi da se izvrsava)
    - vrati se na liniju 15 kada dobijes odgovor
    - ne stopira ostatak koda vec se samo vraca da izvrsi ostatak te logike
# Async
- da neki kod treba da se izvrsi asinhrono

### Sve ove stvari u kombinaciji cine jednu asinhronu funkciju

# Kako da prepoznamo stranicu za X film
  - movie.html?id=tt0167261 (imdbID)
  - proveri da li ima taj ID
  - ako ima ID pozovi ombd API sa tim ID-em 