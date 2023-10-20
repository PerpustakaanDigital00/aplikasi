$(document).ready(function () {
    $("form").on("submit", function (event) {
      event.preventDefault(); // Menghentikan pengiriman formulir
  
      var email = $("input[type='text']").val(); // Mendapatkan nilai email
      var password = $("input[type='password']").val(); // Mendapatkan nilai password
  
      // Gantilah kondisi ini dengan apa yang sesuai dengan Anda
      if (email === "contoh@email.com" && password === "passwordku") {
        // Login berhasil
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil',
          text: 'Anda telah berhasil login',
          showConfirmButton: false,
          timer: 1500
        });
  
        // Di sini, Anda dapat menavigasi ke halaman lain atau melakukan tindakan lain yang sesuai dengan login yang berhasil.
      } else {
        // Login gagal
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: 'Email atau password salah',
          showConfirmButton: false,
          timer: 1500
        });
  
        // Di sini, Anda dapat menambahkan tindakan tambahan saat login gagal.
      }
    });
  });
  
  $(document).ready(function () {
    // Kode untuk menangani formulir sign-up
    $(".signup-form form").on("submit", function (event) {
      event.preventDefault(); // Menghentikan pengiriman formulir
  
      var name = $(".signup-form input[name='name']").val(); // Mendapatkan nilai nama
      var email = $(".signup-form input[name='email']").val(); // Mendapatkan nilai email
      var password = $(".signup-form input[name='password']").val(); // Mendapatkan nilai password
  
      // Gantilah kondisi ini dengan apa yang sesuai dengan Anda
      if (name && email && password) {
        // Sign-up berhasil
        Swal.fire({
          icon: 'success',
          title: 'Sign-up Berhasil',
          text: 'Anda telah berhasil mendaftar',
          showConfirmButton: false,
          timer: 1500
        });
  
        // Di sini, Anda dapat menavigasi ke halaman lain atau melakukan tindakan lain yang sesuai dengan sign-up yang berhasil.
      } else {
        // Sign-up gagal
        Swal.fire({
          icon: 'error',
          title: 'Sign-up Gagal',
          text: 'Mohon isi semua kolom dengan benar',
          showConfirmButton: false,
          timer: 1500
        });
  
        // Di sini, Anda dapat menambahkan tindakan tambahan saat sign-up gagal.
      }
    });
  });
  