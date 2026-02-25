/**
 * Ispisati na stranici sve podatke iz datog array-a
 */


let ads = [
    {
        title: 'Skoda octavia 2014',
        price: 9950,
        image: 'https://www.carsguide.com.au/car-reviews/2014-skoda-octavia-review-103tsi-wagon-27707',
    },
    {
        title: 'Audi A4 2024',
        price: 18000,
        image: 'https://www.youtube.com/watch?v=ahqabaP-FNY',
    }
];

let productsElement = document.getElementById('products');

for (let ad in ads) {
    productsElement.innerHTML += ads[ad]['title']+' '+ads[ad]['price']+' '+ads[ad]['image']+'<br>';
}
