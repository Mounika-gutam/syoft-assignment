// src/components/Dashboard.js
import React from 'react';
import "./index.css"

class Dashboard extends React.Component {
    state = { user: JSON.parse(localStorage.getItem('user')) || {},}

    render() {
        const { user } = this.state;

        return (
            <div className='dashboard-container'>
                <h2 className='dashboard-title'>Dashboard</h2>
                <hr className='line' />
                {user ? (
                    <div>
                        <h1 className='dashboard-title2'>Top Technologies</h1>
                        <ul className='dashboard-list'>
                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/736x/5c/8e/e8/5c8ee8d6a388673f866e59163355d619.jpg" alt="artificial" />
                                <h1 className='card-title'>Artificial intelligence</h1>
                                <p className='card-description'>Artificial intelligence, in its broadest sense, is intelligence exhibited by machines, particularly computer systems.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/736x/05/3c/14/053c14dac1044f3203706ab86237d505.jpg" alt="artificial" />
                                <h1 className='card-title'>Quantum Computing</h1>
                                <p className='card-description'>A quantum computer is a computer that exploits quantum mechanical phenomena. On small scales, physical matter exhibits properties of both particles and waves.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/564x/41/84/56/418456d504f5c34b992b73640a776113.jpg" alt="robotics" />
                                <h1 className='card-title'>Robotics</h1>
                                <p className='card-description'>Robotics is the interdisciplinary study and practice of the design, construction, operation, and use of robots.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/564x/12/5f/fa/125ffa63eb5c0c6ceb660bbbc6d052db.jpg" alt="blockchanin" />
                                <h1 className='card-title'>Blockchain</h1>
                                <p className='card-description'>Blockchain is helping to keep data more secure and creating a reliable history of transactions. The applications extend far beyond that of cryptocurrency.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/736x/19/19/4d/19194d842c31c8bbd12ed8c3a023eaff.jpg" alt="cybersecurity" />
                                <h1 className='card-title'>Cyber Security</h1>
                                <p className='card-description'>Computer security, cybersecurity, digital security, or information technology security is the protection of computer systems.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img  className='dashboard-card-image' src="https://i.pinimg.com/564x/5f/df/35/5fdf35f12356d14007de757e182943d5.jpg" alt="machine learning" />
                                <h1 className='card-title'>Michane Learning</h1>
                                <p className='card-description'>Machine Learning the subset of AI, is also being deployed in all kinds of industries, creating a huge demand for skilled professionals.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/236x/46/1d/78/461d784baa72ec21c31fd3f83c1843db.jpg" alt="3d printing" />
                                <h1 className='card-title'>3D Printing</h1>
                                <p className='card-description'>3D Printing. A key trend in innovation and technology is 3D printing which is used to formulate prototypes.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/564x/46/c5/8d/46c58da5d5b6ca87ef0fccee58d2711a.jpg" alt="5g" />
                                <h1 className='card-title'>5G</h1>
                                <p className='card-description'>5G. The fifth generation of wireless technology, 5G, is not just about faster internet on our smartphones. </p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/564x/04/4b/4c/044b4cf1f1cd43d1afe4a3d2e53ff2d5.jpg" alt="devops" />
                                <h1 className='card-title'>DevOps</h1>
                                <p className='card-description'>DevOps is a set of practices that focuses on collaboration and communication between software development (Dev) and IT operations (Ops) teams.</p>
                            </li>

                            <li className='dashboard-item'>
                                <img className='dashboard-card-image' src="https://i.pinimg.com/736x/ae/70/96/ae7096e8c42185fbc1eda6b54eefa4f8.jpg" alt="edge computing" />
                                <h1 className='card-title'>Edge Computing</h1>
                                <p className='card-description'>Edge computing allows this data to be processed closer to the point of creation to minimize the latency and increase speeds.</p>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <p>No user information available</p>
                )}
            </div>
        );
    }
}

export default Dashboard;
