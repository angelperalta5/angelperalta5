var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var theLareAlert = function(alertText) {
    document.getElementById("vr-homepage").innerHTML = alertText
    setTimeout(function() {
        location.reload();
    }, 2000 );
}
