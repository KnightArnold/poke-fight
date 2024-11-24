import randomIntFromInterval from "./RandomIntFromInterval";

export default function executePlayTennis() {
    let pokeSelectedWin = false;
    let pokeRankingWin = false;
    let x1 = 0;
    let y1 = 0;
    while (x1 !== 6 && y1 !== 6) {
        x1 =  randomIntFromInterval(1,6);
        y1 = randomIntFromInterval(1,6);
    }
    
    if (x1 === 6 && y1 === 6) {
        let x1Aux = 0;
        let y1Aux = 0;
        while (x1Aux !== 7 && y1Aux !== 7) {
            x1Aux =  randomIntFromInterval(1,6);
            y1Aux = randomIntFromInterval(1,6);
        }
        if (x1Aux === 7) {
            x1 = 7;
        } else {
            y1 = 7;
        }   
    }

    let x2 = 0;
    let y2 = 0;
    while (x2 !== 6 && y2 !== 6) {
        x2 =  randomIntFromInterval(1,6);
        y2 = randomIntFromInterval(1,6);
    }
    
    if (x2 === 6 && y2 === 6) {
        let x2Aux = 0;
        let y2Aux = 0;
        while (x2Aux !== 7 && y2Aux !== 7) {
            x2Aux =  randomIntFromInterval(1,6);
            y2Aux = randomIntFromInterval(1,6);
        }
        if (x2Aux === 7) {
            x2 = 7;
        } else {
            y2 = 7;
        }   
    }

    let x3 = 0;
    let y3 = 0;
    while (x3 !== 6 && y3 !== 6) {
        x3 =  randomIntFromInterval(1,6);
        y3 = randomIntFromInterval(1,6);
    }
    
    if (x3 === 6 && y3 === 6) {
        let x3Aux = 0;
        let y3Aux = 0;
        while (x3Aux !== 7 && y3Aux !== 7) {
            x3Aux =  randomIntFromInterval(1,6);
            y3Aux = randomIntFromInterval(1,6);
        }
        if (x3Aux === 7) {
            x3 = 7;
        } else {
            y3 = 7;
        }   
    }

    if (x1 >= 6) {
        if (x2 >= 6) {
            pokeSelectedWin = true;
            pokeRankingWin = false;
        } else {
            if (y3 >= 6) {
                pokeRankingWin = true;
                pokeSelectedWin = false;
            } else {
                pokeSelectedWin = true;
                pokeRankingWin = false;
            }
        }
    } else {
        if (y2 >= 6) {
            pokeRankingWin = true;
            pokeSelectedWin = false;
        } else {
            if (x3 >= 6) {
                pokeSelectedWin = true;
                pokeRankingWin = false;
            } else {
                pokeRankingWin = true;
                pokeSelectedWin = false;
            }
        }
    }

    return {pokeSelectedWin, pokeRankingWin, x1,x2,x3,y1,y2,y3};
}
