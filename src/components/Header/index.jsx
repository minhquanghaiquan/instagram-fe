import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'features/Authentication/authSlice';

Header.propTypes = {
    
};

function Header(props) {
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(logOut());
        localStorage.setItem('auth-token', '');
    }
    
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <NavLink
                        exact
                        className="header__link"
                        to="/"
                        activeClassName="header__link--active"
                        >
                        Instagram
                        </NavLink>
                    </Col>

                    <Col xs="auto">
                        {
                            userData.user? (
                                <button onClick={LogOut}>
                                    LogOut
                                </button>
                            ): (
                                <>
                                <NavLink
                                    exact
                                    className="header__link"
                                    to="/auth/login"
                                    activeClassName="header__link--active"
                                    >
                                    Login
                                </NavLink>

                                <NavLink
                                    exact
                                    className="header__link"
                                    to="/auth/logup"
                                    activeClassName="header__link--active"
                                    >
                                    Logup
                                </NavLink>
                                </>
                            )
                        }
                    </Col>
            </Row>
        </Container>
        </header>
    );
}

export default Header;