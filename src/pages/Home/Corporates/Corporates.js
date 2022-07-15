import React from 'react';

import package1 from '../../../images/packages/packages1.png';
import package2 from '../../../images/packages/packages2.png';
import package3 from '../../../images/packages/packages3.png';
import Corporate from '../Corporate/Corporate';



 

const corporates = [
    {id:1, name: 'Trade License', price: '5000tk', description: 'Accessories, E-Commerce, Electric & Electronics, Pharmacy & Store', img:  package1},    
    {id:2, name: 'Trademark', price: '15000tk', description: 'Logo, Mark Name, Product,  Service, Certification Mark, Collective Mark', img:  package2},    
    {id:3, name: 'IRC & ERC', price: '50000tk', description: 'Trade License, TIN, Memorandum of Article, Company Registration', img:  package3}
]
const Corporates = () => {
    return (
        <div className='container'>
            <h2 className='text-center p-5'>Corporate Packages </h2>
            <div className="row">
                {
                    corporates.map(corporate => <Corporate
                    key={corporate.id}
                    corporate={corporate}
                    ></Corporate>)
                }
            </div>
        </div>
    );
};

export default Corporates;









//import React from 'react';
// import './Packages.css';
// import package1 from '../../../images/packages/packages1.png';
// import package2 from '../../../images/packages/packages2.png';
// import package3 from '../../../images/packages/packages3.png';
// import package4 from '../../../images/packages/packages4.png';
// import Package from '../Corporate/Corporate';




// const corporates = [
//     {id:1, name: 'Trade License', price: '5000tk', description: 'Accessories, E-Commerce, Electric & Electronics, Pharmacy & Store', img:  package1},    
//     {id:2, name: 'Trademark', price: '15000tk', description: 'Logo, Mark Name, Product,  Service, Certification Mark, Collective Mark', img:  package2},    
//     {id:3, name: 'IRC & ERC', price: '50000tk', description: 'Chamber of Commerce Membership, Trade License, TIN, Memorandum of Article, Company Registration', img:  package3},    
//     {id:4, name: 'Company Registration', price: '20000tk', description: 'Limited Company, One Person Company, Proprietorship, Joint Venture, Foundation / Society / Trust', img:  package4},    
    

// ]

// const Packages = () => {
//     return (
//         <div className='container'>
//             <h2 className='text-center p-5'>Corporate Packages</h2>
//             <div className="row">
//             {
//                 corporates.map( corporate => <Corporete></Corporete>)
//             }
//             </div>
//         </div>
//     );
// };

// export default Corporates;


// [
//     {
//         "id": 1,
//         "name": "Trade License",
//         "price": "5000",
//         "description": "This is one of many areas of professional services where our Company is well ahead of the competition. Our Tax Consultancy team provides comprehensive taxation solutions for both individual and corporate clients.",
//         "img": "https://i.ibb.co/DVFgtRS/packages1.png"
//     },
//     {
//         "id": 2,
//         "name": "Trademark",
//         "price": "10000",
//         "description": "We are experienced VAT Specialists who can provide precise information and advice regarding the procedure of registration, amount of VAT that needs to be paid and ensure all paper works relating to VAT and other taxes are up to date, thereby, minimizing the chance of any error.",
//         "img": "https://i.ibb.co/Wsxn3Rg/packages4.png"
//     },
//     {
//         "id": 3,
//         "name": "IRC & ERC",
//         "price": "50000",
//         "description": "The financial audit service is not limited to the issuance of an audit report on the Annual Accounts with a standard maximum quality. It is designed to identify potential risks and areas for improvement in internal accounting control processes and administration of our customers.",
//         "img": "https://i.ibb.co/zxxqktZ/packages3.png"
//     },
//     {
//         "id": 4,
//         "name": "Company Registration",
//         "price": "300000",
//         "description": "We offer business advisory services such as business strategy and planning, operational reviews, board effectiveness, benchmarking and more.",
//         "img": "https://i.ibb.co/0D9CRKv/services4.jpg"
//     }
// ]
