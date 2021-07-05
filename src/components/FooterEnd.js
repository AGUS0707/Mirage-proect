import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FooterEnd = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="footerEnd">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src="/images/c.svg" alt=""/>
                    <p className="text-white mb-0">All Rights Reserved By Mirage 2020</p>
                </div>
                
                <div className="language d-flex align-items-center">
                    <img src="/images/language.svg" alt=""/>

                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Eng
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Ru</DropdownItem>
                            <DropdownItem>Uz</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>
            </div>
        </div>
    );
};

export default FooterEnd;