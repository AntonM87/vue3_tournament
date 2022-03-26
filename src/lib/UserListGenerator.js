import {v4 as id} from 'uuid';

export class TournamentGenerator {
    constructor(quantity) {
        this.quantity = quantity;
        this.tournament = this.createTournament(this.quantity);
        this.RoundsGenerator = new RoundsGenerator(this.tournament);
    }

    createTournament = () => {
        const resultObj = [];
        for (let i = 0; i < this.quantity; i++) {
            resultObj.push({
                id: id(),
                name: `name_${i + 1}`
            })
        }
        return resultObj;
    }
}

class RoundsGenerator {
    constructor(playersObjArray) {
        this.playersObjArray = playersObjArray;
        this.roundsCounter = 0;
        this.roundsArr = [];
    }

    getRandomInt(range) {
        let num = Math.random();

        if (num >= 0.5) num = Math.ceil(num * range);
        else num = Math.floor(num * range);

        return num;
    }

    createRoundsArr() {
        let counter = this.playersObjArray.length
        while (!(counter % 2)) {

            this.roundsArr.push([]);

            this.roundsCounter++;
            counter = counter / 2;

        }
        if (counter !== 1) alert('Не верное колличество игроков, кому-то не хватает соперника')
        console.log('колво раундов',this.roundsArr);
        return this;
    }

    getRoundsCounter() {
        return this.roundsCounter;
    }
}