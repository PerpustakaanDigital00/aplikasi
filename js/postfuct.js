import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://us-central1-pasabar.cloudfunctions.net/pasabar";
  let tokenkey = "token";
  let tokenvalue =
    "89cf9840d33ec6446071ceb16228311c87d1caadfd860a185d72035f94eb09be236ee63150a328af435eca63afcfed54ff104ab4c7c1b1ac6f948c28775e28aa";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}
function responseData(result) {
  setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);

  if (result.message === "Selamat Datang") {
    // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
    window.location.href = "dashboard.html"; // Gantilah "error.html" dengan halaman error yang sesuai.
  } else if (result.message === "Password Salah") {
    // Jika pesan kesalahan adalah "Password salah", arahkan ke halaman error.
    window.location.href = "404.html";
  } else {
    // Penanganan lainnya (pesan kesalahan lainnya)
    window.location.href = "register.html";
  }
}
