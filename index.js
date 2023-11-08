const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");


if ('Notification' in window) {
  if (localStorage.getItem('notificationPermission') === 'granted') {
   showNotification('Notifikasi', 'Notifikasi dari PWA Abu Hasan Al Anshori telah diaktifkan.');
  } else {
    requestNotificationPermission();
  }
}

function requestNotificationPermission() {
  Notification.requestPermission()
    .then(function (permission) {
      if (permission === 'granted') {
        var userResponse = window.confirm('Izinkan Notifikasi?');
        if (userResponse) {
          alert('Makasih kakak... :v ');
          showNotification('Notifikasi', 'Notifikasi dari PWA Abu Hasan Al Anshori telah diaktifkan.');
          localStorage.setItem('notificationPermission', 'granted');
        } else {
        alert('Yah ditolak... :( ');
        localStorage.setItem('notificationPermission', 'denied');
        }
      } else if (permission === 'denied') {
        localStorage.setItem('notificationPermission', 'denied');
        alert('Izin notifikasi telah ditolak dari browser');
      }
    });
}

function showNotification(title, message) {
  if ('Notification' in window && localStorage.getItem('notificationPermission') === 'granted') {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification(title, {
        body: message,
        icon: './assets/images/hello-icon-144.png'
      });
    });
  }
}
