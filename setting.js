window.addEventListener("online",function(){
  document.getElementById('status').innerHTML = 'You Are Online Now:<i class="fa fa-wifi" style="color: green;"></i>';
});

window.addEventListener("offline",function(){
  document.getElementById('status').innerHTML = 'You Are Offline Now:<i class="fa fa-times-circle" style="color: red;"></i>';
  
});

navigator.getBattery().then(function (battery){
  
  var power = battery.level * 100;
  
  document.getElementById("BatteryStatus").innerHTML = power;
})

function recognise(event) {
  var key = event.key;
  
  if(key =="*"){
    window.location.reload();
  }
  
  if(key =="&"){
    window.history.back();
  }
  
  if(key =="?"){
    alert("You Are In Setting Page");
  }
  
  if(key =="7"){
    window.close();
  }
  
  if(key =="$"){
    window.open("https://heptechfighterpid.github.io/","_parent");
  }
  
  if(key =="!"){
    document.getElementById("BatteryText").innerHTML = "Hello User!";
  }
  
  if(key =="#"){
    document.getElementById("BatteryText").innerHTML = "Your Battery Level:";
  }
  
  if(key ==":"){
    video.play();
  }
  
  if(key ==";"){
    video.pause();
  }
  
  if(key =="4"){
    video.muted=true;
  }
  
  if(key =="9"){
    video.muted=false;
  }
  
  if(key =="%"){
    alert('Youtube - Heptech Fighter Pid');
  }
  
}