
let name = 'admin';
let password = 'secret';

if (name == 'admin') {
    console.log('Hello Admin!');
}
else {
    console.log('You are not Admin!');
}

if (password == 'secret') {
    console.log('Password is correct!');
}
else {
    console.log('Password is not correct!');
}

if (name == 'admin' && password == 'secret') {
    console.log('Your data is correct!');
}
else {
    console.log('Your data is not correct!');
}

let allowedTypes = ['admin', 'moderator'];

let typeCheck = allowedTypes.includes(name);

if (typeCheck) {
    console.log('You are admin!');
}
else {
    console.log('You are just a member!');
}

let dayOfTheWeek = 'sunday';

if (dayOfTheWeek == 'saturday' || dayOfTheWeek == 'sunday') {
    console.log('Weekend!');
}
else if (dayOfTheWeek == 'friday') {
    console.log('Weekend is coming!');
}
else {
    console.log('Work work!');
}

switch (dayOfTheWeek) {
    case 'saturday':
    case 'sunday':
        console.log('Weekend!');
        break;
    case 'friday':
        console.log('Weekend is coming!');
        break;
    default:
        console.log('Work work!');
        break;
}