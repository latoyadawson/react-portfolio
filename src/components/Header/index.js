import React from 'react';
import Navigation from '../Navigation';
import './style.css';


function Header(props) {
    const {currentTab, setCurrentTab} = props;
    return(
        <header className="px-1 header">
            <div className="pageTitle">

                    <a data-testid="name" href="/" className="title" > Latoya's Portfolio</a>
            </div>
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            >
            </Navigation>

        </header>

    )
}

export default Header;