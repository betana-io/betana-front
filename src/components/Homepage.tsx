import React, { Component, useEffect, useRef, useState } from 'react';

export function Homepage(): JSX.Element {

    return(
        <div className={'grid grid-rows-2 h-full'}>
            <div className={'grid grid-cols-3 bg-betana_navy_blue h-betana_header'}>
                <div className={''}>
                    <a href="">Betana</a>
                </div>
                <div className={''}></div>
                <div className={'flex'}>
                    <div>
                        <img className={'h-betana_profile_icon'} src="https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf" alt="" />
                    </div>
                    <div>
                        <div>0xHDB6ZET28283727732GGFGTD</div>
                        <div className={'flex'}>
                            <div>1 7535.05$</div>
                            <div>115 SOL</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={'grid grid-cols-3 h-betana_body'}>
                <div className={'bg-betana_navy_blue w-betana_menu'}>
                    <div>Navigation</div>
                    <nav>
                        <div>
                            <a href="">Home</a>
                        </div>
                        <div>
                            <a href="">Betting</a>
                        </div>
                        <div>
                            <a href="">Earn</a>
                        </div>
                        <div>
                            <a href="">Swap</a>
                        </div>
                        <div>
                            <a href="">Historic</a>
                        </div>
                    </nav>
                </div>
                <div className={'bg-betana_sky_blue w-betana_central_content'}></div>
                <div className={'bg-betana_navy_blue w-betana_bill'}></div>
            </div>
        </div>
    );
    
}