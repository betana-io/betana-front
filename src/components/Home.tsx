import React from 'react';
import { MatchCard, Scoreboard } from './';

// Use Axios to get or post data into the server. At the moment i'm using a local file
import matches from '../data/data.json';

export function Home(): JSX.Element {

    const Numbers = [ 1, 2, 3 ];

    return(
        <div className="h-screen w-screen bg-betana_sky_blue p-12 grid gap-6">
            {/* <div>
                <img src={ wallpaper } alt="Wallpaper" width={10000}/>
            </div> */}

            <div className='grid gap-4'>
                <div>
                    <div className='grid grid-cols-6'>
                        <div className='text-white col-span-5 text-lg'>
                            <span className='font-bold'>Lives </span><span>Matches</span>
                        </div>
                        <div className='grid col-end-7'>
                            <button 
                                className="px-4 w-22 h-8 rounded-md bg-betana_navy_blue text-white justify-self-end hover:bg-white hover:text-betana_navy_blue hover:font-semibold"
                            >
                                All live
                            </button>
                        </div>
                    </div>
                </div>

                <div className='row-span-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-10'>
                    { matches.map((match) => (
                        <MatchCard key={ match.id } data={ match }></MatchCard>
                    )) }
                </div>

                <div className=''>
                    <div className='flex gap-x-1'>
                        { Numbers.map((number, index) => (
                            <button key={ number } className="w-5 h-1 rounded-md bg-betana_shadow_sky_blue hover:bg-white"></button>
                        )) } 
                    </div>
                </div>
            </div>

            <div className='grid gap-4'>
                <div className='grid grid-cols-6'>
                    <div className='text-white col-span-5 text-lg'>
                    <span className='font-bold'>Football </span><span>Upcoming</span>
                    </div>
                    <div className='grid col-end-7'>
                        <button 
                            className="px-4 w-26 h-8 rounded-md bg-betana_navy_blue text-white justify-self-end hover:bg-white hover:text-betana_navy_blue hover:font-semibold"
                        >
                            All football
                        </button>
                    </div>
                </div>
                <div>
                    <Scoreboard></Scoreboard>
                </div>
                <div className='flex gap-x-1'>
                    { Numbers.map((number, index) => (
                        <button key={ number } className="w-5 h-1 rounded-md bg-betana_shadow_sky_blue hover:bg-white"></button>
                    )) } 
                </div>
            </div>

            <div></div>

        </div>
    );
    
}