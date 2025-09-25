var config = {
    style: 'mapbox://styles/angle-kpr/cmfvluhcx003g01s938k02d2r',
    accessToken: 'pk.eyJ1IjoiYW5nbGUta3ByIiwiYSI6ImNtZjJybG10YzFkbnUycG80N3J5cDVid2QifQ.SoIeeUn_3CNLmzU2cgtv1w',
    showMarkers: true,
    markerColor: '#ff79d9',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Assignment 1: Story Map with GeoJSON and Mashups',
    subtitle: 'Phyllostomus hastatus migration in Bocas del Toro, Panama.',
    byline: 'Group 3: Jack Ge, Ben Smith, Kyra Meier',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Bocas del Toro',
            image: 'images/CoberturaBocosaUsoSuelo_2021_25k.tif',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-82.3010, 9.4158],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'images/globe.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-82.3010, 9.4158],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                { layer: 'points', circle-opacity: 1, duration: 5000 },
                { layer: 'points2', circle-opacity: 1, duration: 5000 },
                { layer: 'polygons', opacity: 0 },
                { layer: 'lines', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'points', opacity: 0 },
                { layer: 'points2', opacity: 0 }
            ],
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/pumpkin.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-82.3010, 9.4158],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Fo Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-82.3010, 9.4158],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
