var map;
document.querySelector("#foot").style.backgroundColor = 'black'
document.querySelector("#foot").style.width = "100vw";
document.querySelector("#foot").style.marginLeft = "-8px";
//in order of stations in this link --> http://web.mta.info/accessibility/stations.htm
let manhattanArr = [[40.7382, -73.9999, "14 St: elevator, ramp"], [40.735736,-73.990568, "14 St-Union Square: elevator"], [40.7458, -73.9981, "23 St: elevator"],
                [40.7496, -73.9877, "34 St-Herald Square: elevator"], [40.7503, -73.9909, "34 St-Penn Station: elevator"], [40.7550, -74.0010, "34 St-Penn Station: elevator"],
                [40.7571, -73.9898, "34 St-Hudson Yards: elevator"], [40.7592, -73.9809, "42 St-Port Authority Bus Terminal: elevator, ramp"], [40.7598, -73.9842, "47-50 Sts-Rockefeller Ctr: elevator"],
                [40.7624, -73.9861, "49 St: elevovator"], [40.7687, -73.9815, "50 St: elevator"], [40.7737, -73.9822, "59 St-Columbus Circle: elevator"],
                [40.7687, -73.9584, "66 St- Lincoln Center: elevator"], [40.7785, -73.9820, "72 St: elevator"], [40.7778, -73.9514, "72 St: elevator"],
                [40.7859, -73.9509, "86 St: elevator"], [40.7942, -73.9721, "96 St: elevator"], [40.8044, -73.9372, "96 St: elevator"],
                [40.8049, -73.9385, "125 St: elevator"], [40.8179, -73.9476, "125 St: elevator"], [40.8409, -73.9398, "135 St: elevator"],
                [40.8479, -73.9395, "168 St: elevator"], [40.7046, -74.0143, "175 St: elevator"], [40.7250, -73.9957, "Bowling Green: elevator"],
                [40.7131, -74.0041, "Broadway-Lafayette St/Bleecker St: elevator"], [40.7189, -74.0011, "Brooklyn Bridge-City Hall: elevator"],
                [40.7110, -74.0108, "Chambers St: elevator"], [40.8655, -73.9272, "Cortlandt St: elevator"], [40.7094, -74.0083, "Dyckman St: elevator"],
                [40.7526, -73.9773, "Fulton St: elevator"], [40.757075 -73.971977, "Grand Central-42 St: elevator"], [40.8677, -73.9212, "Inwood-207 St: elevator"], 
                [40.7646, -73.9661, "Lexington Av/63 St: elevator"], [40.7591, -73.9533, "Roosevelt Island: elevator"],
                [40.7553, -73.9869, "Times Square-42 St: elevator, ramp"], [40.7312, -74.0013, "West 4 St: elevator, ramp"], [40.7127, -74.0099, "World Trade Center: elevator, ramp"]];

let bronxArr = [[40.812118,-73.904098, "3 Av-149 St"], [40.827905,-73.925651, "161 St-Yankee Stadium"], [40.878856,-73.904834, "231 St"],
                [40.893193,-73.857473, "233 St: elevator"], [40.841894,-73.873488,"E 180 Street: elevator"], [40.861296,-73.897749,"Fordham Rd: elevator"],
                [40.87785,-73.866256, "Gun Hill Rd – White Plains Rd line: elevator"], [40.820948,-73.890549,"Hunts Point Av: elevator"], [40.86776,-73.897174,"Kingsbridge Rd: elevator"],
                [40.852462,-73.828121, "Pelham Bay Park: elevator"], [40.857192,-73.867615, "Pelham Parkway – White Plains Rd line"], [40.824073,-73.893064,"Simpson St"]]

let brooklynArr = [[40.683666,-73.97881,"Atlantic Avenue/Barclays Center/4 Avenue: elevator"], [40.852462,-73.828121,"Bay Parkway: elevator"], [40.692404,-73.990151,"Borough Hall: elevator"],
                   [40.646654,-73.90185, "Canarsie-Rockaway Parkway: ramp"], [40.644041,-73.979678,"Church Av: elevator"], [40.577422,-73.981233,"Coney Island-Stillwell Av: ramp"],
                   [40.668897,-73.932942,"Crown Hts-Utica Av: elevator"], [40.690635,-73.981824,"DeKalb Av: elevator"], [40.675377,-73.872106,"Euclid Av: elevator"],
                   [40.632836,-73.947642,"Flatbush Av-Brooklyn College: elevator"], [40.70026,-73.941126,"Flushing Av: elevator"], [40.680596,-73.955827,"Franklin Av: elevator"],
                   [40.69218,-73.985942,"Jay St-MetroTech: elevator"], [40.60867,-73.957734,"Kings Highway: elevator"], [40.708359,-73.957757, "Marcy Avenue: elevator"],
                   [40.69943,-73.912385,"Myrtle/Wyckoff Avenues: elevator"], [40.674772,-73.957624,"Park Place: ramp"], [40.660365,-73.979493,"Prospect Park: ramp"],
                   [40.668897,-73.932942,"Utica Av: elevator"], [40.688764,-73.904046,"Wilson Av: ramp"]]

