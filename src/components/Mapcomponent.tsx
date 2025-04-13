// import { Map as OlMap, View as OlView } from "ol";
// import TileLayer from "ol/layer/Tile";
// import OSM from "ol/source/OSM";
// import { useEffect } from "react";
// // import { GeoCoordinates } from "../store/app-state-context";

// // const markers: {
// //   image_url: string;
// //   position: GeoCoordinates;
// //   text: string;
// // }[] = [
// //   {
// //     image_url:
// //       "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// //     position: { lat: 44, lng: -80 },
// //     text: "オウム",
// //   },
// //   {
// //     image_url:
// //       "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// //     position: { lat: 42, lng: -74 },
// //     text: "オウム",
// //   },
// //   {
// //     image_url:
// //       "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     // target_text: "Children",
// //     // target_language: "ja",
// //     position: { lat: 41, lng: -70 },
// //     text: "子供達",
// //   },
// //   {
// //     image_url:
// //       "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     text: "女の子",
// //     position: { lat: 45, lng: -79 },
// //   },
// //   {
// //     image_url:
// //       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600",
// //     text: "犬",
// //     position: { lat: 42, lng: -81 },
// //   },
// //   {
// //     image_url:
// //       "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     text: "घोड़ा",
// //     position: { lat: 40, lng: -76 },
// //   },
// // ];

