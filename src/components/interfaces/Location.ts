interface LocationInterface {
    continent: string,
    coordinates: Coordinates,
    nearbyLandmarks: Landmarks[],
}

interface Coordinates {
    latitude: number,
    longitude: number,
}

interface Landmarks {
    name: string,
    type: string,
    distance: number,
}

export default LocationInterface