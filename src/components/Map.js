import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet';

function Map(props) {
    return(
        <MapContainer className="map" center={[2.5, 112.5]} zoom={3} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                opacity={20}
            />
            {props.data.map((statistic, index) => {
                const updated = new Date(statistic.updated);
                return (
                    <Marker key={index} position={[statistic.countryInfo.lat, statistic.countryInfo.long]}>
                        <Popup>
                            <h2><img src={statistic.countryInfo.flag} height="20px" width="25px"/> {statistic.country}</h2>
                             <strong>Confirmed:</strong> {statistic.cases.toLocaleString()}<br/>
                             <strong>Death:</strong> {statistic.deaths.toLocaleString()}<br/>
                             <strong>Recovered:</strong> {statistic.recovered.toLocaleString()}<br/>
                             <strong>Last Update:</strong> {updated.getDate()}/{updated.getMonth() + 1}/{updated.getFullYear()} {updated.getHours()}:{updated.getMinutes()}
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}

export default Map;