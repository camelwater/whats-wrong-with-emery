import * as NavBar from './NavBar.styles';
import * as NavMenu from './NavMenu.styles';
import React, { useState } from 'react';
import useActiveLocation from '@hooks/useActiveLocation';
import { ThemeToggle } from '@components/ThemeToggle';
import Search from '@components/Search';
import Link from 'next/link';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';

const menuVariants = {
    visible: {
        left: 0,
        transition: {
            when: 'afterChildren',
            type: 'spring',
            stiffness: 50,
            mass: 0.3,
            damping: 5.75
        }
    },
    hidden: {
        left: '-100%',
        transition: {
            when: 'beforeChildren',
            type: 'spring',
        }
    }
};

const fadeVariants = {
    visible: {
        opacity: 1,
        display: 'flex',
        transition: {
            duration: .25
        }
    },
    hidden: {
        opacity: 0,
        display: 'none',
        transition: {
            duration: 0.15
        }
    }
}

const Navigation: React.FC<{ home?: boolean }> = ({ home }) => {
    const Links = [
        {
            name: 'Board',
            link: '/message-board'
        },
        {
            name: 'News',
            link: '/news'
        }
    ];

    const [nav, setNav] = useState<boolean>(false);
    const [hoveredTab, setHoveredTab] = useState<string>('');
    const activePage = useActiveLocation();
    // const [menu, setMenu] = React.useState<string>(null);

    const ToggleNav = () => {
        setNav((prevState) => !prevState)
        // setNav(!nav);
        if (nav) {
            document.documentElement.style.overflowY = 'scroll';
        } else {
            document.documentElement.style.overflowY = 'hidden';
        }
    }

    return (
        <> 
                        
            {/* Desktop */}
            <NavBar.Nav variant={home?'home':'rest'}>
                <NavBar.NavContainer>
                    <NavBar.LinksContainer>
                        <Link href='/' passHref={true}>
                            <NavBar.TitleLinkText variant={home?'home':'rest'}>WWWE?</NavBar.TitleLinkText>
                        </Link>
                        <NavBar.NavItems>
                                {!home && Links.map((entry, index) => (
                                    <Link href={entry.link} passHref={true} key={index}>
                                        <NavBar.LinkBox 
                                            className={activePage===entry.link?'active':''} 
                                            onMouseOver={() => setHoveredTab(entry.link)}
                                            onMouseLeave={() => setHoveredTab('')}
                                        >
                                            <NavBar.NavLink>
                                                {entry.name}
                                            </NavBar.NavLink>
                                            {hoveredTab===entry.link && 
                                                <NavBar.LinkBoxBackground
                                                    layoutId="border"
                                                    transition={{duration: 0.15}}
                                                />
                                            } 
                                        </NavBar.LinkBox>
                                    </Link>
                                ))}
                        </NavBar.NavItems>
                    </NavBar.LinksContainer>
                    <NavBar.RightLinksContainer>
                        {/* <NavBar.ButtonLink 
                            variant='desktop'
                            href='https://www.github.com/camelwater/rr-blog' target='_blank'
                        >
                            Repo
                        </NavBar.ButtonLink> */}
                        <Search type='desktop' />
                        <ThemeToggle type='desktop' />
                    </NavBar.RightLinksContainer>
                    <NavMenu.MenuButton onClick={ToggleNav}> {/* Mobile Menu Button */}
                        {nav?<HiOutlineX size={25} />:<HiMenuAlt4 size={25}/>}
                    </NavMenu.MenuButton>
                </NavBar.NavContainer>
                
                {/* Mobile */}
                <NavMenu.ProxyMenuContainer 
                    onClick={ToggleNav} 
                    variants={fadeVariants}
                    initial='hidden'
                    animate={nav?'visible':'hidden'}
                />
                <NavMenu.MenuContainer
                    variants={menuVariants}
                    initial={'hidden'}
                    animate={nav?'visible':'hidden'}
                >
                    <NavMenu.Menu>
                        {
                            Links.map((entry, index) => (
                                <Link href={entry.link} key={index} passHref={true}>
                                    <NavMenu.MenuLink onClick={ToggleNav}>{entry.name}</NavMenu.MenuLink>
                                </Link>
                        ))}
                    </NavMenu.Menu>
                    <NavMenu.BottomMenu>
                        <ThemeToggle type='mobile' />
                        <Search type='mobile' />
                        {/* <NavBar.ButtonLink href='' target='_blank' variant='mobile'>
                            Repo
                        </NavBar.ButtonLink> */}
                    </NavMenu.BottomMenu>
                </NavMenu.MenuContainer>
            </NavBar.Nav>
        </>
    );
}

export default Navigation;