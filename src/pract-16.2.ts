{
    class CricketPlayer {
        constructor(
            public readonly country: string,
            public name: string,
            private _runScored: number,
            protected _wicketTaken: number,
        ) {
            this.country = country;
            this.name = name;
            this._runScored = _runScored;
            this._wicketTaken = _wicketTaken;
        }
        

        get playerName(): string {
            return this.name;
        }

        get wicketTaken(): number {
            return this._wicketTaken;
        }

        set wicketTaken(wickets: number) {
            if (wickets >= 0) {
                this._wicketTaken = wickets;
            } else {
                console.log("No wicket taken.!");
            }
        }

        public addWicket(wickets: number) {
            if (wickets >= 0) {
                this._wicketTaken += wickets;
            } else {
                console.log("No wicket taken.!");
            }
        }
    }


    const player1 = new CricketPlayer("Bangladesh", "Mashrafi", 3000, 200);
    console.log(player1);

    player1.addWicket(10);
    console.log(`player1 taken ${player1.wicketTaken} wickets`);

    player1.name = "M B Mortuja";
    console.log(`player1 full name: ${player1.playerName}`);
}
