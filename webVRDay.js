var vrHomePage = vRViewPlayer('#vr-homepage', {
  image: '1.jpg',
   preview: '1.jpg',
  is_stereo: false,
});

// add VR to page
window.addEventListener('load', vrHomePage);

var setReadyEvents = function(event) {
  console.log('adding on "ready" events');

  vrHomePage.addHotspot('kitchen', {
    pitch: -10,
    yaw: -30,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('shelf', {
    pitch: 89,
    yaw: -100,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('sister', {
    pitch: 0,
    yaw: -150,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('transported', {
    pitch: 0,
    yaw: 140,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('window', {
    pitch: 0,
    yaw: 90,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('my side', {
    pitch: 0,
    yaw: 30,
    radius: 0.10,
    distance: 1
  });
};

var setOnClickEvents = function(event) {
  if (event.id == 'kitchen') {
    alert("This door leads to the kitchen/living room.")
  }

  if (event.id == 'shelf') {
    alert('I put my stuff in here.');
  }

  if (event.id == 'sister') {
    alert('This is my sisters side of bed room.');
  }

  if (event.id == 'transported') {
    alert('Great, now your stuck in my drawing.');
    vrHomePage.setContent({
      image: '2017-08-11_23.46.12.jpg',
      is_stereo: false
    });
  }

  if (event.id == 'window') {
    alert('Sometimes I like to open the shades when its sunny outside.');
  }

  if (event.id == 'my side') {
    alert('This is my side of the bedroom.');
  }

  if(event.id == 'hotspot-back') {
    location.reload();
  }
};

// when the page is ready, do these events
vrHomePage.on('ready', function(event) {
  setReadyEvents(event);
});

// when you click, do these events
vrHomePage.on('click', function(event) {
  setOnClickEvents(event);
});

// when there is an error, do these events
vrHomePage.on('error', function(errorEvent) {
  console.log('there was an error', errorEvent);
});
