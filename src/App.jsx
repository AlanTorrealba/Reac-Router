import { lazy, Suspense } from "react";
import "./App.css";
// import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
// import Page404 from "./pages/404";
import SearchPage from "./pages/SearchPage";
import { Router } from "./Router";
import Route from "./Route";

const LazyHomePage = lazy(() => 
  import('./pages/Home.jsx')
);
const LazyAboutPage = lazy(() => 
  import('./pages/About.jsx')
);
const LazyPage404 = lazy(() => 
  import('./pages/404.jsx')
);

const appRoutes = [
  {
    path: "/search/:query",
    component: SearchPage,
  }
];
function App() {
  return (
    <main>
      <Suspense fallback={<h1>...loading</h1>}>
        
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage}></Route>
          <Route path='/about' Component={LazyAboutPage}></Route>
        </Router>
      </Suspense>
      
    </main>
  );
}

export default App;
