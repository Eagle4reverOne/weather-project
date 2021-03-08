

import { Map, Overlay } from 'pigeon-maps'

export default function MapMain({coord}) {
  return (
    <Map center={[coord.lat, coord.lon]} defaultZoom={12} width={600} height={400}>  
      <Overlay anchor={[coord.lat, coord.lon]} offset={[120, 79]}>
        {/* <img src='pigeon.jpg' width={240} height={158} alt='' /> */}
      </Overlay>
    </Map>
  )
}










// import { Map, Marker, Overlay } from 'pigeon-maps'

// const MapMain = ({coord, name}) =>  {
//     return(
//             <Map defaultCenter={[coord.lat, coord.lon]} defaultZoom={4} width={600} height={400}>
//         </Map>
//     )
// } 



// export default MapMain