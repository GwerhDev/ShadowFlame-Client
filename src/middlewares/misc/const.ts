import { environment } from "../../environment";

export const API_URL: string = environment === "development" ? 'http://localhost:8080' : 'https://shadowflame-api.fly.dev';
