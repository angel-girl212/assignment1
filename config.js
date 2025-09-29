var config = {
    style: 'mapbox://styles/angle-kpr/cmfvluhcx003g01s938k02d2r',
    accessToken: 'pk.eyJ1IjoiYW5nbGUta3ByIiwiYSI6ImNtZjJybG10YzFkbnUycG80N3J5cDVid2QifQ.SoIeeUn_3CNLmzU2cgtv1w',
    showMarkers: false,
    markerColor: '#ff79d9',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Greater Spear-Nosed Bat Flight Patterns in Northern Panamá',
    subtitle: 'Case Study in the Bocas del Toro Archipelago',
    byline: 'Group 3: Jack Ge, Ben Smith, Kyra Meier',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        {
            id: 'Overview',
            alignment: 'middle',
            hidden: false,
            //title: 'The Greater Spear-Nosed Bat',
            image: 'images/Bat_2.jpg',
            description: '<h1 style="color:Plum; text-align:center;">Panamá 🇵🇦</h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3 style="color:white; text-align:center;">Greater spear-nosed bats (<em>Phyllostomus hastatus</em>), found throughout Central and South America, feed almost exclusively on the nectar of sparsely distributed, ephemeral balsa trees (<em>Ochroma pyramidale</em>) during dry seasons. </h3> <h3 style="color:white; text-align:center;"> Previous studies in Trinidad reported that these bats forage in groups and travel only up to 10 km. However, a recent study in Panamá (O’Mara & Dechmann, 2023) found that they can actually travel 20–30 km for balsa flowers, often foraging alone. </h3> <h3 style="color:white; text-align:center;"> The lack of reliance on social information during daily foraging implies that these bats have an accurate mental map of the resource locations. </h3> <h3 style="color:white; text-align:center;"> Let us take a closer look at this specific bat group in Panamá...  </h3> </div>',
            location: {
                center: [-82.3010, 9.4158],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity: 0 },
                { layer: 'points2', opacity: 0 },
                { layer: 'polygons', opacity: 0 },
                { layer: 'lines', opacity: 0 }
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'Panama',
            alignment: 'left',
            hidden: false,
            //title: 'Panama',
            image: '',
            description: '<h1 style="color:Plum; text-align:center;">Quite the Journey 🧭 </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3> To reach the patches of balsa trees on the mainland, the bats must travel long distances from their home island over regions that do not provide any valuable resources (including ocean channels and banana plantations). On average each night, a bat roundtrip is 59 km in just over three hours. </h3> </div> ',
            location: {
                center: [-82.45912, 9.39170],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity: 1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'polygons', opacity: 1 },
                { layer: 'lines', opacity: 0.5 }
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'Island',
            alignment: 'right',
            hidden: false,
            //title: 'Island Info',
            image: 'images/LaGruta.jpg',
            description: '<h1 style="color:Plum; text-align:center;"> La Gruta, Isla Colón 🏝️ </h1> <div style="background:Plum ;padding:15px;border-radius:15px;"> <h3> The home for these bats is in a cave called ‘La Gruta’ on Isla Colón, Bocas del Toro, Panamá. </h3> <h3> Out of the 18 tracked bats, none traveled or foraged together, only meeting up occasionally to rest. </h3> <h3>  Let us look at 2 case studies; <ul> <li style = "color: blue;"> Bat Neo + </li>  <li style = "color: red;"> Bat Geo </li> </h3> </div> ',
            location: {
                center: [-82.25509, 9.39874],
                zoom: 12,
                pitch: 15,
                bearing: -30,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity: 1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'polygons', opacity: 1 },
                { layer: 'lines', opacity: 0 }
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'StartingPoint',
            alignment: 'right',
            hidden: false,
            title: 'Cuevas y Santuario La Gruta',
            image: '',
            description: '',
            location: {
                center: [-82.27311, 9.39678],
                zoom: 15,
                pitch: 55,
                bearing: 275
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity:  1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 10 }
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'Red Flight Path',
            alignment: 'left',
            hidden: false,
            title: 'Red Flight Path (MAKE TIME SERIES BAR)',
            image: '',
            description: '',
            location: {
                center: [-82.48939, 9.42120],
                zoom: 15,
                pitch: 55,
                bearing: 275
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity:  1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 10 }
            ],
            onChapterExit: [],
            map.on('load'), () => {
            // Add a data source containing GeoJSON data.
                map.addSource('star', {
                    'type': 'geojson',
                    'data': {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'MultiPolygon',
                        // These coordinates outline Maine.
                        'coordinates': [
              [
                [
                  [
                  -23.611679077148438,
                  15.058033811038072
                ],
                [
                  -23.612194061279293,
                  15.057370741722679
                ],
                [
                  -23.584899902343746,
                  15.01177978112481
                ],
                [
                  -23.606357574462887,
                  14.975134174010785
                ],
                [
                  -23.5576057434082,
                  15.000670690093523
                ],
                [
                  -23.51520538330078,
                  14.979279919478266
                ],
                [
                  -23.526878356933594,
                  15.0078004716057
                ],
                [
                  -23.511085510253906,
                  15.031675216669628
                ],
                [
                  -23.543529510498047,
                  15.031343641272136
                ],
                [
                  -23.56515884399414,
                  15.065327437236107
                ],
                [
                  -23.58043670654297,
                  15.032172578799676
                ],
                [
                  -23.611679077148438,
                  15.058033811038072
                ]
              ]
            ,
            
              [
                [
                  -23.559837341308594,
                  15.037975051304702
                ],
                [
                  -23.573570251464844,
                  15.028359439508314
                ],
                [
                  -23.591938018798828,
                  15.032835726502842
                ],
                [
                  -23.574600219726562,
                  15.016256415744767
                ],
                [
                  -23.588504791259766,
                  14.99271158340107
                ],
                [
                  -23.561725616455078,
                  15.010784960692435
                ],
                [
                  -23.53271484375,
                  15.001333935614
                ],
                [
                  -23.540267944335938,
                  15.01294039910817
                ],
                [
                  -23.535118103027344,
                  15.027033114217934
                ],
                [
                  -23.55022430419922,
                  15.023883058620642
                ],
                [
                  -23.559837341308594,
                  15.037975051304702
                ]
              ]
            ]
            ]
        }
        }
        });
         
        // Add a new layer to visualize the polygon.
        map.addLayer({
            'id': 'star',
            'type': 'fill',
            'source': 'star', // reference the data source
            'layout': {},
            'paint': {
              'fill-color': '#0080ff', // blue color fill
              'fill-opacity': 0.5
          }
        });
        // Add a black outline around the polygon.
        map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'star',
            'layout': {},
            'paint': {
              'line-color': '#000',
              'line-width': 3
            }
          });
        
        });
        },

        {
            id: 'StartingPoint',
            alignment: 'right',
            hidden: false,
            title: 'Cuevas y Santuario La Gruta',
            image: '',
            description: '',
            location: {
                center: [-82.27311, 9.39678],
                zoom: 15,
                pitch: 55,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity:  1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 10 }
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'Green Flight Path',
            alignment: 'left',
            hidden: false,
            title: 'Green Flight Path (MAKE TIME SERIES BAR)',
            image: '',
            description: '',
            location: {
                center: [-82.45854, 9.35295],
                zoom: 15,
                pitch: 55,
                bearing: 240
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity:  1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 10 }
            ],
            onChapterExit: []
        },

        {
            id: '3D',
            alignment: 'middle',
            hidden: false,
            title: '3D dataset',
            image: '',
            description: '',
            location: {
                center: [-82.47019, 9.36498],
                zoom: 15,
                pitch: 75,
                bearing: 100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity:  1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'lines', opacity: 0 },
                { layer: 'polygons', opacity: 10 }
            ],
            onChapterExit: []
        }

    ]
};

