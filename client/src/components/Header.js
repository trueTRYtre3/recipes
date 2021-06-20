import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

const Header = () => {
    const [activeItem, setActiveItem] = useState('home')

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={() => setActiveItem('home')}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={() => setActiveItem('messages')}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={() => setActiveItem('friends')}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={() => setActiveItem('logout')}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header
