import React from 'react';
import { HomeIcon, GlobeAltIcon, CurrencyDollarIcon, SwitchHorizontalIcon, LibraryIcon } from '@heroicons/react/solid'
import { PhantomWallet } from './';

export function Navbar(): JSX.Element {

    const Menus = [
        { title: "Home", icon: <HomeIcon className="h-6" style={{color: 'white'}}/>},
        { title: "Betting", icon: <GlobeAltIcon className="h-6" style={{color: 'white'}}/>},
        { title: "Earn", icon: <CurrencyDollarIcon className="h-6" style={{color: 'white'}}/>},
        { title: "Swap", icon: <SwitchHorizontalIcon className="h-6" style={{color: 'white'}}/>},
        { title: "Historic", icon: <LibraryIcon className="h-6" style={{color: 'white'}}/>}
    ];

    return(
        <div className={`w-44 h-screen p-5 pt-8 bg-betana_navy_blue relative`}>
            <div className='flex gap-x-4 items-center pb-4'>
                <h1 className={`text-white origin-left font-bold text-4xl duration-300`}>Betana</h1>
            </div>
            <ul className='pt-6'> 
                {Menus.map((menu, index) => (
                    <li 
                        key={index} 
                        className="text-white text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-betana_sky_blue rounded-md font-medium"
                    >
                        { menu.icon }
                        <span>{ menu.title }</span>
                    </li>
                ))} 
            </ul>
            <div className={`absolute bottom-0 left-0 pb-5 px-5`}>
                <PhantomWallet></PhantomWallet>
            </div>
        </div>
    );
    
}