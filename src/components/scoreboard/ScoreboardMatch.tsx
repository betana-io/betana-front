import React, {useEffect, useState } from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline'

import data from '../../data/data.json';

export function ScoreboardMatch(): JSX.Element {

    const [active, setActive] = useState(false);

    const choosenBet = async (bet: String) => {
        console.log(bet)
    }

    return(
        <div>
            { data.map( (data, index) => (
                <div key={ index } className='cursor-pointer'>
                    <div className="h-10 grid grid-cols-5 p-2 px-5 text-betana_grey_light">
                        <div><span>{ data.start_date }</span> - <span>{ data.start_time }</span></div>
                        <div className='col-start-2 col-span-3 justify-self-center flex items-center'>
                            <div className='flex items-center'>
                                <span className='px-2'>{ data.home_team.name }</span>
                                <img src={ data.home_team.icon }  alt="" width={35}/>
                            </div>
                            <div className='px-2'>
                                <span>1</span> : <span>0</span>
                            </div>
                            <div className='flex items-center'>
                                <img src={ data.visitor_team.icon }  alt="" width={22}/>
                                <span className='px-2'>{ data.visitor_team.name }</span>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 col-end-6'> 
                            <div>
                                <button 
                                    className="px-4 w-16 h-8 rounded-md bg-betana_shadow_sky_blue hover:bg-white hover:text-betana_navy_blue hover:font-semibold"
                                    onClick={() => choosenBet("1")}
                                >
                                    { data.odds.home_team }
                                </button>
                            </div>
                            <div>
                                <button 
                                    className="px-4 w-16 h-8 rounded-md bg-betana_shadow_sky_blue hover:bg-white hover:text-betana_navy_blue hover:font-semibold"
                                    onClick={() => choosenBet("X")}
                                >
                                    { data.odds.draw }
                                </button>
                            </div>
                            <div>
                                <button 
                                    className="px-4 w-16 h-8 rounded-md bg-betana_shadow_sky_blue hover:bg-white hover:text-betana_navy_blue hover:font-semibold"
                                    onClick={() => choosenBet("2")}
                                >
                                    { data.odds.visitor_team }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='p-2'>
                        <hr style={{ borderColor: '#1B2D5E' }} />
                    </div>
                </div>
            ))} 
        </div>
    );
    
}
