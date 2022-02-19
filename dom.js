const border = document.getElementById('border-button').addEventListener('click', function () {
    const border = document.getElementById('friend-container');
    border.style.border = '2px solid yellow'
})

function friendBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'red';
    }

}


const newFriend = document.getElementById('new-friend').addEventListener('click', function () {

    const mainDiv = document.getElementById('friend-container');

    const newDiv = document.createElement('div');

    newDiv.classList.add('friend');

    newDiv.innerHTML = `
    <h3 class="friends-name">friend-4</h3>
    <p>Quas, cumque.</p>
    `

    mainDiv.appendChild(newDiv);
})
