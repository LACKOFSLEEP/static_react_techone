import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='top-strip'>
            <div className='top-strip-cont'>
                <div>
                    
                </div>
                <nav>
                    <ul className="nav-content" style={{ display: 'flex', gap: '30px', flexDirection: 'row', listStyleType: 'none' }}>
                        <li>SaaS</li>
                        <li>CiA</li>
                        <li>Industries</li>
                        <li>Experience</li>
                        <li>Resources</li>
                        <li>Company</li>
                    </ul>
                </nav>
                <div className="top-strip-right" style={{ display: 'flex', gap: '30px', flexDirection: 'row', marginRight: "30px"}}>    
                    <div>Search</div>
                    <div>SaaS Login</div>
                </div>
            </div>
        </header>
    );
};

export default Header;