import React from "react";
import {Button, Form, Input} from "antd";
import {withRouter , Link} from "react-router-dom";

const FooterPage = () => {
    return (
        <footer className="page-footer font-small elegant-color-dark">
            <h4 className={'text-center white-text mb-0'}>Footer here</h4>
        </footer>
    );
}

export default withRouter(FooterPage);