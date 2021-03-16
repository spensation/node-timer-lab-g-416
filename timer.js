const args = process.argv;
function timer (time) {
  console.log('Left:', time + 's');
  if (time > 1) {
    for(i = (time); i > 0; i--) {
      time--
      setInterval(function() {
        console.log('Left:', (time) + 's');
      },
    1000);
    } 
  }
}

timer(args[2])

// setTimeout(function(){ x.value = "2 seconds" }, 2000);