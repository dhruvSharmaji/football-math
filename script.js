// ============================================================
// FOOTBALL MATH
// COMPLETE SCRIPT.JS
// ============================================================


// ============================================================
// PLAYER DATABASE
// ============================================================

const players = {

    // ========================================================
    // REAL MADRID
    // ========================================================

    "Real Madrid": [

        {
            name: "Thibaut Courtois",
            position: "GK",
            shooting: 2,
            passing: 6,
            dribbling: 3,
            pace: 4,
            stamina: 7,
            defending: 9,
            goalkeeping: 9
        },

        {
            name: "Trent Alexander-Arnold",
            position: "DEF",
            shooting: 7,
            passing: 10,
            dribbling: 7,
            pace: 7,
            stamina: 8,
            defending: 7
        },

        {
            name: "Antonio Rüdiger",
            position: "DEF",
            shooting: 5,
            passing: 7,
            dribbling: 5,
            pace: 8,
            stamina: 9,
            defending: 9
        },

        {
            name: "David Alaba",
            position: "DEF",
            shooting: 5,
            passing: 8,
            dribbling: 6,
            pace: 7,
            stamina: 7,
            defending: 8
        },

        {
            name: "Fran García",
            position: "DEF",
            shooting: 4,
            passing: 7,
            dribbling: 7,
            pace: 9,
            stamina: 9,
            defending: 7
        },

        {
            name: "Aurélien Tchouaméni",
            position: "MID",
            shooting: 6,
            passing: 8,
            dribbling: 6,
            pace: 7,
            stamina: 9,
            defending: 9
        },

        {
            name: "Federico Valverde",
            position: "MID",
            shooting: 8,
            passing: 9,
            dribbling: 8,
            pace: 9,
            stamina: 10,
            defending: 8
        },

        {
            name: "Jude Bellingham",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 8
        },

        {
            name: "Franco Mastantuono",
            position: "FWD",
            shooting: 8,
            passing: 8,
            dribbling: 9,
            pace: 8,
            stamina: 7,
            defending: 4
        },

        {
            name: "Kylian Mbappé",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 10,
            pace: 10,
            stamina: 8,
            defending: 4
        },

        {
            name: "Vinícius Jr.",
            position: "FWD",
            shooting: 9,
            passing: 8,
            dribbling: 10,
            pace: 10,
            stamina: 8,
            defending: 4
        }
    ],


    // ========================================================
    // BARCELONA
    // ========================================================

    "Barcelona": [

        {
            name: "Joan García",
            position: "GK",
            shooting: 2,
            passing: 6,
            dribbling: 3,
            pace: 5,
            stamina: 7,
            defending: 8,
            goalkeeping: 8
        },

        {
            name: "Jules Koundé",
            position: "DEF",
            shooting: 5,
            passing: 8,
            dribbling: 6,
            pace: 8,
            stamina: 9,
            defending: 9
        },

        {
            name: "Ronald Araújo",
            position: "DEF",
            shooting: 5,
            passing: 7,
            dribbling: 5,
            pace: 8,
            stamina: 8,
            defending: 10
        },

        {
            name: "Pau Cubarsí",
            position: "DEF",
            shooting: 4,
            passing: 9,
            dribbling: 6,
            pace: 6,
            stamina: 8,
            defending: 8
        },

        {
            name: "Alejandro Balde",
            position: "DEF",
            shooting: 4,
            passing: 7,
            dribbling: 8,
            pace: 10,
            stamina: 8,
            defending: 7
        },

        {
            name: "Frenkie de Jong",
            position: "MID",
            shooting: 6,
            passing: 10,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 7
        },

        {
            name: "Pedri",
            position: "MID",
            shooting: 7,
            passing: 10,
            dribbling: 9,
            pace: 7,
            stamina: 8,
            defending: 6
        },

        {
            name: "Dani Olmo",
            position: "MID",
            shooting: 8,
            passing: 9,
            dribbling: 9,
            pace: 8,
            stamina: 8,
            defending: 5
        },

        {
            name: "Lamine Yamal",
            position: "FWD",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 9,
            stamina: 8,
            defending: 4
        },

        {
            name: "Karim Adeyemi",
            position: "FWD",
            shooting: 8,
            passing: 7,
            dribbling: 8,
            pace: 10,
            stamina: 8,
            defending: 4
        },

        {
            name: "Raphinha",
            position: "FWD",
            shooting: 9,
            passing: 8,
            dribbling: 9,
            pace: 9,
            stamina: 9,
            defending: 5
        }
    ],


    // ========================================================
    // ALL-TIME REAL MADRID
    // ========================================================

    "All-Time Real Madrid": [

        {
            name: "Iker Casillas",
            position: "GK",
            shooting: 2,
            passing: 7,
            dribbling: 3,
            pace: 5,
            stamina: 8,
            defending: 10,
            goalkeeping: 10
        },

        {
            name: "Roberto Carlos",
            position: "DEF",
            shooting: 9,
            passing: 9,
            dribbling: 9,
            pace: 10,
            stamina: 10,
            defending: 8
        },

        {
            name: "Sergio Ramos",
            position: "DEF",
            shooting: 8,
            passing: 8,
            dribbling: 7,
            pace: 8,
            stamina: 10,
            defending: 10
        },

        {
            name: "Fernando Hierro",
            position: "DEF",
            shooting: 8,
            passing: 9,
            dribbling: 7,
            pace: 7,
            stamina: 9,
            defending: 10
        },

        {
            name: "Marcelo",
            position: "DEF",
            shooting: 8,
            passing: 9,
            dribbling: 10,
            pace: 8,
            stamina: 9,
            defending: 7
        },

        {
            name: "Luka Modrić",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 10,
            pace: 8,
            stamina: 10,
            defending: 7,
            ballonDorWins: 1
        },

        {
            name: "Zinedine Zidane",
            position: "MID",
            shooting: 9,
            passing: 10,
            dribbling: 10,
            pace: 8,
            stamina: 9,
            defending: 5,
            ballonDorWins: 1
        },

        {
            name: "Alfredo Di Stéfano",
            position: "MID",
            shooting: 10,
            passing: 10,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 7,
            ballonDorWins: 2
        },

        {
            name: "Cristiano Ronaldo",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 10,
            defending: 4,
            ballonDorWins: 5
        },

        {
            name: "Raúl",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 5
        },

        {
            name: "Ferenc Puskás",
            position: "FWD",
            shooting: 10,
            passing: 10,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 4
        }
    ],


    // ========================================================
    // ALL-TIME BARCELONA
    // ========================================================

    "All-Time Barcelona": [

        {
            name: "Víctor Valdés",
            position: "GK",
            shooting: 2,
            passing: 8,
            dribbling: 4,
            pace: 5,
            stamina: 8,
            defending: 9,
            goalkeeping: 9
        },

        {
            name: "Dani Alves",
            position: "DEF",
            shooting: 8,
            passing: 10,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 8
        },

        {
            name: "Carles Puyol",
            position: "DEF",
            shooting: 5,
            passing: 8,
            dribbling: 6,
            pace: 8,
            stamina: 10,
            defending: 10
        },

        {
            name: "Gerard Piqué",
            position: "DEF",
            shooting: 7,
            passing: 10,
            dribbling: 7,
            pace: 6,
            stamina: 9,
            defending: 9
        },

        {
            name: "Jordi Alba",
            position: "DEF",
            shooting: 7,
            passing: 9,
            dribbling: 9,
            pace: 10,
            stamina: 9,
            defending: 7
        },

        {
            name: "Xavi",
            position: "MID",
            shooting: 7,
            passing: 10,
            dribbling: 9,
            pace: 7,
            stamina: 10,
            defending: 6
        },

        {
            name: "Andrés Iniesta",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 10,
            pace: 8,
            stamina: 9,
            defending: 6
        },

        {
            name: "Johan Cruyff",
            position: "MID",
            shooting: 10,
            passing: 10,
            dribbling: 10,
            pace: 10,
            stamina: 9,
            defending: 6,
            ballonDorWins: 3
        },

        {
            name: "Ronaldinho",
            position: "FWD",
            shooting: 9,
            passing: 10,
            dribbling: 10,
            pace: 9,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Lionel Messi",
            position: "FWD",
            shooting: 10,
            passing: 10,
            dribbling: 10,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 8
        },

        {
            name: "Ronaldo Nazário",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 10,
            pace: 10,
            stamina: 8,
            defending: 3,
            ballonDorWins: 2
        }
    ],


    // ========================================================
    // ALL-TIME AC MILAN
    // ========================================================

    "All-Time AC Milan": [

        {
            name: "Dida",
            position: "GK",
            shooting: 2,
            passing: 7,
            dribbling: 3,
            pace: 5,
            stamina: 8,
            defending: 9,
            goalkeeping: 10
        },

        {
            name: "Cafu",
            position: "DEF",
            shooting: 7,
            passing: 9,
            dribbling: 9,
            pace: 10,
            stamina: 10,
            defending: 8
        },

        {
            name: "Franco Baresi",
            position: "DEF",
            shooting: 5,
            passing: 10,
            dribbling: 7,
            pace: 8,
            stamina: 10,
            defending: 10
        },

        {
            name: "Alessandro Nesta",
            position: "DEF",
            shooting: 4,
            passing: 9,
            dribbling: 7,
            pace: 8,
            stamina: 9,
            defending: 10
        },

        {
            name: "Paolo Maldini",
            position: "DEF",
            shooting: 7,
            passing: 9,
            dribbling: 8,
            pace: 9,
            stamina: 10,
            defending: 10
        },

        {
            name: "Andrea Pirlo",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 9,
            pace: 6,
            stamina: 9,
            defending: 6
        },

        {
            name: "Ruud Gullit",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 8,
            ballonDorWins: 1
        },

        {
            name: "Kaká",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 9,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "Marco van Basten",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 9,
            pace: 8,
            stamina: 8,
            defending: 3,
            ballonDorWins: 3
        },

        {
            name: "Andriy Shevchenko",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 9,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "George Weah",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 10,
            pace: 10,
            stamina: 10,
            defending: 4,
            ballonDorWins: 1
        }
    ],


    // ========================================================
    // ALL-TIME MANCHESTER UNITED
    // ========================================================

    "All-Time Manchester United": [

        {
            name: "Peter Schmeichel",
            position: "GK",
            shooting: 2,
            passing: 7,
            dribbling: 3,
            pace: 5,
            stamina: 8,
            defending: 10,
            goalkeeping: 10
        },

        {
            name: "Gary Neville",
            position: "DEF",
            shooting: 5,
            passing: 9,
            dribbling: 6,
            pace: 7,
            stamina: 10,
            defending: 9
        },

        {
            name: "Rio Ferdinand",
            position: "DEF",
            shooting: 5,
            passing: 10,
            dribbling: 7,
            pace: 8,
            stamina: 9,
            defending: 10
        },

        {
            name: "Nemanja Vidić",
            position: "DEF",
            shooting: 6,
            passing: 7,
            dribbling: 5,
            pace: 7,
            stamina: 10,
            defending: 10
        },

        {
            name: "Patrice Evra",
            position: "DEF",
            shooting: 6,
            passing: 8,
            dribbling: 8,
            pace: 9,
            stamina: 10,
            defending: 9
        },

        {
            name: "Paul Scholes",
            position: "MID",
            shooting: 9,
            passing: 10,
            dribbling: 8,
            pace: 6,
            stamina: 9,
            defending: 7
        },

        {
            name: "Roy Keane",
            position: "MID",
            shooting: 8,
            passing: 9,
            dribbling: 7,
            pace: 7,
            stamina: 10,
            defending: 10
        },

        {
            name: "George Best",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Ryan Giggs",
            position: "FWD",
            shooting: 8,
            passing: 9,
            dribbling: 10,
            pace: 9,
            stamina: 10,
            defending: 5
        },

        {
            name: "Wayne Rooney",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 5
        },

        {
            name: "Cristiano Ronaldo",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 10,
            defending: 4,
            ballonDorWins: 5
        }
    ],


    // ========================================================
    // ALL-TIME MANCHESTER CITY
    // ========================================================

    "All-Time Manchester City": [

        {
            name: "Ederson",
            position: "GK",
            shooting: 2,
            passing: 10,
            dribbling: 5,
            pace: 6,
            stamina: 8,
            defending: 9,
            goalkeeping: 9
        },

        {
            name: "Kyle Walker",
            position: "DEF",
            shooting: 5,
            passing: 8,
            dribbling: 7,
            pace: 10,
            stamina: 10,
            defending: 9
        },

        {
            name: "Vincent Kompany",
            position: "DEF",
            shooting: 7,
            passing: 9,
            dribbling: 7,
            pace: 7,
            stamina: 10,
            defending: 10
        },

        {
            name: "Rúben Dias",
            position: "DEF",
            shooting: 5,
            passing: 9,
            dribbling: 6,
            pace: 7,
            stamina: 10,
            defending: 10
        },

        {
            name: "Benjamin Mendy",
            position: "DEF",
            shooting: 5,
            passing: 8,
            dribbling: 8,
            pace: 9,
            stamina: 8,
            defending: 8
        },

        {
            name: "Kevin De Bruyne",
            position: "MID",
            shooting: 10,
            passing: 10,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 6
        },

        {
            name: "David Silva",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 10,
            pace: 7,
            stamina: 9,
            defending: 5
        },

        {
            name: "Rodri",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 9,
            pace: 6,
            stamina: 10,
            defending: 10,
            ballonDorWins: 1
        },

        {
            name: "Sergio Agüero",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 10,
            pace: 9,
            stamina: 9,
            defending: 3
        },

        {
            name: "Erling Haaland",
            position: "FWD",
            shooting: 10,
            passing: 7,
            dribbling: 8,
            pace: 10,
            stamina: 9,
            defending: 3
        },

        {
            name: "Raheem Sterling",
            position: "FWD",
            shooting: 9,
            passing: 8,
            dribbling: 9,
            pace: 10,
            stamina: 9,
            defending: 4
        }
    ],


    // ========================================================
    // ALL-TIME BAYERN MUNICH
    // ========================================================

    "All-Time Bayern Munich": [

        {
            name: "Manuel Neuer",
            position: "GK",
            shooting: 2,
            passing: 10,
            dribbling: 5,
            pace: 6,
            stamina: 9,
            defending: 10,
            goalkeeping: 10
        },

        {
            name: "Philipp Lahm",
            position: "DEF",
            shooting: 6,
            passing: 10,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 10
        },

        {
            name: "Franz Beckenbauer",
            position: "DEF",
            shooting: 8,
            passing: 10,
            dribbling: 9,
            pace: 8,
            stamina: 10,
            defending: 10,
            ballonDorWins: 2
        },

        {
            name: "Lothar Matthäus",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 9,
            ballonDorWins: 1
        },

        {
            name: "Paul Breitner",
            position: "DEF",
            shooting: 8,
            passing: 9,
            dribbling: 8,
            pace: 8,
            stamina: 10,
            defending: 9
        },

        {
            name: "Bastian Schweinsteiger",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 8,
            pace: 7,
            stamina: 10,
            defending: 8
        },

        {
            name: "Thomas Müller",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 8,
            pace: 8,
            stamina: 10,
            defending: 5
        },

        {
            name: "Franck Ribéry",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 9,
            stamina: 9,
            defending: 4
        },

        {
            name: "Arjen Robben",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 8,
            defending: 3
        },

        {
            name: "Gerd Müller",
            position: "FWD",
            shooting: 10,
            passing: 7,
            dribbling: 8,
            pace: 8,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Robert Lewandowski",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 4
        }
    ],


    // ========================================================
    // BALLON D'OR LEGENDS
    // ========================================================

    "Ballon d'Or Legends": [

        {
            name: "Stanley Matthews",
            position: "FWD",
            shooting: 8,
            passing: 9,
            dribbling: 10,
            pace: 8,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Alfredo Di Stéfano",
            position: "FWD",
            shooting: 10,
            passing: 10,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 7,
            ballonDorWins: 2
        },

        {
            name: "Raymond Kopa",
            position: "MID",
            shooting: 8,
            passing: 9,
            dribbling: 10,
            pace: 9,
            stamina: 8,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "Luis Suárez",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 9,
            pace: 8,
            stamina: 8,
            defending: 5,
            ballonDorWins: 1
        },

        {
            name: "Omar Sívori",
            position: "FWD",
            shooting: 9,
            passing: 8,
            dribbling: 10,
            pace: 9,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Josef Masopust",
            position: "MID",
            shooting: 8,
            passing: 9,
            dribbling: 9,
            pace: 7,
            stamina: 9,
            defending: 6,
            ballonDorWins: 1
        },

        {
            name: "Lev Yashin",
            position: "GK",
            shooting: 2,
            passing: 7,
            dribbling: 3,
            pace: 6,
            stamina: 8,
            defending: 10,
            goalkeeping: 10,
            ballonDorWins: 1
        },

        {
            name: "Denis Law",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 9,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Eusébio",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 10,
            pace: 10,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Bobby Charlton",
            position: "MID",
            shooting: 10,
            passing: 9,
            dribbling: 8,
            pace: 8,
            stamina: 10,
            defending: 6,
            ballonDorWins: 1
        },

        {
            name: "Flórián Albert",
            position: "FWD",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 9,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "George Best",
            position: "FWD",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Gianni Rivera",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 10,
            pace: 7,
            stamina: 8,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "Gerd Müller",
            position: "FWD",
            shooting: 10,
            passing: 7,
            dribbling: 8,
            pace: 8,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Johan Cruyff",
            position: "FWD",
            shooting: 10,
            passing: 10,
            dribbling: 10,
            pace: 10,
            stamina: 9,
            defending: 6,
            ballonDorWins: 3
        },

        {
            name: "Franz Beckenbauer",
            position: "DEF",
            shooting: 8,
            passing: 10,
            dribbling: 9,
            pace: 8,
            stamina: 10,
            defending: 10,
            ballonDorWins: 2
        },

        {
            name: "Oleh Blokhin",
            position: "FWD",
            shooting: 9,
            passing: 8,
            dribbling: 9,
            pace: 10,
            stamina: 10,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Allan Simonsen",
            position: "FWD",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Kevin Keegan",
            position: "FWD",
            shooting: 9,
            passing: 8,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 4,
            ballonDorWins: 2
        },

        {
            name: "Karl-Heinz Rummenigge",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 9,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 2
        },

        {
            name: "Paolo Rossi",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 8,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Michel Platini",
            position: "MID",
            shooting: 10,
            passing: 10,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 5,
            ballonDorWins: 3
        },

        {
            name: "Ihor Belanov",
            position: "FWD",
            shooting: 9,
            passing: 7,
            dribbling: 9,
            pace: 10,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Ruud Gullit",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 8,
            ballonDorWins: 1
        },

        {
            name: "Marco van Basten",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 9,
            pace: 8,
            stamina: 8,
            defending: 3,
            ballonDorWins: 3
        },

        {
            name: "Lothar Matthäus",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 9,
            ballonDorWins: 1
        },

        {
            name: "Jean-Pierre Papin",
            position: "FWD",
            shooting: 10,
            passing: 7,
            dribbling: 8,
            pace: 9,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Roberto Baggio",
            position: "FWD",
            shooting: 10,
            passing: 10,
            dribbling: 10,
            pace: 8,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Hristo Stoichkov",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 9,
            pace: 9,
            stamina: 9,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "George Weah",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 10,
            pace: 10,
            stamina: 10,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "Matthias Sammer",
            position: "DEF",
            shooting: 8,
            passing: 9,
            dribbling: 8,
            pace: 8,
            stamina: 10,
            defending: 10,
            ballonDorWins: 1
        },

        {
            name: "Ronaldo Nazário",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 10,
            pace: 10,
            stamina: 8,
            defending: 3,
            ballonDorWins: 2
        },

        {
            name: "Zinedine Zidane",
            position: "MID",
            shooting: 9,
            passing: 10,
            dribbling: 10,
            pace: 8,
            stamina: 9,
            defending: 5,
            ballonDorWins: 1
        },

        {
            name: "Rivaldo",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "Luís Figo",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 10,
            pace: 9,
            stamina: 9,
            defending: 5,
            ballonDorWins: 1
        },

        {
            name: "Michael Owen",
            position: "FWD",
            shooting: 9,
            passing: 7,
            dribbling: 8,
            pace: 10,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Pavel Nedvěd",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 9,
            pace: 9,
            stamina: 10,
            defending: 6,
            ballonDorWins: 1
        },

        {
            name: "Andriy Shevchenko",
            position: "FWD",
            shooting: 10,
            passing: 8,
            dribbling: 9,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Ronaldinho",
            position: "FWD",
            shooting: 9,
            passing: 10,
            dribbling: 10,
            pace: 9,
            stamina: 8,
            defending: 3,
            ballonDorWins: 1
        },

        {
            name: "Fabio Cannavaro",
            position: "DEF",
            shooting: 5,
            passing: 8,
            dribbling: 6,
            pace: 9,
            stamina: 10,
            defending: 10,
            ballonDorWins: 1
        },

        {
            name: "Kaká",
            position: "MID",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 9,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "Cristiano Ronaldo",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 10,
            defending: 4,
            ballonDorWins: 5
        },

        {
            name: "Lionel Messi",
            position: "FWD",
            shooting: 10,
            passing: 10,
            dribbling: 10,
            pace: 9,
            stamina: 9,
            defending: 3,
            ballonDorWins: 8
        },

        {
            name: "Luka Modrić",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 10,
            pace: 8,
            stamina: 10,
            defending: 7,
            ballonDorWins: 1
        },

        {
            name: "Karim Benzema",
            position: "FWD",
            shooting: 10,
            passing: 9,
            dribbling: 9,
            pace: 8,
            stamina: 9,
            defending: 4,
            ballonDorWins: 1
        },

        {
            name: "Rodri",
            position: "MID",
            shooting: 8,
            passing: 10,
            dribbling: 9,
            pace: 6,
            stamina: 10,
            defending: 10,
            ballonDorWins: 1
        },

        {
            name: "Ousmane Dembélé",
            position: "FWD",
            shooting: 9,
            passing: 9,
            dribbling: 10,
            pace: 10,
            stamina: 9,
            defending: 5,
            ballonDorWins: 1
        }
    ]
};


