var vrHomePage = vRViewPlayer('#vr-homepage', {
  image: '1.jpg',
   preview: '1.jpg',
  is_stereo: false,
});

// add VR to page
window.addEventListener('load', vrHomePage);

var setReadyEvents = function(event) {
  console.log('adding on "ready" events');

  vrHomePage.addHotspot('reading-spot', {
    pitch: -10,
    yaw: -30,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('self-reflect', {
    pitch: 89,
    yaw: -100,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('better-off-ted', {
    pitch: 0,
    yaw: -150,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('drawing-aquarium', {
    pitch: 0,
    yaw: 140,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('hydrating', {
    pitch: 0,
    yaw: 90,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('half-cleaning', {
    pitch: 0,
    yaw: 30,
    radius: 0.10,
    distance: 1
  });
};

var setOnClickEvents = function(event) {
  if (event.id == 'kitchen') {
    theLareAlert("This door leads to the kitchen/living room.")
  }

  if (event.id == 'shelf') {
    theLareAlert('I put my stuff in here.');
  }

  if (event.id == 'sister') {
    theLareAlert('This is my sister side of bed room.');
  }

  if (event.id == 'transported') {
    theLareAlert('Great, now your stuck in my drawing.');
  }

  if (event.id == 'window') {
    theLareAlert('Sometimes I like to open the shades when its sunny outside.');
  }

  if (event.id == 'my side') {
    theLareAlert('This is my side of the bedroom.');
  }

  if (event.id == 'drawing-aquarium') {
    console.log('adding events for aquarium');

    vrHomePage.setContent({
      image: 'assets/dolphins.jpg',
      preview: 'assets/dolphins.jpg',
      is_stereo: true
    });

    vrHomePage.addHotspot('hotspot-back', {
      pitch: 0,
      yaw: 0,
      radius: 0.10,
      distance: 1
    });
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
