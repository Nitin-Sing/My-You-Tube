import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";


const appRouter = createBrowserRouter([{
  
  path:"/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>

    },

    {
      path:"watch",
      element:<WatchPage/>
    },

    // below part is just added just for reading new hooks not part of project
    {
      path:"demo",
      element:
      <>
      <Demo/>
      <Demo2/>
      </>
    },
  ]



}])


function App() {
  
  return (
    <Provider store = {store}>
    <div>
      <Head/>
      <RouterProvider router = {appRouter}/>
      






      {/**
       * 
       * 
       * Head
       * Body
       *  Sidebar
       *    MenuItems
       *  MainContainer
       *      Buttonlist
       *      VideoContainer
       *      VideoCard
       * 
       * 
       * 
       * now installed redux tool kit
       * installed react-redux
       * configure store
       * created appSlice
       * Provided store to whole app 
       * making setup for using router 
       *   - installing react-router-dom 
       * 
       * 
       * using useSearchParams instead of useParams because useParams give id when url contain something
       * like "/123"
       * 
       */}
    </div>
    </Provider>
  );
}

export default App;
