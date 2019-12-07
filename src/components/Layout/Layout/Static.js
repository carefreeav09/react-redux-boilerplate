import React, { Component } from 'react';

import AppHeader from '../../Layout/Header/';
import AppFooter from '../../Layout/Footer/';

class StaticLayout extends Component {

    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {})
        });

        return (
            <section className="body-wrapper">
                <section className="body-main">
                    <AppHeader/>
                    {children}
                    <AppFooter/>
                </section>
            </section>
        );
    }
}

export default StaticLayout;