let queenArr = [[40.754203,-73.942836,"21 St-Queensbridge: elevator"], [40.74563,-73.902984,"61 St-Woodside: elevator"], [40.672097,-73.835919, "Aqueduct Racetrack: elevator"],
                [40.747846,-73.946,"Court Sq: elevator"], [40.603995,-73.755405, "Far Rockaway-Mott Av: elevator"], [40.7596,-73.83003,"Flushing/Main St: elevator"],
                [40.721691,-73.844521,"Forest Hills-71 Avenue: elevator"], [40.660476,-73.830301,"Howard Beach-JFK Airport: elevator"], [40.746848,-73.891394,"74 St-Broadway: elevator"],
                [40.712646,-73.783817,"Jamaica-179 St: elevator"], [40.702147,-73.801109,"Jamaica Center/Parsons-Archer: elevator"], [40.702566,-73.816859,"Jamaica-Van Wyck: elevator"],
                [40.749145,-73.869527,"Junction Blvd: elevator"], [40.714441,-73.831008,"Kew Gardens-Union Turnpike: elevator"], [40.711396,-73.889601,"Middle Village-Metropolitan Av: street level"],
                [40.685951,-73.825798,"Ozone Park-Lefferts Blvd: elevator"], [40.748973,-73.937243,"Queens Plaza: elevator"], [40.580903,-73.835592,"Rockaway Park-Beach 116 St:street level"],
                [40.700486,-73.807969,"Sutphin Blvd-Archer Av/ JFK Airport: elevator"]]

var marker, i;

function initMap(lat = 40.7128, lng = -74.0060, zoom = 10.5) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: {lat: lat, lng: lng},
  });

  
  var myLatLng = {lat: 40.7382, lng: -73.9999};  

  
  for (let i=0; i<manhattanArr.length; i++){
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(manhattanArr[i][0], manhattanArr[i][1]),
      map: map,
      title: manhattanArr[i][2],
  })
    marker.addListener('click', function(){
        map.panTo(this.getPosition());
        let hella = 16;
        map.zoom = hella;
    })
}
  for (let i=0; i<bronxArr.length; i++){
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(bronxArr[i][0], bronxArr[i][1]),
      map: map,
      title: bronxArr[i][2]
    });
    marker.addListener('click', function(){
        map.panTo(this.getPosition());
        let hella = 16;
        map.zoom = hella;
    })
  }
  for (let i=0; i<brooklynArr.length; i++){
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(brooklynArr[i][0], brooklynArr[i][1]),
      map: map,
      title: brooklynArr[i][2]
    });
    marker.addListener('click', function(){
        map.panTo(this.getPosition());
        let hella = 16;
        map.zoom = hella;
    })
  }
  for (let i=0; i<queenArr.length; i++){
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(queenArr[i][0], queenArr[i][1]),
      map: map,
      title: queenArr[i][2]
    });
    marker.addListener('click', function(){
        map.panTo(this.getPosition());
        let hella = 16;
        map.zoom = hella;
    })
  }



let queens = document.querySelector("#Q");
queens.addEventListener('click', function(){
  let title = document.querySelector("#current");
  title.innerText = "Current Location: Queens";
  initMap(40.7282, -73.7949, 12);
})

let brookyln = document.querySelector("#BR");
brookyln.addEventListener('click', function() {
  let title = document.querySelector("#current");
  title.innerText = "Current Location: Brookyln";
  initMap(40.6782, -73.9442, 11.5);
})

let bronx = document.querySelector("#BX");
bronx.addEventListener('click', function(){
  let title = document.querySelector("#current");
  title.innerText = "Current Location: Bronx";
  initMap(40.8448, -73.8648, 12);
})

let manhattan = document.querySelector("#M");
manhattan.addEventListener('click', function(){
  let title = document.querySelector("#current");
  title.innerText = "Current Location: Manhattan";
  initMap(40.7831, -73.9712, 11.75);
  console.log("reached before for loop")
})
}


let text = document.getElementById('text');
let button = document.getElementById('submit');
// button.addEventListener('click', function(){
//   console.log(text.value)
// })

button.addEventListener("click",updateDB);

const database = firebase.database().ref();

function updateDB(event){
    event.preventDefault();
    const message = text.value;

    text.value  = "";

    console.log(message);

    //Update database here
    const data = {
        MESSAGE: message,
    }
    database.push(data);
}

database.on('child_added', addMessage);

function addMessage(rowData){
    const row = rowData.val();
    const msg = row.MESSAGE;
    let messageDiv = document.getElementById("alerts");
    let para = document.createElement("p");
    para.className = "reported"
  
    para.innerText = `${msg}`;
    messageDiv.appendChild(para)
}