// ============================================================
// BALLON D'OR HISTORY
// ============================================================

const ballonDorHistory = {

    1956: "Stanley Matthews",
    1957: "Alfredo Di Stéfano",
    1958: "Raymond Kopa",
    1959: "Alfredo Di Stéfano",
    1960: "Luis Suárez",
    1961: "Omar Sívori",
    1962: "Josef Masopust",
    1963: "Lev Yashin",
    1964: "Denis Law",
    1965: "Eusébio",
    1966: "Bobby Charlton",
    1967: "Flórián Albert",
    1968: "George Best",
    1969: "Gianni Rivera",
    1970: "Gerd Müller",
    1971: "Johan Cruyff",
    1972: "Franz Beckenbauer",
    1973: "Johan Cruyff",
    1974: "Johan Cruyff",
    1975: "Oleh Blokhin",
    1976: "Franz Beckenbauer",
    1977: "Allan Simonsen",
    1978: "Kevin Keegan",
    1979: "Kevin Keegan",
    1980: "Karl-Heinz Rummenigge",
    1981: "Karl-Heinz Rummenigge",
    1982: "Paolo Rossi",
    1983: "Michel Platini",
    1984: "Michel Platini",
    1985: "Michel Platini",
    1986: "Ihor Belanov",
    1987: "Ruud Gullit",
    1988: "Marco van Basten",
    1989: "Marco van Basten",
    1990: "Lothar Matthäus",
    1991: "Jean-Pierre Papin",
    1992: "Marco van Basten",
    1993: "Roberto Baggio",
    1994: "Hristo Stoichkov",
    1995: "George Weah",
    1996: "Matthias Sammer",
    1997: "Ronaldo Nazário",
    1998: "Zinédine Zidane",
    1999: "Rivaldo",
    2000: "Luís Figo",
    2001: "Michael Owen",
    2002: "Ronaldo Nazário",
    2003: "Pavel Nedvěd",
    2004: "Andriy Shevchenko",
    2005: "Ronaldinho",
    2006: "Fabio Cannavaro",
    2007: "Kaká",
    2008: "Cristiano Ronaldo",
    2009: "Lionel Messi",
    2010: "Lionel Messi",
    2011: "Lionel Messi",
    2012: "Lionel Messi",
    2013: "Cristiano Ronaldo",
    2014: "Cristiano Ronaldo",
    2015: "Lionel Messi",
    2016: "Cristiano Ronaldo",
    2017: "Cristiano Ronaldo",
    2018: "Luka Modrić",
    2019: "Lionel Messi",
    2021: "Lionel Messi",
    2022: "Karim Benzema",
    2023: "Lionel Messi",
    2024: "Rodri",
    2025: "Ousmane Dembélé"
};

