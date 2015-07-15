var UI = require('ui');
var ajax = require('ajax');

var URL="http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=lamiastella&api_key=3deae23f4eae6c513e88a9c926b2de72&limit=10&format=json&callback=";
var card = new UI.Card({
    title:'last.fm stat',
    subtitle:'Fetching...'
});

var scrobbles = [
  {
    title: "Top Artist",
    subtitle: "Green and crispy!"
  },
  {
    title: "Top Song",
    subtitle: "Peel first!"
  },
  {
    title: "Last Scrobbled Song",
    subtitle: "Only three left!"
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

  // Show a card with clicked item details
 /* var detailCard = new UI.Card({
    title: scrobbles[event.itemIndex].title,
    body: scrobbles[event.itemIndex].subtitle
  });
*/
  // Show the new Card
 // detailCard.show();
  if (event.itemIndex==0)
    {
  
  ajax({ url: URL, type: 'json' }, function(data) {
    var topArtist = data.topartists.artist[0].name;
    var playCount= data.topartists.artist[0].playcount;
    card.subtitle('Top Artist: '+"\n"+ topArtist +"\n"+'Play Count: '+"\n"+ playCount);
    card.show();
});
    }
  else if (event.itemIndex==1)
    {
  
  ajax({ url: URL, type: 'json' }, function(data) {
    var topArtist = data.topartists.artist[1].name;
    var playCount= data.topartists.artist[1].playcount;
    card.subtitle('Top Artist: '+"\n"+ topArtist +"\n"+'Play Count: '+"\n"+ playCount);
    card.show();
});
    }
  else if (event.itemIndex==2)
    {
  
  ajax({ url: URL, type: 'json' }, function(data) {
    var topArtist = data.topartists.artist[2].name;
    var playCount= data.topartists.artist[2].playcount;
    card.subtitle('Top Artist: '+"\n"+ topArtist +"\n"+'Play Count: '+"\n"+ playCount);
    card.show();
});
    }
    
  
});



