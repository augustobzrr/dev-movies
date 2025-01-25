import Button from "../../components/Button";
import Slider from "../../components/slider";
import api from "../../services/api";
import { Background, Info, Poster, Container } from "./styles";
import { getImages } from "../../utils/getImages";
import { useState, useEffect } from "react";

function Home() {
	const [movie, setMovie] = useState();
	const [topMovies, setTopMovies] = useState();
	const [topSeries, setTopSeries] = useState();
	const [popularSeries, setPopularSeries] = useState();
	const [topPeople, setTopPeople] = useState();

	useEffect(() => {
		async function getMovies() {
			const {
				data: { results },
			} = await api.get("/movie/popular");

			setMovie(results[2]);
		}

		async function getTopMovies() {
			const {
				data: { results },
			} = await api.get("/movie/top_rated");
			
			setTopMovies(results);
		}

		async function getTopSeries() {
			const {
				data: { results },
			} = await api.get("/tv/top_rated");
			
			setTopSeries(results);
		}

		async function getPopularSeries() {
			const {
				data: { results },
			} = await api.get("/tv/popular");
		
			setPopularSeries(results);
		}

		async function getTopPeople() {
			const {
				data: { results },
			} = await api.get("/person/popular");
			
			setTopPeople(results);
		}

		getMovies();
		getTopMovies();
		getTopSeries();
		getPopularSeries();
		getTopPeople();

	}, []);

	return (
		<>
			{movie && (
				<Background img={getImages(movie.backdrop_path)}>
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<div>
								<Button red = {true}>Assista agora</Button>
								<Button red = {false}>Assista o trailer</Button>
							</div>

						</Info>
						<Poster>
							<img src={getImages(movie.poster_path)} alt="capa-do-filme"/>
						</Poster>
					</Container>
				</Background>
			)}
			{topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
			{topSeries && <Slider info={topSeries} title={'Top Séries'} />}
			{popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
			{topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
		</>
	);
}

export default Home;
