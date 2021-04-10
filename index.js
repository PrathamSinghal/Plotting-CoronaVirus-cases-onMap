function updateMap() {   // update map function banaya jo ki updata karega 
    console.log("updating map with real time data")
    // ab mai data.json(jo url hai) ko fetch karunga.
    // ab mai kahunga ki fetch api ka use karo 
    fetch("./data.json").then(response => response.json()).then(rsp => {
        // console.log(rsp.data);
        rsp.data.forEach(element =>{
            latitude = element.latitude;
            longitude = element.longitude;
            // ek baar ye mere paas aa gya to ab mai is map mei place kar sakta hu...lekin map hai nahi abhi tak...


            cases = element.infected;
            // mai ab cases ko 0 se 255 ke scale pe rakhunga or jitne jyada number of cases hai utna hi dark mai rakhna chahata hu.
            if(cases>255){
                color = "rgb(255,0,0)"
            }
            else {
                color = `rgb(${cases},0,0)`
            }


            // Mark on the Map
            let marker = new mapboxgl.Marker({    
                draggable: false,
                color: color
                })
                .setLngLat([longitude,latitude])
                .addTo(map);
        });


        // // add the hover effect to the map

        // map.on('load', function () {
        //     map.loadImage(
        //     'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        //     // Add an image to use as a custom marker
        //     function (error, image) {
        //     if (error) throw error;
        //     map.addImage('custom-marker', image);
             
        //     gg = map.addSource(rsp.data);
        //     console.log(gg);
             
        //     // Add a layer showing the places.
        //     map.addLayer({
        //     'id': 'places',
        //     'type': 'symbol',
        //     'source': 'places',
        //     'layout': {
        //     'icon-image': 'custom-marker',
        //     'icon-allow-overlap': true
        //     }
        //     });
        //     }
        //     );
             
        //     // Create a popup, but don't add it to the map yet.
        //     var popup = new mapboxgl.Popup({
        //     closeButton: false,
        //     closeOnClick: false
        //     });
             
        //     map.on('mouseenter', 'places', function (e) {
        //     // Change the cursor style as a UI indicator.
        //     map.getCanvas().style.cursor = 'pointer';
             
        //     var coordinates = e.features[0].geometry.coordinates.slice();
        //     var description = e.features[0].properties.description;
             
        //     // Ensure that if the map is zoomed out such that multiple
        //     // copies of the feature are visible, the popup appears
        //     // over the copy being pointed to.
        //     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        //     }
             
        //     // Populate the popup and set its coordinates
        //     // based on the feature found.
        //     popup.setLngLat(coordinates).setHTML(description).addTo(map);
        //     });
             
        //     map.on('mouseleave', 'places', function () {
        //     map.getCanvas().style.cursor = '';
        //     popup.remove();
        //     });
        //     });
    })
    


}

let interval = 5000;
setInterval(updateMap,interval)
// updateMap(); // function ko call kiya.

//  updateMap() function kya kar rha hai....
//  ye is data.json endpoint par jaakar data le rha hai or saare ke saare markers ko populate kar rha hai...
