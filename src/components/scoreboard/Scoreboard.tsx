import React, {useEffect, useState } from 'react';
import { ScoreboardHeader, ScoreboardMatch } from './';

export function Scoreboard(): JSX.Element {

    return(
        <div className="h-72 min-h-full w-96 min-w-full max-w-screen-md bg-betana_navy_blue rounded-lg">
            <ScoreboardHeader></ScoreboardHeader>
            <ScoreboardMatch></ScoreboardMatch>
        </div>
    );
    
}