import React from 'react';
import './About.css';
import aboutImage from '../../../src/images/about/md-shamsul-alam-sabuj.jpg'
import { Card } from 'react-bootstrap';
const About = () => {
    return (
        <div className='container'>
            <div className='w-50 mx-auto mt-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={aboutImage} />
                    <Card.Body>
                        <Card.Title>Md Shamsul Alam Sabuj</Card.Title>
                        <Card.Text>
                            Junor Web Developre
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
           <div className='mt-5'>
           <h2 className='bg-light'>Dear Wellwishers,</h2>
            <p>This is sabuj. Currently i am learning web development from programming hero. This is bit challinging for me because i am an audio professional. Beside my job i try to manage every day atlist 3-5 hours for learning code. I lost SCIC but I will come back again & i am trying to learn as much as possible. I set a goal that within December i will strongly stand to get inter this IT industry. Please keep me in your prayers.
            </p>
            <span>Best Regards</span>
            <h3>Md Shamsul Alam Sabuj</h3>
            
           </div>

        </div>
    );
};

export default About;