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