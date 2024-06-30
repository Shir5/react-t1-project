import React from 'react';
import './App.css';
import Header from './components/molecules/Header.jsx';
import ApiContainer from './components/templates/ApiContainer.jsx';
import TopLeftDescription from './components/organisms/TopLeftDescription.jsx';
import RightDescription from './components/organisms/RightDescription.jsx';
import { params1, params2, params3, params4 } from '@/assets/params';
import { getRolesRequestHandler } from './api/getRolesRequestHandler';

function App() {
    return (
        <>
            <Header />
            <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 1" />}
                bottomLeftContent={{ parameters: params1 }}
                rightContent={<RightDescription />}
                requestHandler={getRolesRequestHandler}
            />
            <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 2" />}
                bottomLeftContent={{ parameters: params2 }}
                rightContent={<RightDescription />}
                requestHandler={getRolesRequestHandler} // Use signUpRequestHandler here
            />
            <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 3" />}
                bottomLeftContent={{ parameters: params3 }}
                rightContent={<RightDescription />}
                requestHandler={getRolesRequestHandler}
            />
            <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 4" />}
                bottomLeftContent={{ parameters: params4 }}
                rightContent={<RightDescription />}
                requestHandler={getRolesRequestHandler}
            />
        </>
    );
}

export default App;