// ============================================================
// GAME STATE
// ============================================================

let selectedTeam = null;
let selectedFormation = null;
let selectedPlayers = [];

let currentFilter = "ALL";

// ============================================================
// TWO-TEAM MATCH STATE
// ============================================================

let team1 = null;
let team2 = null;

let buildingTeamNumber = 1;

// ============================================================
// FORMATION POSITION MAP
// ============================================================

const formationPositions = {

    "4-3-3": [
        "GK",
        "DEF", "DEF", "DEF", "DEF",
        "MID", "MID", "MID",
        "FWD", "FWD", "FWD"
    ],

    "4-4-2": [
        "GK",
        "DEF", "DEF", "DEF", "DEF",
        "MID", "MID", "MID", "MID",
        "FWD", "FWD"
    ],

    "4-2-3-1": [
        "GK",
        "DEF", "DEF", "DEF", "DEF",
        "MID", "MID",
        "MID", "MID", "MID",
        "FWD"
    ],

    "3-5-2": [
        "GK",
        "DEF", "DEF", "DEF",
        "MID", "MID", "MID", "MID", "MID",
        "FWD", "FWD"
    ]

};

// ============================================================
// FORMATION REQUIREMENTS
// ============================================================

const formationRequirements = {

    "4-3-3": {
        GK: 1,
        DEF: 4,
        MID: 3,
        FWD: 3
    },

    "4-4-2": {
        GK: 1,
        DEF: 4,
        MID: 4,
        FWD: 2
    },

    "4-2-3-1": {
        GK: 1,
        DEF: 4,
        MID: 4,
        FWD: 2
    },

    "3-5-2": {
        GK: 1,
        DEF: 3,
        MID: 5,
        FWD: 2
    }
};

// ============================================================
// PLAYER OVR CALCULATOR
// ============================================================

function calculatePlayerOVR(player) {

    if (!player) {
        return 0;
    }

    if (player.position === "FWD") {

        return (
            0.30 * Number(player.shooting || 0) +
            0.20 * Number(player.dribbling || 0) +
            0.20 * Number(player.pace || 0) +
            0.15 * Number(player.passing || 0) +
            0.10 * Number(player.stamina || 0) +
            0.05 * Number(player.defending || 0)
        );
    }

    if (player.position === "MID") {

        return (
            0.25 * Number(player.passing || 0) +
            0.20 * Number(player.dribbling || 0) +
            0.20 * Number(player.stamina || 0) +
            0.15 * Number(player.shooting || 0) +
            0.10 * Number(player.pace || 0) +
            0.10 * Number(player.defending || 0)
        );
    }

    if (player.position === "DEF") {

        return (
            0.35 * Number(player.defending || 0) +
            0.20 * Number(player.stamina || 0) +
            0.15 * Number(player.pace || 0) +
            0.15 * Number(player.passing || 0) +
            0.10 * Number(player.dribbling || 0) +
            0.05 * Number(player.shooting || 0)
        );
    }

    if (player.position === "GK") {

        return (
            0.50 * Number(player.goalkeeping || 0) +
            0.15 * Number(player.defending || 0) +
            0.15 * Number(player.passing || 0) +
            0.10 * Number(player.stamina || 0) +
            0.05 * Number(player.pace || 0) +
            0.05 * Number(player.dribbling || 0)
        );
    }

    return 0;
}

// ============================================================
// SCREEN CONTROL
// ============================================================

function showScreen(screenID) {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(screenID);

    if (screen) {
        screen.classList.add("active");
    }
}

// ============================================================
// START MATCH
// ============================================================

function startMatch() {

    team1 = null;
    team2 = null;

    buildingTeamNumber = 1;

    selectedTeam = null;
    selectedFormation = null;
    selectedPlayers = [];

    currentFilter = "ALL";

    const title = document.getElementById("builderTitle");

    if (title) {
        title.textContent = "CREATE TEAM 1";
    }

    const nextButton = document.getElementById("nextTeamButton");

    if (nextButton) {
        nextButton.textContent = "CREATE TEAM 2";
        nextButton.onclick = createSecondTeam;
    }

    resetBuilder();

    showScreen("teamScreen");
}

// ============================================================
// RESET BUILDER
// ============================================================

