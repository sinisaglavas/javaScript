/**
 * Napraviti funkciju login()
 * Ako se unese userName 'admin' i lozinka 'admin' vratiti true
 * Ako se unese nesto drugi ispisati false
 */

function login(userName, password)
{
    if (userName.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {

        return true;
    }

    return false;
}

let result = login('Admin', 'ADMIN');
console.log(result);