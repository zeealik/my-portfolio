import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import tecgym from '../../Assets/Projects/tecgym.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={tecgym}
							isBlog={false}
							title='TECGYM'
							description="It streamlines Gym and fitness centers management you can have control in the palm of your hand with “24/7 Mobile Monitoring”, When the dues are due, we've got your back with friendly reminders through our “whatsapp and sms services”, and much more!"
							demoLink='http://tecfolk.com/Projects/Tecgym.html'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
