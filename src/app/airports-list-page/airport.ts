export interface Airport {
    key: string;
    name: string;
    country: string;
    city: string;
}

export interface ExtendedAirport {
    key: string;
    name: string;
    country: string;
    city: string;
    owner: string;
    build: string;
    image: string;
}