function resetBuilder() {

    selectedTeam = null;
    selectedFormation = null;
    selectedPlayers = [];
    currentFilter = "ALL";

    const formationSection =
        document.getElementById("formationSection");

    const playerSection =
        document.getElementById("playerSection");

    const continueButton =
        document.getElementById("continueButton");

    const stepNumber =
        document.getElementById("stepNumber");

    if (formationSection) {
        formationSection.classList.add("hidden");
    }

    if (playerSection) {
        playerSection.classList.add("hidden");
    }

    if (continueButton) {
        continueButton.classList.add("hidden");
    }

    if (stepNumber) {
        stepNumber.textContent = "1";
    }

    const selectionText =
        document.getElementById("selectionText");

    if (selectionText) {
        selectionText.textContent = "0 / 11 players selected";
    }

    const teamOVR =
        document.getElementById("teamOVR");

    if (teamOVR) {
        teamOVR.textContent = "--";
    }

    const formationText =
        document.getElementById("selectedFormation");

    if (formationText) {
        formationText.textContent = "--";
    }

    updatePitch();
}

// ============================================================
// TEAM SELECTION
// ============================================================

function chooseTeam(team) {

    if (!players || !players[team]) {

        console.error("Team not found:", team);

        return;
    }

    selectedTeam = team;
    selectedFormation = null;
    selectedPlayers = [];
    currentFilter = "ALL";

    const formationSection =
        document.getElementById("formationSection");

    const playerSection =
        document.getElementById("playerSection");

    const continueButton =
        document.getElementById("continueButton");

    const stepNumber =
        document.getElementById("stepNumber");

    if (formationSection) {
        formationSection.classList.remove("hidden");
    }

    if (playerSection) {
        playerSection.classList.add("hidden");
    }

    if (continueButton) {
        continueButton.classList.add("hidden");
    }

    if (stepNumber) {
        stepNumber.textContent = "2";
    }

    const selectedTeamText =
        document.getElementById("selectedTeam");

    if (selectedTeamText) {
        selectedTeamText.textContent = team;
    }

    updatePitch();

    if (formationSection) {

        window.scrollTo({
            top: formationSection.offsetTop - 30,
            behavior: "smooth"
        });
    }
}

// ============================================================
// FORMATION SELECTION
// ============================================================

function chooseFormation(formation) {

    if (!formationPositions[formation]) {
        console.error("Invalid formation:", formation);
        return;
    }

    selectedFormation = formation;

    selectedPlayers = [];

    document
        .querySelectorAll(".formation-grid button")
        .forEach(function(button) {
            button.classList.remove("selected");

            if (button.innerText.includes(formation)) {
                button.classList.add("selected");
            }
        });

    const formationText =
        document.getElementById("selectedFormation");

    if (formationText) {
        formationText.textContent = formation;
    }

    const playerSection =
        document.getElementById("playerSection");

    const continueButton =
        document.getElementById("continueButton");

    const stepNumber =
        document.getElementById("stepNumber");

    if (playerSection) {
        playerSection.classList.remove("hidden");
    }

    if (continueButton) {
        continueButton.classList.add("hidden");
    }

    if (stepNumber) {
        stepNumber.textContent = "3";
    }

    updatePitch();
    loadPlayers();

    if (playerSection) {

        window.scrollTo({
            top: playerSection.offsetTop - 30,
            behavior: "smooth"
        });
    }
}

// ============================================================
// PLAYER LIST
// ============================================================

function loadPlayers() {

    const list =
        document.getElementById("playerList");

    if (!list) {
        return;
    }

    list.innerHTML = "";

    if (!selectedTeam || !players[selectedTeam]) {
        return;
    }

    let teamPlayers = players[selectedTeam];

    if (currentFilter !== "ALL") {

        teamPlayers = teamPlayers.filter(function(player) {
            return player.position === currentFilter;
        });
    }

    teamPlayers.forEach(function(player) {

        const card =
            document.createElement("button");

        card.type = "button";

        card.className = "player-card";

        const isSelected =
            selectedPlayers.includes(player);

        if (isSelected) {
            card.classList.add("selected");
            card.disabled = true;
        }

        const score =
            calculatePlayerOVR(player);

        const ballonDorText =
            player.ballonDorWins
                ? ` • Ballon d'Or: ${player.ballonDorWins}`
                : "";

        card.innerHTML = `

            <div>
                <div class="player-position">
                    ${player.position}
                </div>
            </div>

            <div class="player-info">

                <div class="player-name">
                    ${player.name}
                </div>

                <small>
                    ${getPositionName(player.position)}
                    ${ballonDorText}
                </small>

            </div>

            <div class="player-score">
                ${score.toFixed(1)}
            </div>

        `;

        if (!isSelected) {

            card.onclick = function() {
                selectPlayer(player, card);
            };
        }

        list.appendChild(card);
    });
}

// ============================================================
// FILTER PLAYERS
// ============================================================

function filterPlayers(positionFilter) {

    currentFilter = positionFilter;

    loadPlayers();
}

// ============================================================
// POSITION NAME
// ============================================================

function getPositionName(position) {

    if (position === "GK") {
        return "Goalkeeper";
    }

    if (position === "DEF") {
        return "Defender";
    }

    if (position === "MID") {
        return "Midfielder";
    }

    if (position === "FWD") {
        return "Forward";
    }

    return "Player";
}

// ============================================================
// CHECK FORMATION
// ============================================================

function checkFormationRequirements() {

    if (!selectedFormation) {
        return false;
    }

    const requirements =
        formationRequirements[selectedFormation];

    if (!requirements) {
        return false;
    }

    const counts = {
        GK: 0,
        DEF: 0,
        MID: 0,
        FWD: 0
    };

    selectedPlayers.forEach(function(player) {

        if (counts[player.position] !== undefined) {
            counts[player.position]++;
        }
    });

    return (
        counts.GK === requirements.GK &&
        counts.DEF === requirements.DEF &&
        counts.MID === requirements.MID &&
        counts.FWD === requirements.FWD
    );
}

// ============================================================
// FORMATION MESSAGE
// ============================================================

function getFormationRequirementText() {

    if (!selectedFormation) {
        return "";
    }

    const req =
        formationRequirements[selectedFormation];

    if (!req) {
        return "";
    }

    return (
        `${req.GK} GK • ` +
        `${req.DEF} DEF • ` +
        `${req.MID} MID • ` +
        `${req.FWD} FWD`
    );
}

// ============================================================
// SELECT PLAYER
// ============================================================

function selectPlayer(player, card) {

    if (!player) {
        return;
    }

    if (!selectedFormation) {
        alert("Choose a formation first.");
        return;
    }

    if (selectedPlayers.length >= 11) {
        return;
    }

    if (selectedPlayers.includes(player)) {
        return;
    }

    const requirements =
        formationRequirements[selectedFormation];

    const currentCount =
        selectedPlayers.filter(function(selectedPlayer) {
            return selectedPlayer.position === player.position;
        }).length;

    if (
        requirements &&
        currentCount >= requirements[player.position]
    ) {

        alert(
            `Your ${selectedFormation} requires only ` +
            `${requirements[player.position]} ` +
            `${getPositionName(player.position)}(s).`
        );

        return;
    }

    selectedPlayers.push(player);

    if (card) {
        card.classList.add("selected");
        card.disabled = true;
    }

    updatePitch();
    updateTeamOVR();

    const selectionText =
        document.getElementById("selectionText");

    if (selectionText) {

        selectionText.textContent =
            `${selectedPlayers.length} / 11 players selected`;
    }

    loadPlayers();

    if (selectedPlayers.length === 11) {

        const continueButton =
            document.getElementById("continueButton");

        if (continueButton) {

            if (checkFormationRequirements()) {

                continueButton.classList.remove("hidden");

                continueButton.scrollIntoView({
                    behavior: "smooth"
                });

            } else {

                continueButton.classList.add("hidden");

                alert(
                    `The ${selectedFormation} formation requires: ` +
                    getFormationRequirementText()
                );
            }
        }
    }
}

// ============================================================
// PITCH
// ============================================================

function updatePitch() {

    const pitch =
        document.querySelector(".pitch");

    if (!pitch) {
        return;
    }

    pitch.classList.remove(
        "formation-433",
        "formation-442",
        "formation-4231",
        "formation-352"
    );

    const formationClasses = {

        "4-3-3": "formation-433",
        "4-4-2": "formation-442",
        "4-2-3-1": "formation-4231",
        "3-5-2": "formation-352"

    };

    const formationClass =
        formationClasses[selectedFormation];

    pitch.classList.add(
        formationClass || "formation-433"
    );

    const positions =
        formationPositions[selectedFormation] ||
        formationPositions["4-3-3"];

    for (let i = 0; i < 11; i++) {

        const position =
            document.getElementById(`position-${i}`);

        if (!position) {
            continue;
        }

        position.classList.remove("filled");

        position.innerHTML = `
            <span>
                ${positions[i]}
            </span>
        `;
    }

    selectedPlayers.forEach(function(player, index) {

        const position =
            document.getElementById(`position-${index}`);

        if (!position) {
            return;
        }

        position.classList.add("filled");

        position.innerHTML = `

            <span class="position-name">
                ${player.position}
            </span>

            <span class="player-name">
                ${shortName(player.name)}
            </span>

        `;
    });
}

// ============================================================
// SHORT PLAYER NAME
// ============================================================

function shortName(name) {

    if (!name) {
        return "";
    }

    const parts =
        name.split(" ");

    return parts[parts.length - 1];
}

// ============================================================
// TEAM OVR
// ============================================================

function calculateTeamOVR(teamPlayers) {

    if (
        !Array.isArray(teamPlayers) ||
        teamPlayers.length === 0
    ) {
        return 0;
    }

    const total =
        teamPlayers.reduce(
            function(sum, player) {

                return sum +
                    calculatePlayerOVR(player);

            },
            0
        );

    return total / teamPlayers.length;
}

