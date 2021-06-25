import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const {currentTab, setCurrentTab} = props;
    return(
        <header className="align-items-center  px-1">
            <h1 className="d-flex justify-content-start mx-5 my-5">
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