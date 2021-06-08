function validasi(){
    var username = document.forms["myForm"]["nama"].value;
    var password = document.forms["myForm"]["alamat"].value;
    if( username == "rahul" && password == "probolinggo"){
        alert("silahkan melanjutkan proses");
      return true;
    }
    else if(username =="" || password ==""){
      alert("Masukan nama dan alamat Anda");
      return false;
    }
    else{
      alert("nama atau alamat tidak sesuai");
      return false;
    }
  }