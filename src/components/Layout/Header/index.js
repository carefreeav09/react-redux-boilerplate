import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavItem,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle
} from 'mdbreact'

const AppHeader = props => {
    return (
        <div>
            <MDBNavbar expand="md" fixed="top" scrolling className={'elegant-color-dark'}>
                <div className="container">
                    <div className="d-flex flex-fill w-100 justify-content-center">
                        <div className={'mr-5'}>
                            <h4 className={'white-text'}>Header</h4>
                        </div>
                    </div>
                </div>
            </MDBNavbar>
        </div>
    );
};

export default withRouter(AppHeader);