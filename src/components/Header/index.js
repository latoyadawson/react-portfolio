import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    const {currentTab, setCurrentTab} = props;
    return(
        <header className="flex-row px-1">
            <h1 className="flex-start">
                <a data-testid="name" href="/"> Latoya's Portfolio</a>
            </h1>
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            >
            </Navigation>

        </header>

    )
}

export default Header;