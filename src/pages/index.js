import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSec from '../components/HeroSec';
import InfoSection from '../components/InfoSection';
import { infoSecOne, infoSecTwo } from '../components/InfoSection/Data';
import ProductSec from '../components/ProductSec';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSec />
            <InfoSection {...infoSecOne}/>
            <InfoSection {...infoSecTwo}/>
            <ProductSec />
        </>
    );
};

export default Home;