function updateTeamOVR() {

    const teamOVRElement =
        document.getElementById("teamOVR");

    if (!teamOVRElement) {
        return;
    }

    if (selectedPlayers.length === 0) {

        teamOVRElement.textContent = "--";

        return;
    }

    const average =
        calculateTeamOVR(selectedPlayers);

    teamOVRElement.textContent =
        average.toFixed(2);
}

// ============================================================
// FINISH TEAM
// ============================================================

function finishTeam() {

    if (selectedPlayers.length !== 11) {

        alert(
            "You need to select exactly 11 players."
        );

        return;
    }

    if (!checkFormationRequirements()) {

        alert(
            `Your ${selectedFormation} formation requires: ` +
            getFormationRequirementText()
        );

        return;
    }

    const savedTeam = {

        name: selectedTeam,

        formation: selectedFormation,

        players: [...selectedPlayers],

        ovr: calculateTeamOVR(selectedPlayers)

    };

    if (buildingTeamNumber === 1) {

        team1 = savedTeam;

    } else {

        team2 = savedTeam;
    }

    showTeamSummary(savedTeam);
}

// ============================================================
// SHOW TEAM SUMMARY
// ============================================================

function showTeamSummary(team) {

    const summaryTeam =
        document.getElementById("summaryTeam");

    const summaryFormation =
        document.getElementById("summaryFormation");

    const summaryOVR =
        document.getElementById("summaryOVR");

    const summary =
        document.getElementById("summaryPlayers");

    if (summaryTeam) {
        summaryTeam.textContent = team.name;
    }

    if (summaryFormation) {
        summaryFormation.textContent = team.formation;
    }

    if (summaryOVR) {
        summaryOVR.textContent =
            team.ovr.toFixed(2);
    }

    if (summary) {

        summary.innerHTML = "";

        team.players.forEach(function(player) {

            const item =
                document.createElement("div");

            item.className =
                "summary-player";

            const score =
                calculatePlayerOVR(player);

            const ballonDorText =
                player.ballonDorWins
                    ? ` • Ballon d'Or: ${player.ballonDorWins}`
                    : "";

            item.innerHTML = `

                <strong>
                    ${player.name}
                </strong>

                <span>
                    ${player.position}
                    •
                    ${score.toFixed(1)}
                    ${ballonDorText}
                </span>

            `;

            summary.appendChild(item);
        });
    }

    const readyMessage =
        document.getElementById("readyMessage");

    const nextButton =
        document.getElementById("nextTeamButton");

    if (buildingTeamNumber === 1) {

        if (readyMessage) {

            readyMessage.textContent =
                "Team 1 has been created. Now build your opponent.";
        }

        if (nextButton) {

            nextButton.textContent =
                "CREATE TEAM 2";

            nextButton.onclick =
                createSecondTeam;
        }

    } else {

        if (readyMessage) {

            readyMessage.textContent =
                "Both teams are ready! Compare them.";
        }

        if (nextButton) {

            nextButton.textContent =
                "COMPARE TEAMS";

            nextButton.onclick =
                showComparison;
        }
    }

    showScreen("readyScreen");
}

// ============================================================
// CREATE SECOND TEAM
// ============================================================

function createSecondTeam() {

    if (!team1) {

        alert("Create Team 1 first.");

        return;
    }

    buildingTeamNumber = 2;

    selectedTeam = null;
    selectedFormation = null;
    selectedPlayers = [];
    currentFilter = "ALL";

    const title =
        document.getElementById("builderTitle");

    if (title) {
        title.textContent = "CREATE TEAM 2";
    }

    const nextButton =
        document.getElementById("nextTeamButton");

    if (nextButton) {

        nextButton.textContent =
            "COMPARE TEAMS";

        nextButton.onclick =
            showComparison;
    }

    resetBuilder();

    showScreen("teamScreen");
}

// ============================================================
// V2 - AVERAGE PLAYERS
// ============================================================

function averagePlayers(playersList, calculator) {

    if (
        !Array.isArray(playersList) ||
        playersList.length === 0
    ) {
        return 0;
    }

    const total =
        playersList.reduce(
            function(sum, player) {

                return sum + calculator(player);

            },
            0
        );

    return total / playersList.length;
}

// ============================================================
// V2 - PLAYER ATTACK
// ============================================================

function calculatePlayerAttack(player) {

    if (!player) {
        return 0;
    }

    return (
        0.55 * Number(player.shooting || 0) +
        0.25 * Number(player.dribbling || 0) +
        0.20 * Number(player.pace || 0)
    );
}

// ============================================================
// V2 - PLAYER MIDFIELD
// ============================================================

function calculatePlayerMidfield(player) {

    if (!player) {
        return 0;
    }

    return (
        0.50 * Number(player.passing || 0) +
        0.30 * Number(player.dribbling || 0) +
        0.20 * Number(player.stamina || 0)
    );
}

// ============================================================
// V2 - PLAYER DEFENCE
// ============================================================

function calculatePlayerDefence(player) {

    if (!player) {
        return 0;
    }

    if (player.position === "GK") {

        return (
            0.65 * Number(player.goalkeeping || 0) +
            0.20 * Number(player.defending || 0) +
            0.15 * Number(player.passing || 0)
        );
    }

    return (
        0.70 * Number(player.defending || 0) +
        0.15 * Number(player.pace || 0) +
        0.15 * Number(player.stamina || 0)
    );
}

// ============================================================
// V2 - PLAYER PHYSICAL
// ============================================================

function calculatePlayerPhysical(player) {

    if (!player) {
        return 0;
    }

    return (
        0.55 * Number(player.pace || 0) +
        0.45 * Number(player.stamina || 0)
    );
}

// ============================================================
// V2 - TEAM STATISTICS
// ============================================================

function calculateTeamStats(team) {

    const stats = {

        attack: 0,
        midfield: 0,
        defence: 0,
        physical: 0,
        overall: 0

    };

    if (
        !team ||
        !Array.isArray(team.players) ||
        team.players.length === 0
    ) {
        return stats;
    }

    stats.attack =
        averagePlayers(
            team.players,
            calculatePlayerAttack
        );

    stats.midfield =
        averagePlayers(
            team.players,
            calculatePlayerMidfield
        );

    stats.defence =
        averagePlayers(
            team.players,
            calculatePlayerDefence
        );

    stats.physical =
        averagePlayers(
            team.players,
            calculatePlayerPhysical
        );

    stats.overall =
        calculateTeamOVR(team.players);

    return stats;
}

// ============================================================
// MATH HELPERS
// ============================================================

function clamp(value, minimum, maximum) {

    return Math.max(
        minimum,
        Math.min(maximum, value)
    );
}

function logistic(value) {

    return 1 /
        (1 + Math.exp(-value));
}

// ============================================================
// V2 - PREDICTION ENGINE
// ============================================================

function calculatePrediction(stats1, stats2) {

    // --------------------------------------------------------
    // TEAM STRENGTH
    // --------------------------------------------------------

    const strength1 =

        0.30 * stats1.overall +
        0.25 * stats1.attack +
        0.20 * stats1.midfield +
        0.15 * stats1.defence +
        0.10 * stats1.physical;


    const strength2 =

        0.30 * stats2.overall +
        0.25 * stats2.attack +
        0.20 * stats2.midfield +
        0.15 * stats2.defence +
        0.10 * stats2.physical;


    const strengthDifference =
        strength1 - strength2;


    // --------------------------------------------------------
    // EXPECTED GOALS
    // --------------------------------------------------------

    const xg1 = clamp(

        1.35 +

        0.18 * (
            stats1.attack -
            stats2.defence
        ) +

        0.08 * (
            stats1.midfield -
            stats2.midfield
        ) +

        0.06 * (
            stats1.overall -
            stats2.overall
        ) +

        0.04 * (
            stats1.physical -
            stats2.physical
        ),

        0.20,
        4.50
    );


    const xg2 = clamp(

        1.35 +

        0.18 * (
            stats2.attack -
            stats1.defence
        ) +

        0.08 * (
            stats2.midfield -
            stats1.midfield
        ) +

        0.06 * (
            stats2.overall -
            stats1.overall
        ) +

        0.04 * (
            stats2.physical -
            stats1.physical
        ),

        0.20,
        4.50
    );


    // --------------------------------------------------------
    // DRAW PROBABILITY
    // --------------------------------------------------------

    const drawProbability =
        clamp(

            0.34 -
            0.025 *
            Math.abs(strengthDifference),

            0.12,
            0.34
        );


    const nonDrawProbability =
        1 - drawProbability;


    // --------------------------------------------------------
    // WIN PROBABILITIES
    // --------------------------------------------------------

    const team1Share =
        logistic(
            strengthDifference / 2.5
        );


    const winProbability1 =
        nonDrawProbability *
        team1Share;


    const winProbability2 =
        nonDrawProbability *
        (1 - team1Share);


    // --------------------------------------------------------
    // WINNER
    // --------------------------------------------------------

    let winner = "DRAW";

    if (winProbability1 > winProbability2) {

        winner = "TEAM1";

    } else if (winProbability2 > winProbability1) {

        winner = "TEAM2";
    }


    return {

        strength1,
        strength2,
        strengthDifference,

        winProbability1,
        drawProbability,
        winProbability2,

        xg1,
        xg2,

        winner
    };
}

// ============================================================
// SHOW COMPARISON
// ============================================================

