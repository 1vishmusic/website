import axios from "axios";

const API_ENDPOINT = "https://bandportal.cz/api/web/band/1/event"

export interface EventResponse {
	name: string
	date: string
	place: string
	webpage: string|null
	place_webpage: string|null
	tickets: object[]
}

export function fetchEvents(): Promise<EventResponse[]> {
	return new Promise<EventResponse[]>((resolve, reject) => {
		axios.get<EventResponse[]>(API_ENDPOINT)
			.then(e => resolve(e.data))
			.catch(reject)
	})
}
