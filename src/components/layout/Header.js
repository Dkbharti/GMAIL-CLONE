import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    {/* menu icon */}<MenuIcon/>
                </div>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt=""/>
            </LogoWrapper>
            <SearchWrapper>
                <SerachBarWrapper>
                    <SearchIcon/>
                    <input type="text" placeholder='Search Mail'/>
                    <ArrowDropDownIcon/>
                </SerachBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <HelpOutlineIcon/>
                <SettingsIcon/>
                <AppsIcon/>
                <AccountCircleIcon/>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:270px auto 170px ;
    border-bottom: 1px solid lightgray;
    height:70px;
    align-items:center;
`
const LogoWrapper = styled.div``

const SearchWrapper = styled.div``

const SerachBarWrapper= styled.div``

const IconsWrapper = styled.div``