function showComparison() {

    if (!team1 || !team2) {

        alert(
            "Both teams must be created first."
        );

        return;
    }

    // --------------------------------------------------------
    // TEAM STATS
    // --------------------------------------------------------

    const stats1 =
        calculateTeamStats(team1);

    const stats2 =
        calculateTeamStats(team2);


    // --------------------------------------------------------
    // PREDICTION
    // --------------------------------------------------------

    const prediction =
        calculatePrediction(
            stats1,
            stats2
        );


    // --------------------------------------------------------
    // TEAM NAMES
    // --------------------------------------------------------

    setText(
        "compareTeam1",
        team1.name
    );

    setText(
        "compareTeam2",
        team2.name
    );


    // --------------------------------------------------------
    // TEAM OVR
    // --------------------------------------------------------

    setText(
        "compareOVR1",
        team1.ovr.toFixed(2)
    );

    setText(
        "compareOVR2",
        team2.ovr.toFixed(2)
    );


    // --------------------------------------------------------
    // TEAM STATISTICS
    // --------------------------------------------------------

    setComparisonStat(
        "attack",
        stats1.attack,
        stats2.attack
    );

    setComparisonStat(
        "midfield",
        stats1.midfield,
        stats2.midfield
    );

    setComparisonStat(
        "defence",
        stats1.defence,
        stats2.defence
    );

    setComparisonStat(
        "physical",
        stats1.physical,
        stats2.physical
    );

    setComparisonStat(
        "overall",
        stats1.overall,
        stats2.overall
    );


    // --------------------------------------------------------
    // PROBABILITY NAMES
    // --------------------------------------------------------

    setText(
        "probTeam1Name",
        team1.name
    );

    setText(
        "probTeam2Name",
        team2.name
    );


    // --------------------------------------------------------
    // PROBABILITY VALUES
    // --------------------------------------------------------

    setText(
        "winProb1",
        formatPercent(
            prediction.winProbability1
        )
    );

    setText(
        "drawProb",
        formatPercent(
            prediction.drawProbability
        )
    );

    setText(
        "winProb2",
        formatPercent(
            prediction.winProbability2
        )
    );


    // --------------------------------------------------------
    // PROBABILITY BAR
    // --------------------------------------------------------

    const probBar1 =
        document.getElementById("probBar1");

    const probBarDraw =
        document.getElementById("probBarDraw");

    const probBar2 =
        document.getElementById("probBar2");


    if (probBar1) {

        probBar1.style.width =
            `${prediction.winProbability1 * 100}%`;
    }

    if (probBarDraw) {

        probBarDraw.style.width =
            `${prediction.drawProbability * 100}%`;
    }

    if (probBar2) {

        probBar2.style.width =
            `${prediction.winProbability2 * 100}%`;
    }


    // --------------------------------------------------------
    // EXPECTED GOALS
    // --------------------------------------------------------

    setText(
        "xgTeam1Name",
        team1.name
    );

    setText(
        "xgTeam2Name",
        team2.name
    );

    setText(
    "xg1",
    Math.round(prediction.xg1)
);

setText(
    "xg2",
    Math.round(prediction.xg2)
);


    // --------------------------------------------------------
    // WINNER
    // --------------------------------------------------------

    const winnerText =
        document.getElementById("winnerText");

    const winnerReason =
        document.getElementById("winnerReason");

    const modelBreakdown =
        document.getElementById("modelBreakdown");


    let winnerName = "DRAW";


    if (prediction.winner === "TEAM1") {

        winnerName =
            team1.name;

    } else if (prediction.winner === "TEAM2") {

        winnerName =
            team2.name;
    }


    if (winnerText) {

        winnerText.textContent =

            prediction.winner === "DRAW"

                ? "🤝 DRAW"

                : `🏆 ${winnerName}`;
    }


    // --------------------------------------------------------
    // WINNER EXPLANATION
    // --------------------------------------------------------

    const strengthGap =
        Math.abs(
            prediction.strengthDifference
        );


    if (winnerReason) {

        if (prediction.winner === "DRAW") {

            winnerReason.textContent =

                `The model predicts a draw because the two teams are very close in mathematical strength. The expected goals are ${Math.round(prediction.xg1)} and ${Math.round(prediction.xg2)}.`;

        } else {

            const winningStats =

                prediction.winner === "TEAM1"
                    ? stats1
                    : stats2;


            const losingStats =

                prediction.winner === "TEAM1"
                    ? stats2
                    : stats1;


            const reasons = [];


            if (
                winningStats.attack >
                losingStats.attack
            ) {

                reasons.push(
                    "stronger attack"
                );
            }


            if (
                winningStats.midfield >
                losingStats.midfield
            ) {

                reasons.push(
                    "stronger midfield"
                );
            }


            if (
                winningStats.defence >
                losingStats.defence
            ) {

                reasons.push(
                    "stronger defence"
                );
            }


            if (
                winningStats.physical >
                losingStats.physical
            ) {

                reasons.push(
                    "better physical rating"
                );
            }


            if (
                winningStats.overall >
                losingStats.overall
            ) {

                reasons.push(
                    "higher overall rating"
                );
            }


            const reasonText =

                reasons.length > 0

                    ? reasons
                        .slice(0, 3)
                        .join(", ")

                    : "the combined mathematical strength score";


            const winningProbability =

                prediction.winner === "TEAM1"

                    ? prediction.winProbability1

                    : prediction.winProbability2;


            const winningXG =

                prediction.winner === "TEAM1"

                    ? prediction.xg1

                    : prediction.xg2;


            winnerReason.textContent =

                `${winnerName} is predicted to win because of ${reasonText}. The model gives them a ${formatPercent(winningProbability)} win probability and an expected ${winningXG.toFixed(2)} goals.`;
        }
    }


    // --------------------------------------------------------
    // MODEL BREAKDOWN
    // --------------------------------------------------------

    if (modelBreakdown) {

        modelBreakdown.innerHTML = `

            <div>

                <span>
                    TEAM STRENGTH
                </span>

                <strong>
                    ${prediction.strength1.toFixed(2)}
                    —
                    ${prediction.strength2.toFixed(2)}
                </strong>

            </div>


            <div>

                <span>
                    STRENGTH GAP
                </span>

                <strong>
                    ${strengthGap.toFixed(2)}
                </strong>

            </div>


            <div>

                <span>
                    EXPECTED GOALS
                </span>

                <strong>
                    ${Math.round(prediction.xg1)}
                    —
                    ${Math.round(prediction.xg2)}
                </strong>

            </div>

        `;
    }


    // --------------------------------------------------------
    // SHOW COMPARISON SCREEN
    // --------------------------------------------------------

    showScreen("comparisonScreen");
}

// ============================================================
// COMPARISON HELPERS
// ============================================================

function setText(elementID, value) {

    const element =
        document.getElementById(elementID);

    if (element) {

        element.textContent =
            value;
    }
}

// ============================================================
// FORMAT PERCENTAGE
// ============================================================

function formatPercent(value) {

    return (
        (value * 100).toFixed(1) +
        "%"
    );
}

// ============================================================
// COMPARISON STAT
// ============================================================

function setComparisonStat(
    statName,
    value1,
    value2
) {

    const element1 =
        document.getElementById(
            `${statName}1`
        );

    const element2 =
        document.getElementById(
            `${statName}2`
        );

    const bar =
        document.getElementById(
            `${statName}Bar`
        );


    if (element1) {

        element1.textContent =
            Number(value1).toFixed(1);
    }


    if (element2) {

        element2.textContent =
            Number(value2).toFixed(1);
    }


    if (bar) {

        const total =
            Number(value1) +
            Number(value2);


        let percentage = 50;


        if (total > 0) {

            percentage =
                (
                    Number(value1) /
                    total
                ) * 100;
        }


        bar.style.width =
            `${percentage}%`;
    }
}

// ============================================================
// BACK BUTTON
// ============================================================

function goBackFromBuilder() {

    if (buildingTeamNumber === 2) {

        showScreen("readyScreen");

        return;
    }

    showScreen("homeScreen");
}

// ============================================================
// RESTART EVERYTHING
// ============================================================

function restart() {

    selectedTeam = null;

    selectedFormation = null;

    selectedPlayers = [];

    currentFilter = "ALL";

    team1 = null;

    team2 = null;

    buildingTeamNumber = 1;


    const title =
        document.getElementById("builderTitle");

    if (title) {

        title.textContent =
            "CREATE TEAM 1";
    }


    const nextButton =
        document.getElementById("nextTeamButton");

    if (nextButton) {

        nextButton.textContent =
            "CREATE TEAM 2";

        nextButton.onclick =
            createSecondTeam;
    }


    showScreen("homeScreen");
}

// ============================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ============================================================

window.startMatch =
    startMatch;

window.showScreen =
    showScreen;

window.chooseTeam =
    chooseTeam;

window.chooseFormation =
    chooseFormation;

window.filterPlayers =
    filterPlayers;

window.selectPlayer =
    selectPlayer;

window.finishTeam =
    finishTeam;

window.restart =
    restart;

window.createSecondTeam =
    createSecondTeam;

window.showComparison =
    showComparison;

window.goBackFromBuilder =
    goBackFromBuilder;

// ============================================================
// V3 - MATCH SETUP
// ============================================================

