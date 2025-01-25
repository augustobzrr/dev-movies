import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

import Home from "../containers/home";
import Movies from "../containers/movies";
import Series from "../containers/series";

function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/filmes" element={<Movies />} />
				<Route path="/series" element={<Series />} />
			</Route>
		</Routes>
	);
}

export default Router;
