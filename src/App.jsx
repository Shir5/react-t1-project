import React from 'react';
import './App.css';
import Header from './components/molecules/Header.jsx';
import ApiContainer from './components/templates/ApiContainer.jsx';
import TopLeftDescription from './components/organisms/TopLeftDescription.jsx';
import BottomLeftDescription from './components/organisms/BottomLeftDescription.jsx';
import RightDescription from './components/organisms/RightDescription.jsx';
import { params1, params2, params3, params4 } from '@/assets/params';

function App() {
    return (
        <>
            <Header />
            <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 1" />}
                bottomLeftContent={<BottomLeftDescription parameters={params1} />}
                rightContent={<RightDescription />}
            />
            <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 2" />}
                bottomLeftContent={<BottomLeftDescription parameters={params2} />}
                rightContent={<RightDescription />}
            />
            <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 3" />}
                bottomLeftContent={<BottomLeftDescription parameters={params3} />}
                rightContent={<RightDescription />}
            />
                        <ApiContainer
                topLeftContent={<TopLeftDescription text="Hello from Component 4" />}
                bottomLeftContent={<BottomLeftDescription parameters={params4} />}
                rightContent={<RightDescription />}
            />
        </>
    );
}

export default App;
