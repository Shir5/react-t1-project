// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/molecules/Header.jsx'; // Adjust the path based on your project structure
import Nav from './components/molecules/Nav.jsx'; // Adjust the path based on your project structure
import ApiContainer from './components/templates/ApiContainer.jsx';
import TopLeftDescription from './components/organisms/TopLeftDescription.jsx';
import RightDescription from './components/organisms/RightDescription.jsx';
import { params1, params2, params3, params5 } from '@/assets/params';
import { getRolesRequestHandler } from './api/getRolesRequestHandler';
import { signUpRequestHandler } from './api/signUpRequestHandler.js';
import { getCodeRequestHandler } from './api/getСodeRequestHandler.js';
import { setStatusRequestHandler } from './api/setStatusRequestHandler.js';

function App() {
    return (
        <>
            <div className="scroll-container">
                <div id="section1" className="scroll-section">
                    <Nav />

                    <Header />
                    <ApiContainer
                        topLeftContent={<TopLeftDescription text="Hello from Component 1" />}
                        bottomLeftContent={{ parameters: params1 }}
                        rightContent={<RightDescription />}
                        requestHandler={getRolesRequestHandler}
                    />
                </div>
                <div id="section2" className="scroll-section">
                    <ApiContainer
                        topLeftContent={<TopLeftDescription text="Hello from Component 2" />}
                        bottomLeftContent={{ parameters: params2 }}
                        rightContent={<RightDescription />}
                        requestHandler={signUpRequestHandler}
                    />
                </div>
                <div id="section3" className="scroll-section">
                    <ApiContainer
                        topLeftContent={<TopLeftDescription text="Hello from Component 3" />}
                        bottomLeftContent={{ parameters: params3 }}
                        rightContent={<RightDescription />}
                        requestHandler={getCodeRequestHandler}
                    />
                </div>
                <div id="section4" className="scroll-section">
                    <ApiContainer
                        topLeftContent={<TopLeftDescription text="Hello from Component 4" />}
                        bottomLeftContent={{ parameters: params5 }}
                        rightContent={<RightDescription />}
                        requestHandler={setStatusRequestHandler}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
