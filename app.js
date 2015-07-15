var UI = require('ui');
var ajax = require('ajax');

var topArtistsURL="http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=lamiastella&api_key=3deae23f4eae6c513e88a9c926b2de72&limit=10&format=json&callback=";
var topTracksURL="http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&user=lamiastella&api_key=3deae23f4eae6c513e88a9c926b2de72&limit=19&format=json&callback="
var lovedTracksURL="http://ws.audioscrobbler.com/2.0/?method=user.getLovedTracks&user=lamiastella&api_key=3deae23f4eae6c513e88a9c926b2de72&limit=111&format=json&callback=";
var card = new UI.Card({
    title:'last.fm stat',
    subtitle:'Fetching...'
});

var scrobbles = [
  {
    title: "Top Artist",
    subtitle: "Most Listened Artist!"
  },
  {
    title: "Top Song",
    subtitle: "Most Listened Song!"
  },
  {
    title: "Listen Now",
    subtitle: "Recommended for You!"
  }
];

// Create the Menu, supplying the list of fruits
var scrobbleMenu = new UI.Menu({
  sections: [{
    title: 'Scrobbled Songs',
    items: scrobbles
  }]
});

scrobbleMenu.show();

scrobbleMenu.on('select', function(event) {

  if (event.itemIndex===0)
    {
  
  ajax({ url: topArtistsURL, type: 'json' }, function(data) {
    var topArtist = data.topartists.artist[0].name;
    var playCount= data.topartists.artist[0].playcount;
    card.subtitle('Top Artist: '+"\n"+ topArtist +"\n"+'Play Count: '+"\n"+ playCount);
    card.show();
});
    }
  else if (event.itemIndex==1)
    {
  
  ajax({ url: topTracksURL, type: 'json' }, function(data) {
    var topTrack = data.toptracks.track[0].name;
    var playCount= data.toptracks.track[0].playcount;
    card.subtitle('Top Tracks: '+"\n"+ topTrack +"\n"+'Play Count: '+"\n"+ playCount);
    card.show();
});
    }
 
  else if (event.itemIndex==2)
    {
  
  ajax({ url: lovedTracksURL, type: 'json' }, function(data) {
    var lovedTracks=[];
    var i;
    for (i=0; i<100; i++)
      lovedTracks.push(data.lovedtracks.track[i].name);
    var randNum=Math.floor((Math.random() * 100));
    var listenTo=lovedTracks[randNum];
    card.subtitle('Listen To: '+"\n"+ listenTo);
    card.show();
});
    }
    
  
});



