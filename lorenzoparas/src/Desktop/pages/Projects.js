import FadeIn from 'react-fade-in';
import ProjectGrid from '../../components/ProjectGrid';

const contentStyle = {
    margin: '8vh 8vw 8vh 8vw',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#212121',
    marginLeft: '8vw',
	width: 'min(1200px, 65vw)',
	position: 'relative',
    flexDirection: 'column'
}

const headerStyle = {
    color: 'white',
    fontSize: '90px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row'
};

const subHeaderStyle = {
    color: 'lightgrey',
    fontSize: '45px'
};

function Projects() {
  	return (
        <FadeIn delay={200}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    /software-<span style={{color: '#FF4545'}}>projects</span>
                </div>
                <div style={{marginTop: '-45px'}}>
                    <h3 style={subHeaderStyle}>
                        (stuff i've worked on)
                    </h3>
                </div>
                <ProjectGrid/>
            </div>
        </FadeIn>
	);
}

export default Projects;
