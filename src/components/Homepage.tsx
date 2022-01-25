//import React, { Component, useEffect, useRef, useState } from 'react';

export function Homepage(): JSX.Element {

    return(
        <div className={'grid grid-rows-2 h-screen'}>
            <div className={'grid grid-cols-3 bg-betana_navy_blue h-betana_header'}>
                <div className={''}></div>
                <div className={''}></div>
                <div className={''}></div>
            </div>
            <div className={'grid grid-cols-3 h-betana_body'}>
                <div className={'bg-betana_navy_blue'}></div>
                <div className={'bg-betana_sky_blue'}></div>
                <div className={'bg-betana_navy_blue'}></div>
            </div>
        </div>
    );
    
}