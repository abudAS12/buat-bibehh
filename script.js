isi.style = "display:none";


    var audioplaying = true;
    function musik() {
      var audio = document.getElementById("audio-musik");
      if (audioplaying) audio.play();
      else audio.pause();
      audioplaying = audioplaying;
      kotak.style = "transition:all .7s ease;transform:scale(10);opacity:0";
      isi.style = "display:block;height:100vh; "
    }