export interface ArtistInterface {
    _id: string;
    name: string;
    description: string;
    image: string | null;
}

export type ArtistInterfaceWithoutId = Omit<ArtistInterface, 'id'>

export interface  AlbumInterface {
    _id: string;
    artist: ArtistInterface;
    title: string;
    year: string;
    image: string | null;
}

export type AlbumInterfaceWithoutId = Omit<AlbumInterface, '_id'>