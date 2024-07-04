// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/molecules/Header.jsx'; // Adjust the path based on your project structure
import Nav from './components/molecules/Nav.jsx'; // Adjust the path based on your project structure
import ApiContainer from './components/templates/ApiContainer.jsx';
import TopLeftDescription from './components/organisms/TopLeftDescription.jsx';
import RightDescription from './components/organisms/RightDescription.jsx';
import { params1, params2, params3, params4 } from '@/assets/params';
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
                        topLeftContent={<TopLeftDescription headerText="Get Roles" text="Получить перечень ролей - направлений подготовки лагеря" />}
                        bottomLeftContent={{ parameters: params1 }}
                        rightContent={<RightDescription />}
                        requestHandler={getRolesRequestHandler}
                    />
                </div>
                <div id="section2" className="scroll-section">
                    <ApiContainer
                        topLeftContent={<TopLeftDescription headerText="Sign Up" text="Записать свои данные в таблицу кандидатов" />}
                        bottomLeftContent={{ parameters: params2 }}
                        rightContent={<RightDescription />}
                        requestHandler={signUpRequestHandler}
                    />
                </div>
                <div id="section3" className="scroll-section">
                    <ApiContainer
                        topLeftContent={<TopLeftDescription headerText="Get Code" text="Получить код из исходной строки 'email:code', в формате base64" />}
                        bottomLeftContent={{ parameters: params3 }}
                        rightContent={<RightDescription />}
                        requestHandler={getCodeRequestHandler}
                    />
                </div>
                <div id="section4" className="scroll-section">
                    <ApiContainer
                        topLeftContent={<TopLeftDescription headerText="Set Status" text="Установить статус записи в таблицу кандидатов" />}
                        bottomLeftContent={{ parameters: params4 }}
                        rightContent={<RightDescription />}
                        requestHandler={setStatusRequestHandler}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
