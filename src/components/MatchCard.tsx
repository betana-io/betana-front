import React, {useEffect, useState } from 'react';

// Use Axios to get or post data into the server. At the moment i'm using a local file
import data from '../data/data.json';

export function MatchCard(match: any ): JSX.Element {
    
    return(
        <div className="h-96 min-h-full w-96 min-w-full max-w-screen-md bg-betana_navy_blue rounded-lg">
            <div className='pl-4 pt-4 relative'>
                <button
                    className="bg-red-700 hover:bg-betana_red text-white font-medium px-2 rounded-md"
                >
                    Live
                </button>
                <span className='text-betana_grey_light font-extralight right-0 absolute pr-4 text-sm'>
                    Started at <span>{ match.data.start_time }</span>
                </span>
            </div>
            <div className='text-betana_red grid justify-items-center font-light'>78:02</div>
            {/*<div className='text-betana_red grid justify-items-center font-light grid-cols-2 gap-x-1'>
                <div className='justify-self-end'>78:02</div> 
                <div className='justify-self-start text-sm'>+{ match.data.additionnal_time }</div> 
            </div>*/}
            <div className='grid gap-2 px-4'>
                <div className='grid content-center pb-16'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='grid justify-items-center content-end'>
                            <img src={ match.data.home_team.icon }  alt="" className='max-h-40'/>
                            <div className='text-white font-bold text-2xl'>{ match.data.home_team.name }</div>
                            { match.data.scorers !== undefined && (
                                match.data.scorers.map((scorer: any) => (
                                    <div className='text-betana_grey_light text-xs'>
                                        <span>{ scorer.name } </span>
                                        <span>{ scorer.goal_time }</span>
                                    </div>
                                ))
                            )}

                        </div>
                        <div className='grid justify-items-center '>
                            <div className='text-betana_grey_light font-bold text-lg'>{ match.data.league }</div>
                            <div className='text-white font-bold text-5xl'>
                                <span>1</span>
                                <span> : </span>
                                <span>0</span>
                            </div>
                        </div>
                        <div className='grid justify-items-center content-end'>
                            <img src={ match.data.visitor_team.icon }  alt="" className='max-h-40'/>
                            <div className='text-white font-bold text-2xl'>{ match.data.visitor_team.name }</div>
                            <div className='text-betana_grey_light text-xs'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content-end grid'>
                    <div className='grid grid-cols-5 justify-items-center text-white'>
                        <div className='col-start-2'>
                            <button className="px-4 w-22 h-8 rounded-md bg-betana_shadow_sky_blue  hover:bg-white hover:text-betana_shadow_sky_blue hover:font-semibold">
                                <span className='pr-4 text-betana_grey_light'>1</span>
                                <span className='font-semibold'>{ match.data.odds.home_team }</span>
                            </button>
                        </div>
                        <div className='col-start-3'>
                            <button className="px-4 w-22 h-8 rounded-md bg-betana_shadow_sky_blue hover:bg-white hover:text-betana_shadow_sky_blue hover:font-semibold">
                                <span className='pr-4 text-betana_grey_light'>X</span>
                                <span className='font-semibold'>{ match.data.odds.draw }</span>
                            </button>
                        </div>
                        <div className='col-start-4'>
                            <button className="px-4 w-22 h-8 rounded-md bg-betana_shadow_sky_blue  hover:bg-white hover:text-betana_shadow_sky_blue hover:font-semibold">
                                <span className='pr-4 text-betana_grey_light'>2</span>
                                <span className='font-semibold'>{ match.data.odds.visitor_team }</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}

