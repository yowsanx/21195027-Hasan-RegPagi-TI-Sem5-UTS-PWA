const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");

// Minta izin notifikasi
if ('Notification' in window) {
  Notification.requestPermission()
    .then(function (permission) {
      if (permission === 'granted') {
        var userResponse = window.confirm('Izinkan Notifikasi?');
        if (userResponse) {
        alert('Makasih kakak... :v ');
        } else {
        alert('Yah ditolak... :( ');
        }
      } else if (permission === 'denied') {
        alert('Notifikasi Diblokir');
      }
    });
}

  
  // Fungsi untuk menampilkan notifikasi
  function showNotification(title, message) {
    if ('Notification' in window && Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification(title, {
            body: message,
            icon: './assets/images/hello-icon-144.png'
            });
        });
    }
}