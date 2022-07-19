import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='bg-light p-1 mt-5 mb-5 text-center'>There is three question that i try to give the ans.</h2>
            <Card border="dark" className='mb-5'>
                <Card.Body>
                    <Card.Title>Question 1: Difference between authorization and authentication?</Card.Title>
                    <Card.Text>
                        Ans: Authorization: Authorization determines what resources a user can access. It works through settings that are implemented and maintained by organization and always it takes place after suthentication. Authorization isn't visible to or changeable by the user. example: once their level of access in authorized, employees and hr managers can access different levels of data based on the permissions set by the organization.
                        Authentication: Authentication verifies who the user is. It works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authentication is the first step of a good identity and access management process. Authentication is visible to and partially changable by the user. Example: By verifying their idenitty, employee can gain access to an hr application that includes there personal pay information, vacation time, and 401k data
                    </Card.Text>
                </Card.Body>
            </Card>
           
            <Card border="dark" className='mb-5'>
                <Card.Body>
                    <Card.Title>Question 2: Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        Ans: Authorization: Authorization determines what resources a user can access. It works through settings that are implemented and maintained by organization and always it takes place after suthentication. Authorization isn't visible to or changeable by the user. example: once their level of access in authorized, employees and hr managers can access different levels of data based on the permissions set by the organization.
                        Authentication: Authentication verifies who the user is. It works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authentication is the first step of a good identity and access management process. Authentication is visible to and partially changable by the user. Example: By verifying their idenitty, employee can gain access to an hr application that includes there personal pay information, vacation time, and 401k data
                    </Card.Text>
                </Card.Body>
            </Card>
           
            <Card border="dark" >
                <Card.Body>
                    <Card.Title>Question 3: What other services does firebase provide other than authentication?</Card.Title>
                    <Card.Text>
                        Ans: Authorization: Authorization determines what resources a user can access. It works through settings that are implemented and maintained by organization and always it takes place after suthentication. Authorization isn't visible to or changeable by the user. example: once their level of access in authorized, employees and hr managers can access different levels of data based on the permissions set by the organization.
                        Authentication: Authentication verifies who the user is. It works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authentication is the first step of a good identity and access management process. Authentication is visible to and partially changable by the user. Example: By verifying their idenitty, employee can gain access to an hr application that includes there personal pay information, vacation time, and 401k data
                    </Card.Text>
                </Card.Body>
            </Card>
           
        

        </div>
    );
};

export default Blogs;