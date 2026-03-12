/**
 * Ako korisnik nije ulogovan redirect ga na 'index.html'
 */

const loggedIn = localStorage.getItem('loggedIn');

if (loggedIn === null) {
    window.location.href = 'index.html'; // window.location -> odnosi se na navbar gore (gde se unosi url)
}

// izvadi iz LS taskove i prebaci ih nazad u objekat
// JSON.parse(localStorage.getItem('tasks')) === null, onda ga postavi kao [] -> array
// ne 'const' nego 'let' zbog lakse manipulacije
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

showTasks();

document.getElementById('createTask').addEventListener('click', () => {

    const taskName = document.getElementById('taskName').value;
    const dateTime = new Date();
    const id = dateTime.getTime(); // jedinstveni id preko broja sekundi od 1970. godine

    tasks.push({
        id: id,
        name: taskName,
    })
    // podaci ↑ se ne mogu upisati kao objekat

    // ovo ↓ ce pretvoriti objekat u string, ali ce u stringu izgledati isto kao objekat
    // (json se tretira kao string) i samo na ovaj nacin se moze upisati  u local storage
    const jsonTasks = JSON.stringify(tasks);

    // JSON je objekat prebacen u string
    // JSON ne upotrebljavamo direktno nego ga ponovo vracamo u objekat za dalje koriscenje

    localStorage.setItem('tasks', jsonTasks);
    showTasks();

    window.location.reload();
})

function showTasks() {

    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks.length >= 1) {
        for (let task of tasks) {
            let singleTask = document.createElement('div');

            let taskName = document.createElement('p');
            taskName.innerText = task.name;

            let deleteTask = document.createElement('button');
            deleteTask.innerText = 'Delete task';

            deleteTask.addEventListener('click', () => {

                // filtriraj sve koji nemaju ovaj task.id
                // ili prikazi sve zadatke koji imaju ralicit ID od ovog zadatka
                tasks = tasks.filter(filterTask => filterTask.id !== task.id);
                showTasks();
                // ovo ↓ je lakse nego traziti po ID pa brisati posebno, ovako se ponovo upise ono sto je ostalo posle filtriranja
                localStorage.setItem('tasks', JSON.stringify(tasks));
            })

            singleTask.append(taskName, deleteTask);

            taskList.appendChild(singleTask);
        }
    }
}