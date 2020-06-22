 //to do:
 /*
 
 -> only one layer visible per click
 -> change colours of country flags only when single arc is selected...
 -> for initial state make them according to main club colour
 -> try with opacity differently, make it as focus/active

 */

 
 /*
 **********Some basics**********
 */
const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

// PL stadiums 2019/20
const plStadiums = './Clubs.json';

//TeamsStats
const Arsenal = './teams/Arsenal.json';
const AstonVilla = './teams/AstonVilla.json';
const Bournemouth = './teams/Bournemouth.json';
const Brighton = './teams/Brighton.json';
const Burnley = './teams/Burnley.json';
const Chelsea = './teams/Chelsea.json';
const CrystalPalace = './teams/CrystalPalace.json';
const Everton = './teams/Everton.json';
const Leicester = './teams/Leicester.json';
const Liverpool = './teams/Liverpool.json';
const ManCity = './teams/ManCity.json';
const ManUtd = './teams/ManUtd.json';
const Newcastle = './teams/Newcastle.json';
const Norwich = './teams/Norwich.json';
const SheffieldUtd = './teams/SheffieldUtd.json';
const Southampton = './teams/Southampton.json';
const Tottenham = './teams/Tottenham.json';
const Watford = './teams/Watford.json';
const WestHam = './teams/WestHam.json';
const Wolverhampton = './teams/Wolverhampton.json';

//ClubsCoordinates
const locArsenal  = [-0.108611, 51.555];
const locAstonVilla  = [-1.884722, 52.509167];
const locBournemouth = [-1.838333, 50.735278];
const locBrighton = [-0.083278, 50.861822];
const locBurnley  = [-2.230278, 53.789167];
const locChelsea  = [-0.191111, 51.481667];
const locCrystalPalace  = [-0.085556, 51.398333];
const locEverton  = [-2.966389, 53.438889];
const locLeicesterCity  = [-1.142222, 52.620278];
const locLiverpool  = [-2.960828, 53.430819];
const locManchesterCity  = [-2.200292, 53.482989];
const locManchesterUnited  = [-2.291389, 53.463056];
const locNewcastleUnited  = [-1.621667, 54.975556];
const locNorwichCity  = [1.308653, 52.622128000000004];
const locSheffieldUnited = [-1.470833, 53.370278];
const locSouthampton  = [-1.391111, 50.905833];
const locTottenham = [-0.065833, 51.603333];
const locWatford  = [-0.401486, 51.649836];
const locWestHam  = [0.039444, 51.531944];
const locWolverhampton = [-2.130278, 52.590278];


 /*
 **********ALL Layers on & off**********
 */
function onoffAllClubs(){
  currentvalue = document.getElementById('onoffAll').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffAll").value="On";
    onoffAll.style.opacity = 1;
    
    //make other layers grey

    onoff.style.opacity = 1;
    onoffAston.style.opacity = 1;
    onoffArs.style.opacity = 1;
    onoffBri.style.opacity = 1;
    onoffBur.style.opacity = 1;
    onoffChe.style.opacity = 1;
    onoffCry.style.opacity = 1; 
    onoffEve.style.opacity = 1;
    onoffLei.style.opacity = 1;
    onoffLiv.style.opacity = 1;
    onoffManC.style.opacity = 1;
    onoffManU.style.opacity = 1;
    onoffNew.style.opacity = 1;
    onoffNor.style.opacity = 1;
    onoffSheff.style.opacity = 1;
    onoffSouth.style.opacity = 1; 
    onoffTott.style.opacity = 1;
    onoffWatf.style.opacity = 1;
    onoffWest.style.opacity = 1;
    onoffWolv.style.opacity = 1;
    

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      
  new deck.ArcLayer({
    id: 'bournemouth',
    data: Bournemouth,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBournemouth,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'arsenal',
    data: Arsenal,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locArsenal,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'AstonVilla',
    data: AstonVilla,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locAstonVilla,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Brighton',
    data: Brighton,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBrighton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Burnley',
    data: Burnley,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBurnley,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Chelsea',
    data: Chelsea,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locChelsea,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'CrystalPalace',
    data: CrystalPalace,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locCrystalPalace,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Everton',
    data: Everton,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locEverton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Leicester',
    data: Leicester,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locLeicesterCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Liverpool',
    data: Liverpool,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locLiverpool,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'ManCity',
    data: ManCity,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locManchesterCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'ManUtd',
    data: ManUtd,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locManchesterUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Newcastle',
    data: Newcastle,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locNewcastleUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Norwich',
    data: Norwich,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locNorwichCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'SheffieldUtd',
    data: SheffieldUtd,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locSheffieldUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Southampton',
    data: Southampton,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locSouthampton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Tottenham',
    data: Tottenham,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locTottenham,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Watford',
    data: Watford,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWatford,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'WestHam',
    data: WestHam,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWestHam,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Wolverhampton',
    data: Wolverhampton,
    visible: true,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWolverhampton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffAll").value="Off";
    onoffAll.style.opacity = 0.5;

      
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;
    

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'bournemouth',
        data: Bournemouth,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locBournemouth,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
          
  new deck.ArcLayer({
    id: 'arsenal',
    data: Arsenal,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locArsenal,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'AstonVilla',
    data: AstonVilla,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locAstonVilla,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Brighton',
    data: Brighton,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBrighton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Burnley',
    data: Burnley,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBurnley,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Chelsea',
    data: Chelsea,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locChelsea,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'CrystalPalace',
    data: CrystalPalace,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locCrystalPalace,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Everton',
    data: Everton,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locEverton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Leicester',
    data: Leicester,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locLeicesterCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Liverpool',
    data: Liverpool,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locLiverpool,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'ManCity',
    data: ManCity,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locManchesterCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'ManUtd',
    data: ManUtd,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locManchesterUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Newcastle',
    data: Newcastle,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locNewcastleUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Norwich',
    data: Norwich,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locNorwichCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'SheffieldUtd',
    data: SheffieldUtd,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locSheffieldUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Southampton',
    data: Southampton,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locSouthampton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Tottenham',
    data: Tottenham,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locTottenham,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Watford',
    data: Watford,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWatford,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'WestHam',
    data: WestHam,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWestHam,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Wolverhampton',
    data: Wolverhampton,
    visible: false,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWolverhampton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
    ]
  })
  }
}



  /*
 **********Single Layers on & off**********
 */