function showMatchSetup() {

    if (!team1 || !team2) {

        alert("Both teams must be created first.");

        return;
    }

    // --------------------------------------------------------
    // TEAM NAMES
    // --------------------------------------------------------

    setText(
        "setupTeam1",
        team1.name
    );

    setText(
        "setupTeam2",
        team2.name
    );


    // --------------------------------------------------------
    // OVR
    // --------------------------------------------------------

    setText(
        "setupOVR1",
        team1.ovr.toFixed(2)
    );

    setText(
        "setupOVR2",
        team2.ovr.toFixed(2)
    );


    // --------------------------------------------------------
    // FORMATIONS
    // --------------------------------------------------------

    setText(
        "setupFormation1",
        team1.formation
    );

    setText(
        "setupFormation2",
        team2.formation
    );


    // --------------------------------------------------------
    // PLAYER LISTS
    // --------------------------------------------------------

    const list1 =
        document.getElementById("setupPlayers1");

    const list2 =
        document.getElementById("setupPlayers2");


    if (list1) {

        list1.innerHTML = "";

        team1.players.forEach(function(player) {

            const item =
                document.createElement("div");

            item.className =
                "summary-player";

            item.innerHTML = `

                <strong>
                    ${player.name}
                </strong>

                <span>
                    ${player.position}
                    •
                    ${calculatePlayerOVR(player).toFixed(1)}
                </span>

            `;

            list1.appendChild(item);

        });

    }


    if (list2) {

        list2.innerHTML = "";

        team2.players.forEach(function(player) {

            const item =
                document.createElement("div");

            item.className =
                "summary-player";

            item.innerHTML = `

                <strong>
                    ${player.name}
                </strong>

                <span>
                    ${player.position}
                    •
                    ${calculatePlayerOVR(player).toFixed(1)}
                </span>

            `;

            list2.appendChild(item);

        });

    }


    // --------------------------------------------------------
    // SHOW SCREEN
    // --------------------------------------------------------

    showScreen("matchSetupScreen");
}


// ============================================================
// V3 - MATCH SETUP
// ============================================================

function showMatchSetup() {

    if (!team1 || !team2) {

        alert("Both teams must be created first.");

        return;
    }

    // --------------------------------------------------------
    // TEAM NAMES
    // --------------------------------------------------------

    setText(
        "setupTeam1",
        team1.name
    );

    setText(
        "setupTeam2",
        team2.name
    );

    // --------------------------------------------------------
    // OVR
    // --------------------------------------------------------

    setText(
        "setupOVR1",
        team1.ovr.toFixed(2)
    );

    setText(
        "setupOVR2",
        team2.ovr.toFixed(2)
    );

    // --------------------------------------------------------
    // FORMATIONS
    // --------------------------------------------------------

    setText(
        "setupFormation1",
        team1.formation
    );

    setText(
        "setupFormation2",
        team2.formation
    );

    // --------------------------------------------------------
    // PLAYER LISTS
    // --------------------------------------------------------

    const list1 =
        document.getElementById("setupPlayers1");

    const list2 =
        document.getElementById("setupPlayers2");

    if (list1) {

        list1.innerHTML = "";

        team1.players.forEach(function(player) {

            const item =
                document.createElement("div");

            item.className =
                "summary-player";

            item.innerHTML = `

                <strong>
                    ${player.name}
                </strong>

                <span>
                    ${player.position}
                    •
                    ${calculatePlayerOVR(player).toFixed(1)}
                </span>

            `;

            list1.appendChild(item);

        });

    }

    if (list2) {

        list2.innerHTML = "";

        team2.players.forEach(function(player) {

            const item =
                document.createElement("div");

            item.className =
                "summary-player";

            item.innerHTML = `

                <strong>
                    ${player.name}
                </strong>

                <span>
                    ${player.position}
                    •
                    ${calculatePlayerOVR(player).toFixed(1)}
                </span>

            `;

            list2.appendChild(item);

        });

    }

    // --------------------------------------------------------
    // SHOW SETUP SCREEN
    // --------------------------------------------------------

    showScreen("matchSetupScreen");
}


// ============================================================
// V3 - SIMULATION STATE
// ============================================================

let matchMinute = 0;

let matchScore1 = 0;
let matchScore2 = 0;

let matchRunning = false;

let matchInterval = null;

let matchEvents = [];

let team1Stats = null;
let team2Stats = null;

let matchPrediction = null;


// ============================================================
// V3 - START SIMULATION
// ============================================================

function startSimulation() {

    if (!team1 || !team2) {

        alert("Both teams must be created first.");

        return;
    }

    // --------------------------------------------------------
    // RESET MATCH
    // --------------------------------------------------------

    matchMinute = 0;

    matchScore1 = 0;

    matchScore2 = 0;

    matchEvents = [];

    matchRunning = true;


    // --------------------------------------------------------
    // CALCULATE TEAM STATS ONCE
    // --------------------------------------------------------

    team1Stats =
        calculateTeamStats(team1);

    team2Stats =
        calculateTeamStats(team2);


    matchPrediction =
        calculatePrediction(
            team1Stats,
            team2Stats
        );


    // --------------------------------------------------------
    // CLEAR OLD TIMER
    // --------------------------------------------------------

    if (matchInterval) {

        clearInterval(matchInterval);

        matchInterval = null;

    }


    // --------------------------------------------------------
    // SHOW LIVE MATCH
    // --------------------------------------------------------

    showScreen("liveMatchScreen");


    // --------------------------------------------------------
    // INITIAL DISPLAY
    // --------------------------------------------------------

    updateMatchDisplay();


    // --------------------------------------------------------
    // KICK OFF EVENT
    // --------------------------------------------------------

    addCommentaryEvent(
        0,
        "KICK OFF",
        `${team1.name} vs ${team2.name} has started.`
    );


    updateMatchDisplay();


    // --------------------------------------------------------
    // SIMULATION SPEED
    // --------------------------------------------------------

    matchInterval = setInterval(
        simulateMinute,
        150
    );
}


// ============================================================
// V3 - SIMULATE MINUTE
// ============================================================

function simulateMinute() {

    if (!matchRunning) {

        return;
    }


    matchMinute++;


    // --------------------------------------------------------
    // STOP AFTER 90 MINUTES
    // --------------------------------------------------------

    if (matchMinute > 90) {

        endMatch();

        return;
    }


    // --------------------------------------------------------
    // TEAM STRENGTH
    // --------------------------------------------------------

    const stats1 =
        team1Stats;

    const stats2 =
        team2Stats;

    const prediction =
        matchPrediction;


    // --------------------------------------------------------
    // GOAL PROBABILITY
    // --------------------------------------------------------

    /*
        We convert expected goals into a Poisson-style
        probability.

        This gives the simulator a more natural chance
        of producing goals during the match.
    */

    const baseChance1 =
        1 -
        Math.exp(
            -prediction.xg1 / 90
        );

    const baseChance2 =
        1 -
        Math.exp(
            -prediction.xg2 / 90
        );


    // --------------------------------------------------------
    // ATTACK MOMENT
    // --------------------------------------------------------

    const attackRoll =
        Math.random();


    /*
        About 20% of minutes produce some sort of
        meaningful commentary.
    */

    if (attackRoll < 0.20) {

        generateMatchEvent();

    }


    // --------------------------------------------------------
    // TEAM 1 GOAL
    // --------------------------------------------------------

    /*
        Small attacking modifier based on the team's
        attacking strength.
    */

    const attackModifier1 =
        clamp(
            1 +
            (
                stats1.attack -
                stats2.defence
            ) / 250,
            0.75,
            1.25
        );


    const goalChance1 =
        baseChance1 *
        attackModifier1;


    if (
        Math.random() <
        goalChance1
    ) {

        scoreGoal(1);

    }


    // --------------------------------------------------------
    // TEAM 2 GOAL
    // --------------------------------------------------------

    const attackModifier2 =
        clamp(
            1 +
            (
                stats2.attack -
                stats1.defence
            ) / 250,
            0.75,
            1.25
        );


    const goalChance2 =
        baseChance2 *
        attackModifier2;


    if (
        Math.random() <
        goalChance2
    ) {

        scoreGoal(2);

    }


    // --------------------------------------------------------
    // UPDATE SCREEN
    // --------------------------------------------------------

    updateMatchDisplay();


    // --------------------------------------------------------
    // END MATCH
    // --------------------------------------------------------

    if (matchMinute >= 90) {

        endMatch();

    }
}

// ============================================================
// V3 - REALISTIC MATCH COMMENTARY
// ============================================================

