import Hero from "./hero";
import All from "./all";

import ScrollToTopButton from "./scroll";

import Collection from "./collection";

import {  Outlet} from 'react-router-dom';

function Home() {
    return (

        <>
            <Hero/>
            <All/>
                  <Outlet /> {/* 👈 This is where Shoes or Bags will be shown */}
             
        </>
      );
}

export default Home;