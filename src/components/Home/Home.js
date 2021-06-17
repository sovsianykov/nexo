import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSmall} from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import MainGrid from "../MainGrid/MainGrid";

const Home = () => {
    // const dispatch = useDispatch()
    // useEffect(() =>{
    //     dispatch(fetchSmall())
    // },[dispatch])
    // const state = useSelector(state => state)
    //  console.log(state)
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