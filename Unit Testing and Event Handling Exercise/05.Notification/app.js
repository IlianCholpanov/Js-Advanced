function notify(message) {
  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';

  notificationDiv.addEventListener('click', (event) => {
    event.target.style.display = 'none';
  });
}