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
    title: 'Greater Spear-Nosed Bat Flight Patterns Panama',
    subtitle: 'Case Study in the Bocas del Toro Archipelago',
    byline: 'Group 3: Jack Ge, Ben Smith, Kyra Meier',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        {
            id: 'Overview',
            alignment: 'middle',
            hidden: false,
            title: 'The Greater Spear-Nosed Bat',
            image: 'images/bat.jpg',
            description: 'Talk about these bats. Fun facts? Eating habits? Why are they flying away from island?',
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
            title: 'Panama',
            image: '',
            description: 'Talk about these bats. Fun facts? Eating habits? Why are they flying away from island?',
            location: {
                center: [-82.50912, 9.39170],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'points', opacity: 1 },
                { layer: 'points2', opacity: 1 },
                { layer: 'polygons', opacity: 0 },
                { layer: 'lines', opacity: 0.5 }
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'Island',
            alignment: 'right',
            hidden: false,
            title: 'Island Info',
            image: '',
            description: '',
            location: {
                center: [-82.25509, 9.39874],
                zoom: 12,
                pitch: 15,
                bearing: -30,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            onChapterExit: []
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

