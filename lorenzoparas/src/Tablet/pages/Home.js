import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import FadeIn from 'react-fade-in';
import ProfilePicture from '../../images/dp.jpg';

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
}

const homeStyle = {
	marginLeft: '8vw',
	width: 'min(1200px, 84vw)',
	backgroundColor: '#212121',
	position: 'relative',
	display: 'flex',
    flexDirection: 'column',
};

const headerStyle = {
    color: 'white',
    fontSize: '80px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row'
};

const subHeaderStyle = {
    color: 'lightgrey',
    fontSize: '40px'
};

const paragraphStyle = {
    fontFamily: 'Roboto',
    color: 'lightgrey',
    fontSize: '18px',
    fontWeight: 100,
    lineHeight: 1.5,
    fontStretch: 'ultra-expanded'
};

const dpStyle = {
    width: '140px',
    height: '140px',
    position: 'relative'
}

const headerTextStyle = {
    width: 'fit-content'
}

const headerImageStyle = {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    marginLeft: '20px'
}

function Home() {
    return (
        <div style={wrapperStyle}>
            <div style={homeStyle}>
                <div style={headerStyle}>
                    <div style={headerTextStyle}>
                        <Typist style={{border: '2px solid red'}}>
                            hey, I'm <span style={{color: '#FF4545'}}>Lorenzo!</span>
                        </Typist>
                    </div>
                    <div style={headerImageStyle}>
                        <FadeIn delay={1500}>
                            <img style={dpStyle} src={ProfilePicture} alt="profile-pic"/>
                        </FadeIn>
                    </div>
                </div>
                <FadeIn delay={1800}>
                    <div style={{marginTop: '-35px'}}>
                        <h3 style={subHeaderStyle}>
                            I find creating tech to be pretty enjoyable.
                        </h3>
                    </div>
                    <div style={{marginTop: '-25px'}}>
                        <p style={paragraphStyle}>
                            I'm a software engineer based in <span style={{color: '#FF4545'}}>Sydney, Australia</span>,
                            recently graduating from my computer science degree at The University of New South Wales.
                            I have passion in the realm of front-end development and love creating software
                            in general.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

export default Home;