function onoffBournemouth(){
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoff").value="On";
    onoff.style.opacity = 1;
    
    //make other layers grey

    //onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;
    

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'bournemouth',
        data: Bournemouth,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locBournemouth,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoff").value="Off";
    onoff.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'bournemouth',
        data: Bournemouth,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locBournemouth,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//AstonVilla
function onoffAstonVilla(){
  currentvalue = document.getElementById('onoffAston').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffAston").value="On";
    onoffAston.style.opacity = 1;
    
    
    //make other layers grey

    onoff.style.opacity = 0.5;
    //onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;
    

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'AstonVilla',
        data: AstonVilla,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locAstonVilla,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffAston").value="Off";
    onoffAston.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'AstonVilla',
        data: AstonVilla,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locAstonVilla,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Arsenal
function onoffArsenal(){
  currentvalue = document.getElementById('onoffArs').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffArs").value="On";
    onoffArs.style.opacity = 1;
    
    
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    //onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;
    



    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Arsenal',
        data: Arsenal,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locArsenal,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffArs").value="Off";
    onoffArs.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Arsenal',
        data: Arsenal,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locArsenal,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Brighton
function onoffBrighton(){
  currentvalue = document.getElementById('onoffBri').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffBri").value="On";
    onoffBri.style.opacity = 1;
       
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    //onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;
    

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Brighton',
        data: Brighton,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locBrighton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffBri").value="Off";
    onoffBri.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Brighton',
        data: Brighton,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locBrighton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Burnley
function onoffBurnley(){
  currentvalue = document.getElementById('onoffBur').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffBur").value="On";
    onoffBur.style.opacity = 1;
    
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    //onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Burnley',
        data: Burnley,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locBurnley,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffBur").value="Off";
    onoffBur.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Burnley',
        data: Burnley,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locBurnley,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Chelsea
function onoffChelsea(){
  currentvalue = document.getElementById('onoffChe').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffChe").value="On";
    onoffChe.style.opacity = 1;
    

    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    //onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;


    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Chelsea',
        data: Chelsea,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locChelsea,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffChe").value="Off";
    onoffChe.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Chelsea',
        data: Chelsea,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locChelsea,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}


//CrystalPalace
function onoffCrystalPalace(){
  currentvalue = document.getElementById('onoffCry').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffCry").value="On";
    onoffCry.style.opacity = 1;


    
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    //onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'CrystalPalace',
        data: CrystalPalace,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locCrystalPalace,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffCry").value="Off";
    onoffCry.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'CrystalPalace',
        data: CrystalPalace,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locCrystalPalace,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Everton
function onoffEverton(){
  currentvalue = document.getElementById('onoffEve').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffEve").value="On";
    onoffEve.style.opacity = 1;

    
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    //onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Everton',
        data: Everton,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locEverton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffEve").value="Off";
    onoffEve.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Everton',
        data: Everton,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locEverton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}
//Leicester
function onoffLeicester(){
  currentvalue = document.getElementById('onoffLei').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffLei").value="On";
    onoffLei.style.opacity = 1;

    
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    //onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Leicester',
        data: Leicester,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locLeicesterCity,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffLei").value="Off";
    onoffLei.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Leicester',
        data: Leicester,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locLeicesterCity,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Liverpool
function onoffLiverpool(){
  currentvalue = document.getElementById('onoffLiv').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffLiv").value="On";
    onoffLiv.style.opacity = 1;

     
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    //onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Liverpool',
        data: Liverpool,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locLiverpool,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffLiv").value="Off";
    onoffLiv.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Liverpool',
        data: Liverpool,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locLiverpool,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//ManCity
function onoffManCity(){
  currentvalue = document.getElementById('onoffManC').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffManC").value="On";
    onoffManC.style.opacity = 1;


      
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    //onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'ManCity',
        data: ManCity,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locManchesterCity,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffManC").value="Off";
    onoffManC.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'ManCity',
        data: ManCity,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locManchesterCity,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//ManUtd
function onoffManUnited(){
  currentvalue = document.getElementById('onoffManU').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffManU").value="On";
    onoffManU.style.opacity = 1;


      
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    //onoffManU.style.opacity = 0.5;
    onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;

    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'ManUtd',
        data: ManUtd,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locManchesterUnited,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffManU").value="Off";
    onoffManU.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'ManUtd',
        data: ManUtd,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locManchesterUnited,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Newcastle
function onoffNewcastle(){
  currentvalue = document.getElementById('onoffNew').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffNew").value="On";
    onoffNew.style.opacity = 1;

 
    //make other layers grey

    onoff.style.opacity = 0.5;
    onoffAston.style.opacity = 0.5;
    onoffArs.style.opacity = 0.5;
    onoffBri.style.opacity = 0.5;
    onoffBur.style.opacity = 0.5;
    onoffChe.style.opacity = 0.5;
    onoffCry.style.opacity = 0.5; 
    onoffEve.style.opacity = 0.5;
    onoffLei.style.opacity = 0.5;
    onoffLiv.style.opacity = 0.5;
    onoffManC.style.opacity = 0.5;
    onoffManU.style.opacity = 0.5;
    //onoffNew.style.opacity = 0.5;
    onoffNor.style.opacity = 0.5;
    onoffSheff.style.opacity = 0.5;
    onoffSouth.style.opacity = 0.5; 
    onoffTott.style.opacity = 0.5;
    onoffWatf.style.opacity = 0.5;
    onoffWest.style.opacity = 0.5;
    onoffWolv.style.opacity = 0.5;


    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Newcastle',
        data: Newcastle,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locNewcastleUnited,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffNew").value="Off";
    onoffNew.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Newcastle',
        data: Newcastle,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locNewcastleUnited,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Norwich
function onoffNorwich(){
  currentvalue = document.getElementById('onoffNor').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffNor").value="On";
    onoffNor.style.opacity = 1;


      //make other layers grey

      onoff.style.opacity = 0.5;
      onoffAston.style.opacity = 0.5;
      onoffArs.style.opacity = 0.5;
      onoffBri.style.opacity = 0.5;
      onoffBur.style.opacity = 0.5;
      onoffChe.style.opacity = 0.5;
      onoffCry.style.opacity = 0.5; 
      onoffEve.style.opacity = 0.5;
      onoffLei.style.opacity = 0.5;
      onoffLiv.style.opacity = 0.5;
      onoffManC.style.opacity = 0.5;
      onoffManU.style.opacity = 0.5;
      onoffNew.style.opacity = 0.5;
      //onoffNor.style.opacity = 0.5;
      onoffSheff.style.opacity = 0.5;
      onoffSouth.style.opacity = 0.5; 
      onoffTott.style.opacity = 0.5;
      onoffWatf.style.opacity = 0.5;
      onoffWest.style.opacity = 0.5;
      onoffWolv.style.opacity = 0.5;
  
    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Norwich',
        data: Norwich,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locNorwichCity,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffNor").value="Off";
    onoffNor.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Norwich',
        data: Norwich,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locNorwichCity,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//SheffieldUtd
function onoffSheffieldUtd(){
  currentvalue = document.getElementById('onoffSheff').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffSheff").value="On";
    onoffSheff.style.opacity = 1;

    
      //make other layers grey

      onoff.style.opacity = 0.5;
      onoffAston.style.opacity = 0.5;
      onoffArs.style.opacity = 0.5;
      onoffBri.style.opacity = 0.5;
      onoffBur.style.opacity = 0.5;
      onoffChe.style.opacity = 0.5;
      onoffCry.style.opacity = 0.5; 
      onoffEve.style.opacity = 0.5;
      onoffLei.style.opacity = 0.5;
      onoffLiv.style.opacity = 0.5;
      onoffManC.style.opacity = 0.5;
      onoffManU.style.opacity = 0.5;
      onoffNew.style.opacity = 0.5;
      onoffNor.style.opacity = 0.5;
      //onoffSheff.style.opacity = 0.5;
      onoffSouth.style.opacity = 0.5; 
      onoffTott.style.opacity = 0.5;
      onoffWatf.style.opacity = 0.5;
      onoffWest.style.opacity = 0.5;
      onoffWolv.style.opacity = 0.5;
  
    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'SheffieldUtd',
        data: SheffieldUtd,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locSheffieldUnited,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffSheff").value="Off";
    onoffSheff.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'SheffieldUtd',
        data: SheffieldUtd,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locSheffieldUnited,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}

//Southampton
function onoffSouthampton(){
  currentvalue = document.getElementById('onoffSouth').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffSouth").value="On";
    onoffSouth.style.opacity = 1;

     
      //make other layers grey

      onoff.style.opacity = 0.5;
      onoffAston.style.opacity = 0.5;
      onoffArs.style.opacity = 0.5;
      onoffBri.style.opacity = 0.5;
      onoffBur.style.opacity = 0.5;
      onoffChe.style.opacity = 0.5;
      onoffCry.style.opacity = 0.5; 
      onoffEve.style.opacity = 0.5;
      onoffLei.style.opacity = 0.5;
      onoffLiv.style.opacity = 0.5;
      onoffManC.style.opacity = 0.5;
      onoffManU.style.opacity = 0.5;
      onoffNew.style.opacity = 0.5;
      onoffNor.style.opacity = 0.5;
      onoffSheff.style.opacity = 0.5;
      //onoffSouth.style.opacity = 0.5; 
      onoffTott.style.opacity = 0.5;
      onoffWatf.style.opacity = 0.5;
      onoffWest.style.opacity = 0.5;
      onoffWolv.style.opacity = 0.5;
  
    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Southampton',
        data: Southampton,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locSouthampton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffSouth").value="Off";
    onoffSouth.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Southampton',
        data: Southampton,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locSouthampton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}


//Tottenham
function onoffTottenham(){
  currentvalue = document.getElementById('onoffTott').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffTott").value="On";
    onoffTott.style.opacity = 1;


        
      //make other layers grey

      onoff.style.opacity = 0.5;
      onoffAston.style.opacity = 0.5;
      onoffArs.style.opacity = 0.5;
      onoffBri.style.opacity = 0.5;
      onoffBur.style.opacity = 0.5;
      onoffChe.style.opacity = 0.5;
      onoffCry.style.opacity = 0.5; 
      onoffEve.style.opacity = 0.5;
      onoffLei.style.opacity = 0.5;
      onoffLiv.style.opacity = 0.5;
      onoffManC.style.opacity = 0.5;
      onoffManU.style.opacity = 0.5;
      onoffNew.style.opacity = 0.5;
      onoffNor.style.opacity = 0.5;
      onoffSheff.style.opacity = 0.5;
      onoffSouth.style.opacity = 0.5; 
      //onoffTott.style.opacity = 0.5;
      onoffWatf.style.opacity = 0.5;
      onoffWest.style.opacity = 0.5;
      onoffWolv.style.opacity = 0.5;
  
    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Tottenham',
        data: Tottenham,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locTottenham,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffTott").value="Off";
    onoffTott.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Tottenham',
        data: Tottenham,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locTottenham,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}


//Watford
function onoffWatford(){
  currentvalue = document.getElementById('onoffWatf').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffWatf").value="On";
    onoffWatf.style.opacity = 1;

        
      //make other layers grey

      onoff.style.opacity = 0.5;
      onoffAston.style.opacity = 0.5;
      onoffArs.style.opacity = 0.5;
      onoffBri.style.opacity = 0.5;
      onoffBur.style.opacity = 0.5;
      onoffChe.style.opacity = 0.5;
      onoffCry.style.opacity = 0.5; 
      onoffEve.style.opacity = 0.5;
      onoffLei.style.opacity = 0.5;
      onoffLiv.style.opacity = 0.5;
      onoffManC.style.opacity = 0.5;
      onoffManU.style.opacity = 0.5;
      onoffNew.style.opacity = 0.5;
      onoffNor.style.opacity = 0.5;
      onoffSheff.style.opacity = 0.5;
      onoffSouth.style.opacity = 0.5; 
      onoffTott.style.opacity = 0.5;
      //onoffWatf.style.opacity = 0.5;
      onoffWest.style.opacity = 0.5;
      onoffWolv.style.opacity = 0.5;
  
    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Watford',
        data: Watford,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locWatford,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffWatf").value="Off";
    onoffWatf.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Watford',
        data: Watford,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locWatford,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}


//WestHam
function onoffWestHam(){
  currentvalue = document.getElementById('onoffWest').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffWest").value="On";
    onoffWest.style.opacity = 1;

      
      //make other layers grey

      onoff.style.opacity = 0.5;
      onoffAston.style.opacity = 0.5;
      onoffArs.style.opacity = 0.5;
      onoffBri.style.opacity = 0.5;
      onoffBur.style.opacity = 0.5;
      onoffChe.style.opacity = 0.5;
      onoffCry.style.opacity = 0.5; 
      onoffEve.style.opacity = 0.5;
      onoffLei.style.opacity = 0.5;
      onoffLiv.style.opacity = 0.5;
      onoffManC.style.opacity = 0.5;
      onoffManU.style.opacity = 0.5;
      onoffNew.style.opacity = 0.5;
      onoffNor.style.opacity = 0.5;
      onoffSheff.style.opacity = 0.5;
      onoffSouth.style.opacity = 0.5; 
      onoffTott.style.opacity = 0.5;
      onoffWatf.style.opacity = 0.5;
      //onoffWest.style.opacity = 0.5;
      onoffWolv.style.opacity = 0.5;
  
    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'WestHam',
        data: WestHam,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locWestHam,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffWest").value="Off";
    onoffWest.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'WestHam',
        data: WestHam,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locWestHam,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}



//Wolves
function onoffWolverhampton(){
  currentvalue = document.getElementById('onoffWolv').value;
  if(currentvalue == "Off"){
    //change button value to ON -> turn ON this layer
    document.getElementById("onoffWolv").value="On";
    onoffWolv.style.opacity = 1;

      
      //make other layers grey

      onoff.style.opacity = 0.5;
      onoffAston.style.opacity = 0.5;
      onoffArs.style.opacity = 0.5;
      onoffBri.style.opacity = 0.5;
      onoffBur.style.opacity = 0.5;
      onoffChe.style.opacity = 0.5;
      onoffCry.style.opacity = 0.5; 
      onoffEve.style.opacity = 0.5;
      onoffLei.style.opacity = 0.5;
      onoffLiv.style.opacity = 0.5;
      onoffManC.style.opacity = 0.5;
      onoffManU.style.opacity = 0.5;
      onoffNew.style.opacity = 0.5;
      onoffNor.style.opacity = 0.5;
      onoffSheff.style.opacity = 0.5;
      onoffSouth.style.opacity = 0.5; 
      onoffTott.style.opacity = 0.5;
      onoffWatf.style.opacity = 0.5;
      onoffWest.style.opacity = 0.5;
      //onoffWolv.style.opacity = 0.5;
  
    
    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
          
      }),
      //LAYERs #2 -- clubs players and their home locations
      new deck.ArcLayer({
        id: 'Wolverhampton',
        data: Wolverhampton,
        visible: true,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locWolverhampton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
//toggle OFF
  }
  else{
    //change button value to OFF -> turn OFF this layer
    document.getElementById("onoffWolv").value="Off";
    onoffWolv.style.opacity = 0.5;

    deckgl.setProps({layers: [
      new deck.GeoJsonLayer({
        id: 'stadiums',
        data: plStadiums,
        visible: true,
        // Styles
        filled: true,
        //pointRadiusMinPixels: 2,
        //pointRadiusScale: 2000,
        getRadius: d => scalePoints(d.properties.nrOfNations),
        getFillColor: [200, 0, 180, 180],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: info =>
          // eslint-disable-next-line
          info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition

      }),
      //LAYERs #2 -- clubs players and their home locations

      new deck.ArcLayer({
        id: 'Wolverhampton',
        data: Wolverhampton,
        visible: false,
        pickable: true,
        getWidth: d => scaleWidth(d.PlayersNr),
        //getWidth: d => d.PlayersNr,
        getSourcePosition: d => locWolverhampton,
        getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
        getSourceColor: d => sourceCol(d.nationality),
        getTargetColor: d => targetCol(d.nationality),
        onClick: info =>
        info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
      }),
    ]
  })
  }
}


 /*
 **********Styling effects**********
 */

//create point buffers according to nr of nations

function scalePoints(nrNat) {
  scale = 250 * nrNat

  return scale

}

//create different width scale of arcs
function scaleWidth(input) {
  if (input == 1) {
    width = 1
  }
  else if (input == 2) {
    width = 4
  }
  else if (input > 2 && input <= 4 ) {
    width = 8
  }
  else if (input > 4 && input <= 8 ) {
    width = 10
  }
  else if (input > 8 && input <= 12 ) {
    width = 14
  }
  else {
    width = 18
  }
  return width
}

//colours from: https://www.schemecolor.com

//create target colours for countries, main colour of a flag
function targetCol(tarName){
  if(tarName == "Israel" || tarName == "Japan" || tarName == "Poland"|| tarName == "Slovakia"){
    tCol = [255, 255, 255] //white
  }
  else if (tarName == "Argentina") {
    tCol = [117, 170, 219] //Iceberg
  }
  else if (tarName == "Zimbabwe") {
    tCol = [0, 100, 0] //Dark Green (X11)
  }
  else if (tarName == "Wales") {
    tCol = [0, 173, 54] //Green (Pantone)
  }
  else if (tarName == "United States") {
    tCol = [60, 59, 110] //American Blue
  }
  else if (tarName == "Ukraine") {
    tCol = [0, 91, 187] //Sapphire
  }
  else if (tarName == "Turkey") {
    tCol = [227, 10, 23] //Cadmium Red
  }
  else if (tarName == "Sweden") {
    tCol = [0, 75, 135] //Midnight Blue
  }
  else if (tarName == "Serbia") {
    tCol = [198, 54, 60] //Madder Lake
  }
  else if (tarName == "Scotland") {
    tCol = [0, 101, 191] //Spanish Blue
  }
  else if (tarName == "Portugal") {
    tCol = [0, 102, 0] //Pakistan Green
  }
  else if (tarName == "Paraguay" || tarName == "Switzerland") {
    tCol = [213, 43, 30] //Maximum Red
  }
  else if (tarName == "Northern Ireland") {
    tCol = [205, 0, 1] //Boston University Red
  }
  else if (tarName == "Nigeria") {
    tCol = [0, 135, 81] //Spanish Green
  }
  else if (tarName == "New Zealand" || tarName == "Romania") {
    tCol = [0, 36, 125] //Catalina blue
  }
  else if (tarName == "Netherlands") {
    tCol = [174, 28, 40] //Upsdell Red
  }
  else if (tarName == "Morocco") {
    tCol = [193, 39, 45] //International Orange (Golden Gate Bridge)
  }
  else if (tarName == "Mexico") {
    tCol = [0, 99, 65] //Cadmium Green
  }
  else if (tarName == "Mali") {
    tCol = [20, 181, 58] //Dark Pastel Green
  }
  else if (tarName == "Korea Republic") {
    tCol = [0, 71, 160] //Cobalt Blue, exception Korea as Black not visible
  }
  else if (tarName == "Kenya") {
    tCol = [146, 37, 41] //Vivid Auburn
  }
  else if (tarName == "Spain") {
    tCol = [170, 21, 27] //Blood (Animal)
  }
  else if (tarName == "Bosnia Herzegovina") {
    tCol = [0, 35, 149] //Imperial Blue
  }
  else if (tarName == "Jamaica") {
    tCol = [0, 155, 58] //North Texas Green
  }
  else if (tarName == "Ivory Coast") {
    tCol = [247, 127, 0] //University Of Tennessee Orange
  }
  else if (tarName == "Italy" || tarName == "Senegal") {
    tCol = [0, 140, 69] //Philippine Green
  }
  else if (tarName == "Iran") {
    tCol = [35, 159, 64] //Wageningen Green
  }
  else if (tarName == "Iceland") {
    tCol = [220, 30, 53] //Alizarin Crimson
  }
  else if (tarName == "Greece") {
    tCol = [13, 94, 175] //Green-Blue
  }
  else if (tarName == "Germany" || tarName == "Venezuela") {
    tCol = [255, 206, 0] //Tangerine Yellow, Germany -> exception as primary Black not visible
  }
  else if (tarName == "Gabon" || tarName == "Republic of Ireland") {
    tCol = [0, 158, 96] //Shamrock Green
  }
  else if (tarName == "France") {
    tCol = [0, 85, 164] //USAFA Blue
  }
  else if (tarName == "Finland") {
    tCol = [0, 47, 108] //Dark Midnight Blue
  }
  else if (tarName == "Denmark") {
    tCol = [198, 12, 48] //RED NCS
  }
  else if (tarName == "England") {
    tCol = [207, 8, 31] //Lava
  }
  else if (tarName == "Egypt" || tarName == "Ghana" || tarName == "Guinea" || tarName == "Norway") {
    tCol = [206, 17, 38] //Philippine Red
  }
  else if (tarName == "DR Congo") {
    tCol = [0, 127, 255] //Azure
  }
  else if (tarName == "Czech Republic") {
    tCol = [17, 69, 126] //Dark Cerulean
  }
  else if (tarName == "Cyprus") {
    tCol = [213, 120, 0] //Mustard Brown
  }
  else if (tarName == "Curacao") {
    tCol = [0, 38, 128] //resolution blue
  }
  else if (tarName == "Croatia") {
    tCol = [255, 0, 0] //red
  }
  else if (tarName == "Chile") {
    tCol = [0, 57, 166] //Philippine Blue
  }
  else if (tarName == "Cameroon") {
    tCol = [0, 122, 94] //Tropical Rain Forest
  }
  else if (tarName == "Brazil") {
    tCol = [0, 156, 59] //North Texas Green
  }
  else if (tarName == "Belgium") {
    tCol = [239, 51, 64] //Deep Carmine Pink  --> Belgium exception, primary Black not visible
  }
  else if (tarName == "Australia") {
    tCol = [0, 0, 139] //Dark Blue
  }
  else if (tarName == "Armenia") {
    tCol = [217, 0, 18] //Blood Orange
  }
  else if (tarName == "Algeria") {
    tCol = [0, 114, 41] //La Salle Green
  }
  else if (tarName == "Colombia" || tarName == "Uruguay") {
    tCol = [252, 209, 22] //Metallic Yellow
  }
  else {
    tCol = [0, 0, 0] 
  }
  return tCol
}
//create colours for countries, second main colour of a flag
function sourceCol(couName){
  if(couName == "Wales" || couName == "United States" || couName == "Turkey" || couName == "Switzerland" || couName == "Republic of Ireland" || couName == "Paraguay" || couName == "Norway" || couName == "Northern Ireland" || couName == "New Zealand" || couName == "Netherlands" || couName == "Mexico" || couName == "Korea Republic" || couName == "Ivory Coast" || couName == "Italy" || couName == "Iran" || couName == "Iceland" || couName == "Greece" || couName == "France" || couName == "Finland" || couName == "Egypt" || couName == "Czech Republic" || couName == "Cyprus" || couName == "Curacao" || couName == "Croatia" || couName == "Chile" || couName == "Austria" || couName == "Australia" || couName == "Scotland" || couName == "England" || couName == "Nigeria" || couName == "Denmark" || couName == "Algeria" || couName == "Argentina") {
    sCol = [255, 255, 255]  // white    
  }
  else if (couName == "Bosnia Herzegovina") {
    sCol = [254, 203, 0] //philippine yellow, 
  }
  else if (couName == "Spain") {
    sCol = [241, 191, 0] //yellow
  }
  else if (couName == "Belgium") {
    sCol = [253, 218, 36] //banana yellow
  }
  else if (couName == "Brazil") {
    sCol = [255, 223, 0] //golden yellow
  }
  else if (couName == "Colombia" || couName == "Armenia") {
    sCol = [0, 56, 147] //Dark Powder Blue
  }
  else if (couName == "Cameroon") {
    sCol = [206, 17, 38] //philippine red
  }
  else if (couName == "DR Congo") {
    sCol = [247, 214, 24] //Jonquil
  }
  else if (couName == "Romania" || couName == "Gabon" || couName == "Ghana" || couName == "Guinea" || couName == "Mali") {
    sCol = [252, 209, 22] //Metallic Yellow
  }
  else if (couName == "Germany") {
    sCol = [221, 0, 0] //Electric Red
  }
  else if (couName == "Israel") {
    sCol = [0, 56, 184] //UA Blue
  }
  else if (couName == "Jamaica" || couName == "Ukraine" || couName == "Zimbabwe") {
    sCol = [254, 209, 0] //Cyber Yellow
  }
  else if (couName == "Japan") {
    sCol = [188, 0, 45] //Crimson Glory
  }
  else if (couName == "Kenya") {
    sCol = [0, 140, 81] //spanish Green
  }
  else if (couName == "Morocco") {
    sCol = [0, 98, 51] //Cadmium Green
  }
  else if (couName == "Poland") {
    sCol = [220, 20, 60] //Crimson
  }
  else if (couName == "Portugal") {
    sCol = [255, 0, 0] //Red
  }
  else if (couName == "Senegal") {
    sCol = [253, 239, 66] //Lemon yellow
  }
  else if (couName == "Serbia") {
    sCol = [12, 64, 118] //Dark Cerulean
  }
  else if (couName == "Slovakia") {
    sCol = [11, 78, 162] //Medium Electric Blue
  }
  else if (couName == "Sweden") {
    sCol = [255, 205, 0] //Tangerine yellow
  }
  else if (couName == "Uruguay") {
    sCol = [123, 63, 0] //Chocolate
  }
  else if (couName == "Venezuela" ) {
    sCol = [0, 36, 125] //Catalina blue
  }
  else {
    sCol = [0, 0, 0] 
  }
  return sCol
}

//create pop-up
function getTooltip({object}) {
    return object && `Team:
  ${object.properties.Team}
  Nr of nations:
  ${object.properties.nrOfNations}`;
  }
//add more to popups

 /*
 **********Map init**********
 */

  //Map
const deckgl = new deck.DeckGL({
  container: 'container',
  // Set your Mapbox access token here
  mapboxApiAccessToken: 'pk.eyJ1Ijoib2xvb2NraSIsImEiOiJja2E3enBpZG4wODhkMnJydTg5c2V5a280In0.U-h43N-R4QbrEe6J90T6GA',
  mapStyle: 'mapbox://styles/mapbox/dark-v9',

  initialViewState: {
    longitude: -1.4157,
    latitude: 52.2324,
    zoom: 5,
    minZoom: 3,
    maxZoom: 25,
    pitch: 40.5,
    bearing: -27.396674584323023
    //bearing: -60
  },
  controller: true,
});

//-----PROPS----
//initial layers view
const layers = [
  //LAYER #1 -- clubs locations AND their summary statistics
  new deck.GeoJsonLayer({
    id: 'stadiums',
    data: plStadiums,
    // Styles
    filled: true,
    //pointRadiusMinPixels: 2,
    //pointRadiusScale: 2000,
    getRadius: d => scalePoints(d.properties.nrOfNations),
    getFillColor: [200, 0, 180, 180],
    // Interactive props
    pickable: true,
    autoHighlight: true,
    onHover: info => getTooltip(info.object),
    onClick: info =>
      // eslint-disable-next-line
      info.object && alert(`${info.object.properties.Team} (${info.object.properties.abbrev})`) //here get position of the stadium and pass it to ArcLayer as getSourcePosition
      
  }),
//LAYERs #2 -- clubs players and their home locations

  new deck.ArcLayer({
    id: 'bournemouth',
    data: Bournemouth,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBournemouth,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'arsenal',
    data: Arsenal,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locArsenal,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'AstonVilla',
    data: AstonVilla,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locAstonVilla,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Brighton',
    data: Brighton,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBrighton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Burnley',
    data: Burnley,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locBurnley,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Chelsea',
    data: Chelsea,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locChelsea,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'CrystalPalace',
    data: CrystalPalace,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locCrystalPalace,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Everton',
    data: Everton,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locEverton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Leicester',
    data: Leicester,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locLeicesterCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Liverpool',
    data: Liverpool,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locLiverpool,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'ManCity',
    data: ManCity,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locManchesterCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'ManUtd',
    data: ManUtd,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locManchesterUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Newcastle',
    data: Newcastle,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locNewcastleUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Norwich',
    data: Norwich,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locNorwichCity,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'SheffieldUtd',
    data: SheffieldUtd,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locSheffieldUnited,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Southampton',
    data: Southampton,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locSouthampton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Tottenham',
    data: Tottenham,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locTottenham,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Watford',
    data: Watford,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWatford,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'WestHam',
    data: WestHam,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWestHam,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
  new deck.ArcLayer({
    id: 'Wolverhampton',
    data: Wolverhampton,
    pickable: true,
    getWidth: d => scaleWidth(d.PlayersNr),
    //getWidth: d => d.PlayersNr,
    getSourcePosition: d => locWolverhampton,
    getTargetPosition: d => [d.LongCentroid, d.LatCentroid],
    getSourceColor: d => sourceCol(d.nationality),
    getTargetColor: d => targetCol(d.nationality),
    onClick: info =>
    info.object && alert(`${info.object.nationality} (${info.object.PlayersNames})`)
  }),
];
//set initial layers view
deckgl.setProps({layers});
