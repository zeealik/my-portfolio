import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import TecGYM from '../../Assets/Projects/tecgym.png';
import Striver from '../../Assets/Projects/striver.png';
import UsmaniaAndSons from '../../Assets/Projects/usmania-and-sons.png';

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
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}
					className='row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'
				>
					<Col className='project-card'>
						<ProjectCard
							imgPath={TecGYM}
							isBlog={false}
							title='TECGYM'
							description="It streamlines Gym and fitness centers management you can have control in the palm of your hand with “24/7 Mobile Monitoring”, When the dues are due, we've got your back with friendly reminders through our “whatsapp and sms services”, and much more!"
							demoLink='http://tecfolk.com/Projects/Tecgym.html'
						/>
					</Col>
					<Col className='project-card'>
						<ProjectCard
							imgPath={UsmaniaAndSons}
							isBlog={false}
							title='Usmania & Sons'
							description='Leading real state management tool for all kind of properties'
							demoLink='https://usmaniaandsons.com/login-signup'
						/>
					</Col>
				</Row>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}
					className='row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'
				>
					<Col className='project-card'>
						<ProjectCard
							imgPath={Striver}
							isBlog={false}
							title='Striver'
							description='Striver is an abuse-free social media platform, created by soccer players for fans.'
							demoLink='https://apps.apple.com/us/app/striver-made-for-fans/id1641365765'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
