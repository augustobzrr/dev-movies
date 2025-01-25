import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "38ed54c7ff8705034878dbdbe4d62d87",
		language: "pt-BR",
		page: 1,
	},
});

export default api;
