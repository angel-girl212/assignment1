var config = {
    style: 'mapbox://styles/angle-kpr/cmfvluhcx003g01s938k02d2r', // our unique mapbox style
    accessToken: 'pk.eyJ1IjoiYW5nbGUta3ByIiwiYSI6ImNtZjJybG10YzFkbnUycG80N3J5cDVid2QifQ.SoIeeUn_3CNLmzU2cgtv1w', // our unique mapbox token
    showMarkers: false, // i dont want the marker showing up at each zoom location
    // markerColor: '#ff79d9',
    //projection: 'equirectangular', // directly corresponds to lat and long values
    inset: true, // i like the little globe thing
    insetOptions: {
        markerColor: '#ff79d9' // pink :)
    },
    insetPosition: 'bottom-right', // globe in an unintrusive location
    theme: 'dark', // dark textboxes to symbolize the breaking dawn
    use3dTerrain: true, // enable 3D map
    auto: false, // user to progress manually thru animation
    title: 'Greater Spear-Nosed Bat Flight Patterns in Northern Panamá', // default title style
    subtitle: 'Case Study in the Bocas del Toro Archipelago', // default
    byline: 'Group 3: Jack Ge, Ben Smith, Kyra Meier', // default
    footer: 'OMara et. al. (2021), Gobierno Nacional (2021), Solano (2022), HDX (2024) <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.', // our data sources. full bibliography in documentation
    chapters: [

        {
            id: 'The Greater Spear-Nosed Bat', // chapter 1 
            alignment: 'middle', // idea is to showcase text, not map
            hidden: false, // we want to see the chapter
            //title: '', all title are hidden from here out bc we chose to include them in the description block
            image: 'images/Bat_2.jpg', // all images are in our images folder
            description: '<h1 style="color:Plum; text-align:center; font-family:Papyrus;font-size: 30px;">Panamá </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style="color:white; text-align:center; font-family:Papyrus;font-size: 20px;">Greater spear-nosed bats (<em>Phyllostomus hastatus</em>), found throughout Central and South America, feed almost exclusively on the nectar of sparsely distributed, ephemeral balsa trees (<em>Ochroma pyramidale</em>) during dry seasons. </h3> <h3 style="color:white; text-align:center;font-family:Papyrus;font-size: 20px;"> Previous studies in Trinidad reported that these bats forage in groups and travel only up to 10 km. However, a recent study in Panamá (O’Mara & Dechmann, 2023) found that they can actually travel 20–30 km for balsa flowers, often foraging alone. </h3> <h3 style="color:white; text-align:center;font-family:Papyrus;font-size: 20px;"> The lack of reliance on social information during daily foraging implies that these bats have an accurate mental map of the resource locations. </h3> <h3 style="color:white; text-align:center;font-family:Papyrus;font-size: 20px;"> Let us take a closer look at this specific bat group in Panamá...  </h3> </div>', // customized symbology with font size and style, colour
            location: {
                center: [-82.3010, 9.4158], // centered on our ROI
                zoom: 6, // panned out to see entire country and position on the earth
                pitch: 0, // birds eye
                bearing: 0 // north oriented
            },
            mapAnimation: 'flyTo', // we keep this type of map animation in every chapter
            rotateAnimation: false, // static view here
            callback: '', // could execute a function
            onChapterEnter: [
                { layer: '3dpolygon', opacity: 0 }, // 3D polygon - population density
                { layer: 'points', opacity: 0 }, // points - bat neo flight path (identifer # 74DE4E7 in data)
                { layer: 'points2', opacity: 0 }, // points - bat geo flight path (identifer # 74D8C25 in data)
                { layer: 'lines', opacity: 0 }, // lines - panama provincial boundaries
                { layer: 'polygons', opacity: 0 } // polygons - relevant land cover classes [SHAPEFILE TO GEOJSON]
            ],
            onChapterExit: [] // throughout the script we do not include any layer modifications for chapter exits to avoid confusion
        },

        {
            id: 'Quite the Journey', // chapter 2
            alignment: 'left', // showcases ROI
            hidden: false,
            //title: '',
            image: 'images/batflying.webp',
            description: '<h1 style="color:Plum; text-align:center;font-family:Papyrus;font-size: 30px;">Quite the Journey 🧭 </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style = "font-family:Papyrus;font-size: 20px;"> To reach the patches of balsa trees on the mainland, the bats must travel long distances from their home island over regions that do not provide any valuable resources (including ocean channels and banana plantations). On average each night, a bat roundtrip is 59 km in just over three hours. </h3> </div> ', // simple styling
            location: {
                center: [-82.45912, 9.39170], // nice close up of the ROI
                zoom: 11, // full view of island
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: '3dpolygon', opacity: 0 }, // not visible
                { layer: 'points', opacity: 1 }, // visible
                { layer: 'points2', opacity: 1 }, // visible
                { layer: 'lines', opacity: 1 }, // visible
                { layer: 'polygons', opacity: 1 } // visible
            ],
            onChapterExit: []
        },

        {
            id: 'La Gruta, Isla Colón', // chapter 3
            alignment: 'right',
            hidden: false,
            //title: '',
            image: 'images/LaGruta.jpg',
            description: '<h1 style="color:Plum; text-align:center; font-family:Papyrus;font-size: 30px;"> La Gruta, Isla Colón 🏝️ </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style = "font-family:Papyrus;font-size: 20px;"> The home for these bats is in a cave called ‘La Gruta’ on Isla Colón, Bocas del Toro, Panamá. </h3> <h3 style = "font-family:Papyrus;font-size: 20px;"> Out of the 18 tracked bats, none traveled or foraged together, only meeting up occasionally to rest. </h3> <h3 style = "font-family:Papyrus;font-size: 20px;">  Let us look at 2 case studies; <ul> <li style = "color: #FF1493;"> Bat Neo + </li>  <li style = "color: #ffcce6;"> Bat Geo </li> </h3> </div> ', // more complex styling with two bullet points, one for each bat path
            location: {
                center: [-82.25509, 9.39874], // view centered on island
                zoom: 12, // slightly more zoomed in
                pitch: 15, // orientation to match natural position of island
                bearing: -30, // slightly tilted
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, // rotate to give user feeling of hovering over the island, perhaps preparing to touch down
            callback: '',
            onChapterEnter: [
                { layer: '3dpolygon', opacity: 0 }, // all layers same visibility as chapter 2
                { layer: 'points', opacity: 1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'lines', opacity: 1 },
                { layer: 'polygons', opacity: 1 }
            ],
            onChapterExit: []
        },

        {
            id: 'Neo and Geo Bat Flight Paths', // chapter 4
            alignment: 'left',
            hidden: false,
            //title: '',
            image: '', // an image would visually overwhelm, we have our javascript buttons for visual interest
            description: '<h1 style="color:Plum; text-align:center; font-family:Papyrus;font-size: 30px;"> Neo and Geo Bat Flight Paths </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h2 style= "text-align:center; font-family:Papyrus;font-size: 20px;" > Hit the buttons to visualize the individual flight paths! </h2> <h3 style = "font-family:Papyrus;font-size: 20px;">  <ul> <li> <button type="button"  onclick="showNeo()" style = "background-color: #FF1493; color: white; cursor: pointer; padding: 15px 35px; font-size: 18px; margin: 15px 2px; font-family: Papyrus"> Bat Neo </button> </li>  <li> <button type="button" onclick="showGeo()" style = "background-color: pink; color: white; cursor: pointer; padding: 15px 35px; font-size: 18px; margin: 15px 2px; font-family: Papyrus"> Bat Geo </button> </li> <li> <button type="button" onclick="showBoth()" style = "background-color: purple; color: white; cursor: pointer; padding: 15px 30px; font-size: 18px; margin: 15px 2px; font-family: Papyrus"> Both Bats </button> </li> </h3> </div> ', // html buttons turn flight paths on and off for Neo, Geo, and Both. calls in javascript at end of code
            location: {
                center: [-82.31992, 9.37161], // slight positional change from chapter 3
                zoom: 12, // same
                pitch: 55.01, // pitch changed to align with directionality of flight paths
                bearing: -93.43, // bearing to get us on upper eye-level with flight paths
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false, // static 
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity: 1 }, // visible
                { layer: 'points2', opacity: 1 }, // visible
                { layer: 'polygons', opacity: 1 }, // visible to demonstrate flight to relevant land class
                { layer: 'lines', opacity: 0 },
                { layer: '3dpolygon', opacity: 0 }
            ],
            onChapterExit: []
        },

        {
            id: 'Cuevas y Santuario La Gruta', // chapter 5
            alignment: 'right',
            hidden: false,
            //title: '',
            image: '',
            description: '<h1 style="color:Plum; text-align:center; font-family:Papyrus;font-size: 30px;"> Cuevas y Santuario La Gruta </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style = "font-family:Papyrus;font-size: 20px; text-align:center;"> This is a nature reserve in Bocas del Toro, Panama. At this spot, there is a cave that is filled with various species of bats. Tourists can even visit to get a first hand look at the natural habitat of the bats.</h3><iframe id = "Video" width="350" height="345" src="https://www.youtube.com//embed/k6I41nGSxOY"> </iframe> ', // styling with an embedded video from youtube
            location: {
                center: [-82.27311, 9.39678],  // slight positional change
                zoom: 15, // significantly further zoomed in to show detail - we are looking at a cave
                pitch: 55, // same as last time
                bearing: 275 // bearing changed to get us closer to the ground
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false, // static
            callback: '',
            onChapterEnter: [
                { layer: '3dpolygon', opacity: 0 },
                { layer: 'points', opacity:  1 }, // only point layers are visible
                { layer: 'points2', opacity: 1 }, // visible
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 0 }
            ],
            onChapterExit: []
        },

        {
            id: 'Bat Simulator', // chapter 6
            alignment: 'left',
            hidden: false,
            //title: 'Bat Simulator',
            image: 'images/BalsaFlower.jpg',
            description: '<h1 style="color:Plum; text-align:center; font-family:Papyrus;font-size: 30px;"> Bat Simulator 🦇</h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style = "font-family:Papyrus;font-size: 20px;"> Follow the journey of Bat Neo (Bat #74DE47), from 2:07am to 5:24am. This bat travels from mainland to the Isla Colon, in search of the delicious balsa flower found in the secondary mixed broadleaf forest land class.</h3><li><a href="https://neogeoweb.ca/group3/assignment1/batsimulator/" target="_new"><h2> Try it out! </h2></a></li><hr>', // bullet point with an embedded link out to another page on our neogeoweb site!
            location: {
                center: [-82.48939, 9.42120], // position of the story is changed to mainland, rather than the island
                zoom: 15, // unchanged
                pitch: 55, // unchanged
                bearing: 275 // unchanged
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false, // static
            callback: '',
            onChapterEnter: [
                { layer: '3dpolygon', opacity: 0 },
                { layer: 'points', opacity:  1 }, // visible
                { layer: 'points2', opacity: 1 }, // visible
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'Population of the Bocas del Toro Archipelago', // chapter 7
            alignment: 'right',
            hidden: false,
            //title: '',
            image: 'images/Population.jpg',
            description: '<h1 style="color:Plum; text-align:center; font-family:Papyrus;font-size: 30px;"> Population of the Bocas del Toro Archipelago 🌺 </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style = "font-family:Papyrus;font-size: 20px;"> Like many areas around the world, humans pose a significant threat to natural habitat and various animal species. In order to assess the risk level for potential human destruction of the bat’s habitat, we decided to implement a 3d polygon that showcases the density of human populations and the distances to the bat’s natural habitat. </h3></div> ', // showcasing the 3D polygon requirement
            location: {
                center: [-82.47019, 9.36498], // panama
                zoom: 5, // dramatically zoomed out to show population bars in 3D form
                pitch: 75, // looking down and across at data
                bearing: 100 // east oriented to visualize population data from interesting angle
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, // rotating
            callback: '',
            onChapterEnter: [
                { layer: '3dpolygon', opacity: 0.5}, // only 3D layer is visible, at half capacity for transparent look
                { layer: 'points', opacity:  0 }, 
                { layer: 'points2', opacity: 0 },
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 0 }
            ],
            onChapterExit: []
        },
        
        {
            id: 'Conclusion', // chapter 8
            alignment: 'middle', // to showcase text
            hidden: false,
            //title: ''
            image: '',
            description: '<h1 style="color:Plum; text-align:center; font-family:Papyrus;font-size: 30px;"> Conclusion </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style = "font-family:Papyrus;font-size: 20px;"> Our storymap showcases the daily flight paths taken by the Greater spear-nosed bats and the nearby presence of human populations. By mapping their flight paths and the presence of human populations nearby, we can understand the paths these creatures take to avoid threats based on human activity. </h3></div> ', // simple styling
            location: {
                center: [-82.47019, 9.36498], // unchanged
                zoom: 12, // moderate zoom
                pitch: 75, // impression of landing plane view
                bearing: 100 // looking to the data layers
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, // rotate
            callback: '',
            onChapterEnter: [
                { layer: '3dpolygon', opacity: 0}, //  not visible to avoid confusion
                { layer: 'points', opacity:  1 }, // visible
                { layer: 'points2', opacity: 1 }, // visible
                { layer: 'lines', opacity: 1 }, // visible
                { layer: 'polygons', opacity: 1 } // visible
            ],
            onChapterExit: []
        }

    ]
};


function showNeo() { // this enables the button to visualize the Neo Bat flight path (identifer # 74DE4E7)
  map.setLayoutProperty("points", "visibility", "visible"); // bat neo
  map.setLayoutProperty("points2", "visibility", "none"); // bat geo
} 

function showGeo() { // enables visualization of Geo Bat flight path (identifer # 74D8C25)
  map.setLayoutProperty("points", "visibility", "none"); // bat neo
  map.setLayoutProperty("points2", "visibility", "visible"); // bat geo
}

function showBoth() { // enables visualization of both bats flight paths
  map.setLayoutProperty("points", "visibility", "visible"); // bat neo
  map.setLayoutProperty("points2", "visibility", "visible"); // bat geo
}