import React  from 'react';

import Navbar from "../Navbar/Navbar";
import MainGrid from "../MainGrid/MainGrid";

const Home = () => {

    return (
        <>
            <div className="home">
                <Navbar/>
                <MainGrid/>
            </div>
        </>
    );
};

export default Home;
