import axios from "axios";

const API_ENDPOINT = "https://api.bandportal.1vishmusic.com/web/event"

export interface EventResponse {
	name: string
	date: string
	place: string
	webpage: string|null
	place_webpage: string|null
}

export function fetchEvents(): Promise<EventResponse[]> {
	return new Promise<EventResponse[]>((resolve, reject) => {
		axios.get<EventResponse[]>(API_ENDPOINT)
			.then(e => resolve(e.data))
			.catch(reject)
	})
}