function generateMatchEvent() {

    if (!team1 || !team2 || !team1Stats || !team2Stats) {
        return;
    }

    // --------------------------------------------------------
    // CHOOSE ATTACKING TEAM
    // --------------------------------------------------------

    const attack1 = team1Stats.attack;
    const attack2 = team2Stats.attack;

    const totalAttack = attack1 + attack2;

    let attackingTeam;
    let defendingTeam;
    let attackingStats;
    let defendingStats;

    if (totalAttack <= 0) {

        if (Math.random() < 0.5) {
            attackingTeam = team1;
            defendingTeam = team2;
            attackingStats = team1Stats;
            defendingStats = team2Stats;
        } else {
            attackingTeam = team2;
            defendingTeam = team1;
            attackingStats = team2Stats;
            defendingStats = team1Stats;
        }

    } else {

        const team1Chance =
            attack1 / totalAttack;

        if (Math.random() < team1Chance) {

            attackingTeam = team1;
            defendingTeam = team2;

            attackingStats = team1Stats;
            defendingStats = team2Stats;

        } else {

            attackingTeam = team2;
            defendingTeam = team1;

            attackingStats = team2Stats;
            defendingStats = team1Stats;
        }
    }

    // --------------------------------------------------------
    // SELECT PLAYERS
    // --------------------------------------------------------

    const forwards =
        attackingTeam.players.filter(function(player) {
            return player.position === "FWD";
        });

    const midfielders =
        attackingTeam.players.filter(function(player) {
            return player.position === "MID";
        });

    const defenders =
        defendingTeam.players.filter(function(player) {
            return player.position === "DEF";
        });

    const allAttackers =
        forwards.length > 0
            ? forwards
            : attackingTeam.players;

    const attacker =
        allAttackers[
            Math.floor(
                Math.random() *
                allAttackers.length
            )
        ];

    const midfielder =
        midfielders.length > 0
            ? midfielders[
                Math.floor(
                    Math.random() *
                    midfielders.length
                )
            ]
            : attacker;

    const defender =
        defenders.length > 0
            ? defenders[
                Math.floor(
                    Math.random() *
                    defenders.length
                )
            ]
            : null;


    // --------------------------------------------------------
    // STRENGTH DIFFERENCE
    // --------------------------------------------------------

    const attackingAdvantage =
        attackingStats.attack -
        defendingStats.defence;


    const midfieldAdvantage =
        attackingStats.midfield -
        defendingStats.midfield;


    // --------------------------------------------------------
    // MATCH SITUATION
    // --------------------------------------------------------

    const scoreDifference =
        attackingTeam === team1
            ? matchScore1 - matchScore2
            : matchScore2 - matchScore1;


    // --------------------------------------------------------
    // LATE MATCH DRAMA
    // --------------------------------------------------------

    if (matchMinute >= 75) {

        // Losing team pushes forward
        if (scoreDifference < 0) {

            const lateChance =
                Math.random();

            if (lateChance < 0.30) {

                addCommentaryEvent(
                    matchMinute,
                    "PRESSURE",
                    `${attackingTeam.name} are throwing everything forward as they search for an equaliser.`
                );

                return;
            }

            if (lateChance < 0.50) {

                addCommentaryEvent(
                    matchMinute,
                    "CROWD",
                    `The pressure is building with the clock running down.`
                );

                return;
            }
        }

        // Winning team tries to control game
        if (scoreDifference > 0) {

            if (Math.random() < 0.30) {

                addCommentaryEvent(
                    matchMinute,
                    "CONTROL",
                    `${attackingTeam.name} are slowing the game down and trying to protect their lead.`
                );

                return;
            }
        }
    }


    // --------------------------------------------------------
    // VERY EARLY MATCH
    // --------------------------------------------------------

    if (matchMinute <= 10) {

        if (Math.random() < 0.50) {

            addCommentaryEvent(
                matchMinute,
                "POSSESSION",
                `${attackingTeam.name} settle into possession and look to control the early stages.`
            );

            return;
        }
    }


    // --------------------------------------------------------
    // CHANCE
    // --------------------------------------------------------

    const chanceProbability =
        clamp(
            0.30 +
            attackingAdvantage / 200,
            0.15,
            0.55
        );


    if (Math.random() < chanceProbability) {

        const chanceType =
            Math.random();


        if (chanceType < 0.30) {

            addCommentaryEvent(
                matchMinute,
                "CHANCE",
                `${attacker.name} finds space and creates a dangerous opportunity for ${attackingTeam.name}.`
            );

            return;
        }


        if (chanceType < 0.55) {

            addCommentaryEvent(
                matchMinute,
                "ATTACK",
                `${attackingTeam.name} break forward quickly through ${attacker.name}.`
            );

            return;
        }


        if (chanceType < 0.75) {

            addCommentaryEvent(
                matchMinute,
                "CROSS",
                `${attacker.name} delivers a dangerous ball into the box for ${attackingTeam.name}.`
            );

            return;
        }


        addCommentaryEvent(
            matchMinute,
            "SHOT",
            `${attacker.name} takes a shot from outside the box, but it goes wide.`
        );

        return;
    }


    // --------------------------------------------------------
    // MIDFIELD BATTLE
    // --------------------------------------------------------

    if (
        midfieldAdvantage > 5 &&
        Math.random() < 0.35
    ) {

        addCommentaryEvent(
            matchMinute,
            "MIDFIELD",
            `${midfielder.name} helps ${attackingTeam.name} dominate the midfield and keep possession.`
        );

        return;
    }


    // --------------------------------------------------------
    // DEFENSIVE ACTION
    // --------------------------------------------------------

    if (Math.random() < 0.30) {

        if (defender) {

            addCommentaryEvent(
                matchMinute,
                "DEFENCE",
                `${defender.name} makes an important defensive intervention for ${defendingTeam.name}.`
            );

        } else {

            addCommentaryEvent(
                matchMinute,
                "DEFENCE",
                `${defendingTeam.name} defend well and stop the attack.`
            );
        }

        return;
    }


    // --------------------------------------------------------
    // GOALKEEPER SAVE
    // --------------------------------------------------------

    if (Math.random() < 0.35) {

        addCommentaryEvent(
            matchMinute,
            "SAVE",
            `${defendingTeam.name}'s goalkeeper reacts quickly and makes a good save.`
        );

        return;
    }


    // --------------------------------------------------------
    // COUNTER ATTACK
    // --------------------------------------------------------

    if (Math.random() < 0.30) {

        addCommentaryEvent(
            matchMinute,
            "COUNTER",
            `${attackingTeam.name} launch a quick counter-attack after winning the ball back.`
        );

        return;
    }


    // --------------------------------------------------------
    // POSSESSION
    // --------------------------------------------------------

    addCommentaryEvent(
        matchMinute,
        "POSSESSION",
        `${attackingTeam.name} circulate the ball patiently and look for an opening.`
    );
}

// ============================================================
// V3 - GOAL
// ============================================================

function scoreGoal(teamNumber) {

    let scoringTeam;
    let opposingTeam;


    if (teamNumber === 1) {

        matchScore1++;

        scoringTeam = team1;

        opposingTeam = team2;

    } else {

        matchScore2++;

        scoringTeam = team2;

        opposingTeam = team1;

    }


    // --------------------------------------------------------
    // SELECT SCORER
    // --------------------------------------------------------

    const attackers =
        scoringTeam.players.filter(
            function(player) {

                return (
                    player.position === "FWD" ||
                    player.position === "MID"
                );

            }
        );


    let candidates =
        attackers;


    if (
        !candidates ||
        candidates.length === 0
    ) {

        candidates =
            scoringTeam.players;

    }


    const scorer =
        candidates[
            Math.floor(
                Math.random() *
                candidates.length
            )
        ];


    // --------------------------------------------------------
    // GOAL EVENT
    // --------------------------------------------------------

    matchEvents.push({

        minute: matchMinute,

        type: "GOAL",

        team: scoringTeam.name,

        opponent: opposingTeam.name,

        scorer: scorer.name,

        message:
            `${scorer.name} scores for ${scoringTeam.name}!`

    });
}


// ============================================================
// V3 - COMMENTARY EVENT
// ============================================================

function addCommentaryEvent(
    minute,
    type,
    message
) {

    matchEvents.push({

        minute: minute,

        type: type,

        team: "",

        opponent: "",

        scorer: "",

        message: message

    });
}


// ============================================================
// V3 - UPDATE MATCH DISPLAY
// ============================================================

function updateMatchDisplay() {

    // --------------------------------------------------------
    // MINUTE
    // --------------------------------------------------------

    setText(
        "matchMinute",
        matchMinute
    );


    // --------------------------------------------------------
    // TEAM NAMES
    // --------------------------------------------------------

    setText(
        "liveTeam1",
        team1
            ? team1.name
            : "Team 1"
    );


    setText(
        "liveTeam2",
        team2
            ? team2.name
            : "Team 2"
    );


    // --------------------------------------------------------
    // SCORE
    // --------------------------------------------------------

    setText(
        "liveScore1",
        matchScore1
    );


    setText(
        "liveScore2",
        matchScore2
    );


    // --------------------------------------------------------
    // EVENT LIST
    // --------------------------------------------------------

    const eventList =
        document.getElementById("matchEvents");


    if (!eventList) {

        return;
    }


    eventList.innerHTML = "";


    matchEvents
        .slice()
        .reverse()
        .forEach(
            function(event) {

                const item =
                    document.createElement("div");


                item.className =
                    "match-event";


                let icon = "⚽";


                if (event.type === "CHANCE") {

                    icon = "🎯";

                } else if (
                    event.type === "SAVE"
                ) {

                    icon = "🧤";

                } else if (
                    event.type === "ATTACK"
                ) {

                    icon = "⚡";

                } else if (
                    event.type === "POSSESSION"
                ) {

                    icon = "🔵";

                } else if (
                    event.type === "KICK OFF"
                ) {

                    icon = "🏁";

                }


                item.innerHTML = `

                    <span>
                        ${event.minute}'
                    </span>

                    <strong>
                        ${icon}
                        ${event.type}
                    </strong>

                    <small>
                        ${event.message}
                    </small>

                `;


                eventList.appendChild(item);

            }
        );
}


// ============================================================
// V3 - END MATCH
// ============================================================

function endMatch() {

    if (!matchRunning) {

        return;
    }


    matchRunning = false;


    // --------------------------------------------------------
    // CLEAR TIMER
    // --------------------------------------------------------

    if (matchInterval) {

        clearInterval(matchInterval);

        matchInterval = null;

    }


    // --------------------------------------------------------
    // FINAL EVENT
    // --------------------------------------------------------

    addCommentaryEvent(
        90,
        "FULL TIME",
        `${team1.name} ${matchScore1} - ${matchScore2} ${team2.name}`
    );


    // --------------------------------------------------------
    // FINAL TEAM NAMES
    // --------------------------------------------------------

    setText(
        "finalTeam1",
        team1.name
    );

    setText(
        "finalTeam2",
        team2.name
    );


    // --------------------------------------------------------
    // FINAL SCORE
    // --------------------------------------------------------

    setText(
        "finalScore1",
        matchScore1
    );

    setText(
        "finalScore2",
        matchScore2
    );


    // --------------------------------------------------------
    // RESULT
    // --------------------------------------------------------

    let resultText =
        "🤝 DRAW";


    if (
        matchScore1 >
        matchScore2
    ) {

        resultText =
            `🏆 ${team1.name}`;

    } else if (
        matchScore2 >
        matchScore1
    ) {

        resultText =
            `🏆 ${team2.name}`;

    }


    setText(
        "finalWinner",
        resultText
    );


    // --------------------------------------------------------
    // SHOW RESULT
    // --------------------------------------------------------

    showScreen(
        "matchResultScreen"
    );
}


// ============================================================
// V3 - BUTTON FUNCTIONS
// ============================================================

window.showMatchSetup =
    showMatchSetup;

window.startSimulation =
    startSimulation;
