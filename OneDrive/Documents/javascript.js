
function addUser() {
    let userName = prompt("Entrez le nom de l'utilisateur:");
    let userEmail = prompt("Entrez l'email de l'utilisateur:");
    
    
    fetch('/api/utilisateurs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom: userName, email: userEmail })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Utilisateur ajouté:', data);
      
        loadUsers();
    })
    .catch(error => console.error('Erreur:', error));
}


function loadUsers() {
    fetch('/api/utilisateurs')
        .then(response => response.json())
        .then(data => {
            let userList = document.getElementById('user-list');
            userList.innerHTML = '';
            data.forEach(user => {
                let userItem = document.createElement('div');
                userItem.textContent = `${user.nom} (${user.email})`;
                userList.appendChild(userItem);
            });
        })
        .catch(error => console.error('Erreur:', error));
}


