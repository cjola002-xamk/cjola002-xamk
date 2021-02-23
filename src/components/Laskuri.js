import React, { useState } from 'react';

//Testivä testivä

function Laskuri(){
    const [laskuri, setLaskuri] = useState(0);

    return(
        <div>
            <h1>About me</h1>
            <h1>{laskuri}</h1>
            <button id="nappi" onClick={() => {setLaskuri(laskuri+1)}}>Paina tästä</button>
        </div>
    );
};

export default Laskuri;