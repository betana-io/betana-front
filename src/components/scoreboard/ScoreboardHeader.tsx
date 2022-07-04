import React, {useEffect, useState } from 'react';

export function ScoreboardHeader(): JSX.Element {

    return(
        <div>
            <div className='h-10 bg-betana_shadow_sky_blue rounded-t-lg text-white grid grid-cols-5 p-2 px-5'>
                <div>Date</div>
                <div className='col-start-3 justify-self-center'>Match</div>
                <div className='grid grid-cols-3 col-end-6 justify-items-center'>
                    <div className='pr-8'>1</div>
                    <div className='pr-8'>X</div>
                    <div className='pr-8'>2</div>
                </div>
            </div>
            <div></div>
        </div>
    );
    
}