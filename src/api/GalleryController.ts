import axios from "axios";

const API_ENDPOINT = "https://bandportal.cz/api/web/band/1/gallery"

export interface AlbumResponse {
	title: string;
	description: string;
	thumbnail: string;
	photos: string[]
}

export function fetchGallery(): Promise<AlbumResponse[]> {
	return new Promise<AlbumResponse[]>((resolve, reject) => {
		axios.get(API_ENDPOINT)
			.then(r => resolve(r.data))
			.catch(reject)
	})
}