// export default function MapComponent() {
//   useEffect(() => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const ol_map = new OlMap({
//       target: "map",
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new OlView({
//         center: [0, 0],
//         zoom: 2,
//       }),
//     });
//   }, []);

//   return (
//     <div
//       style={{
//         height: "90vh",
//         width: "100%",
//       }}
//       id="map"
//     ></div>
//   );
// }

// import { Map as OlMap, View as OlView } from "ol";
// import TileLayer from "ol/layer/Tile";
// import OSM from "ol/source/OSM";
// import { useEffect } from "react";
// import { GeoCoordinates } from "../store/app-state-context";
// import { fromLonLat } from "ol/proj";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { Icon, Style } from "ol/style";
// import VectorSource from "ol/source/Vector";
// import VectorLayer from "ol/layer/Vector";

// const markers: {
//   image_url: string;
//   position: GeoCoordinates;
//   text: string;
// }[] = [
//   {
//     image_url:
//       "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     position: { lat: 44, lng: -80 },
//     text: "オウム",
//   },
//   {
//     image_url:
//       "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     position: { lat: 42, lng: -74 },
//     text: "オウム",
//   },
//   {
//     image_url:
//       "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     position: { lat: 41, lng: -70 },
//     text: "子供達",
//   },
//   {
//     image_url:
//       "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     text: "女の子",
//     position: { lat: 45, lng: -79 },
//   },
//   {
//     image_url:
//       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     text: "犬",
//     position: { lat: 42, lng: -81 },
//   },
//   {
//     image_url:
//       "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     text: "घोड़ा",
//     position: { lat: 40, lng: -116 },
//   },
// ];

// export default function MapComponent() {
//   useEffect(() => {
//     const ol_map = new OlMap({
//       target: "map",
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new OlView({
//         center: [0, 0],
//         zoom: 2,
//       }),
//     });

//     const vectorSource = new VectorSource();

//     markers.forEach((marker) => {
//       const feature = new Feature({
//         geometry: new Point(fromLonLat([marker.position.lng, marker.position.lat])),
//         name: marker.text,
//       });

//       feature.setStyle(
//         new Style({
//           image: new Icon({
//             src: marker.image_url,
//             scale: 0.1,
//           }),
//         })
//       );

//       vectorSource.addFeature(feature);
//     });

//     const vectorLayer = new VectorLayer({
//       source: vectorSource,
//     });

//     ol_map.addLayer(vectorLayer);
//   }, []);

//   return (
//     <div
//       style={{
//         height: "90vh",
//         width: "100%",
//       }}
//       id="map"
//     ></div>
//   );
// }

import { Map as OlMap, View as OlView } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Style, Text, Fill, Stroke } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

const states = [
  { position: { lat: 28.7041, lng: 77.1025 }, text: "दिल्ली" },
  // { position: { lat: 19.076, lng: 72.8777 }, text: "महाराष्ट्र" },
  { position: { lat: 13.0827, lng: 80.2707 }, text: "தமிழ்நாடு" },
  { position: { lat: 22.5726, lng: 88.3639 }, text: "পশ্চিমবঙ্গ" },
  { position: { lat: 12.9716, lng: 77.5946 }, text: "ಕರ್ನಾಟಕ" },
  { position: { lat: 23.2599, lng: 77.4126 }, text: "मध्य प्रदेश" },
  { position: { lat: 26.9124, lng: 75.7873 }, text: "राजस्थान" },
  { position: { lat: 21.1702, lng: 72.8311 }, text: "ગુજરાત" },
  { position: { lat: 17.385, lng: 78.4867 }, text: "తెలంగాణ" },
  // { position: { lat: 22.7196, lng: 75.8577 }, text: "मध्य प्रदेश" },
  { position: { lat: 18.5204, lng: 73.8567 }, text: "महाराष्ट्र" },
  { position: { lat: 30.7333, lng: 76.7794 }, text: "ਪੰਜਾਬ" },
  { position: { lat: 26.8467, lng: 80.9462 }, text: "उत्तर प्रदेश" },
  // { position: { lat: 25.3176, lng: 82.9739 }, text: "उत्तर प्रदेश" },
  // { position: { lat: 24.5854, lng: 73.7125 }, text: "राजस्थान" },
  { position: { lat: 23.3441, lng: 85.3096 }, text: "झारखंड" },
  // { position: { lat: 21.1458, lng: 79.0882 }, text: "महाराष्ट्र" },
  { position: { lat: 10.8505, lng: 76.2711 }, text: "കേരള" },
  { position: { lat: 20.9517, lng: 85.0985 }, text: "ଓଡ଼ିଶା" },
  { position: { lat: 25.0961, lng: 85.3131 }, text: "बिहार" },
  { position: { lat: 26.2006, lng: 92.9376 }, text: "অসম" },
  { position: { lat: 31.1048, lng: 77.1734 }, text: "हिमाचल प्रदेश" },
  { position: { lat: 34.0837, lng: 74.7973 }, text: "जम्मू और कश्मीर" },
  { position: { lat: 15.2993, lng: 74.124 }, text: "गोवा" },
  { position: { lat: 27.533, lng: 88.5122 }, text: "সিকিম" },
  { position: { lat: 25.467, lng: 91.3662 }, text: "মেঘালয়" },
  { position: { lat: 24.817, lng: 93.9368 }, text: "মণিপুর" },
  { position: { lat: 23.1645, lng: 92.9376 }, text: "मिजोरम" },
  { position: { lat: 16.5062, lng: 80.648 }, text: "ఆంధ్ర ప్రదేశ్" },
  {position: { lat: 21.2514, lng: 81.6296 }, text: "छत्तीसगढ" },
  { position: { lat: 30.3165, lng: 78.0322 }, text: "उत्तराखंड" },
  { position: { lat: 34.2268, lng: 77.5619 }, text: "ལ་དྭགས་" },

];

export default function MapComponent() {
  useEffect(() => {
    const ol_map = new OlMap({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new OlView({
        center: fromLonLat([78.9629, 20.5937]),
        zoom: 5,
      }),
    });

    const vectorSource = new VectorSource();

    const indiaFeature = new Feature({
      geometry: new Point(fromLonLat([78.9629, 20.5937])),
      name: "भारत",
    });

    indiaFeature.setStyle(
      new Style({
        text: new Text({
          text: "भारत",
          font: "15px Calibri,sans-serif",
          fill: new Fill({ color: "#000" }),
          stroke: new Stroke({
            color: "#fff",
            width: 3,
          }),
        }),
      })
    );

    vectorSource.addFeature(indiaFeature);

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    ol_map.addLayer(vectorLayer);

    ol_map.getView().on("change:resolution", () => {
      const zoom = ol_map.getView().getZoom();
      vectorSource.clear();

      if (zoom && zoom < 4) {
        vectorSource.addFeature(indiaFeature);
      } else {
        states.forEach((state) => {
          const feature = new Feature({
            geometry: new Point(
              fromLonLat([state.position.lng, state.position.lat])
            ),
            name: state.text,
          });

          feature.setStyle(
            new Style({
              text: new Text({
                text: state.text,
                font: "14px Calibri,sans-serif",
                fill: new Fill({ color: "#000" }),
                stroke: new Stroke({
                  color: "#fff",
                  width: 2,
                }),
              }),
            })
          );

          vectorSource.addFeature(feature);
        });
      }
    });
  }, []);

  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
      }}
      id="map"
    ></div>
  );
}
