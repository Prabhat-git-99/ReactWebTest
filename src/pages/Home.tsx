import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

import Banner from '../components/Home';
import About from '../components/About';
import Sector from '../components/Sectors';

import Projects from '../components/Projects';
import Client from '../components/Clients';
import Member from '../components/Members';
import Footer from '../components/shared/Layout/Footer';

const useMountEffect = (fun: any) => useEffect(fun, []);


const Home = ( ) => {

    const myRef: any = useRef( null );
    const sectorRef: any = useRef( null );
    const aboutRef: any = useRef( null );
    const projectRef: any = useRef( null );
    const contactRef: any = useRef( null );
    // const homeRef: any = useRef( null );
    // const executeScroll = (a: any) => a.current.scrollIntoView();
    const executeScroll = ( a: string ) => {
        console.log( 'hissi')
        if (a === 'sector') {
            console.log( 'hii')
            sectorRef.current.scrollIntoView( );
        } 
        else if ( a === 'project' ) {
            projectRef.current.scrollIntoView( );
        }
        else if ( a === 'about' ) {
            aboutRef.current.scrollIntoView( );
        }
        else if ( a === 'contact' ) {
            contactRef.current.scrollIntoView( );
        }
        else if ( a === 'home' ) {
            myRef.current.scrollIntoView( );
        }

    }
    useMountEffect((  ) => executeScroll( myRef )); 

    return (
        <HomeWrapper ref = { myRef } >
            <section>
                <Banner fun= { executeScroll } />
            </section>
            <section ref = { aboutRef } >
                <About />
            </section>
            <section ref = { sectorRef } >
                <Sector />
            </section>
            <section ref = { projectRef } >
                <Projects />
            </section>
            <div className="client-member">
                <Client />
                <Member />
            </div>
            <section ref = { contactRef } >
                <Footer />            
            </section>
        </HomeWrapper>    
    )
}

const HomeWrapper = styled.div`

    /* background: black; */
    /* width: 100vw; */
    overflow-x: hidden;
    .client-member {
        /* background: #F8F8F8; */
        background: white;

    }

`;


export default Home;
