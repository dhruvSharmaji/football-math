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
            position: "DEF",
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
            name: "Zinédine Zidane",
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

    // 2020 was not awarded

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
// PLAYER OVR CALCULATOR
// ============================================================

function calculatePlayerOVR(player) {

    if (player.position === "FWD") {

        return (
            0.30 * player.shooting +
            0.20 * player.dribbling +
            0.20 * player.pace +
            0.15 * player.passing +
            0.10 * player.stamina +
            0.05 * player.defending
        );
    }


    if (player.position === "MID") {

        return (
            0.25 * player.passing +
            0.20 * player.dribbling +
            0.20 * player.stamina +
            0.15 * player.shooting +
            0.10 * player.pace +
            0.10 * player.defending
        );
    }


    if (player.position === "DEF") {

        return (
            0.35 * player.defending +
            0.20 * player.stamina +
            0.15 * player.pace +
            0.15 * player.passing +
            0.10 * player.dribbling +
            0.05 * player.shooting
        );
    }


    if (player.position === "GK") {

        return (
            0.50 * player.goalkeeping +
            0.15 * player.defending +
            0.15 * player.passing +
            0.10 * player.stamina +
            0.05 * player.pace +
            0.05 * player.dribbling
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

    selectedTeam = null;
    selectedFormation = null;
    selectedPlayers = [];
    currentFilter = "ALL";

    showScreen("teamScreen");

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
}


// ============================================================
// TEAM SELECTION
// ============================================================

function chooseTeam(team) {

    if (!players[team]) {
        console.error("Team not found:", team);
        return;
    }

    selectedTeam = team;
    selectedFormation = null;
    selectedPlayers = [];
    currentFilter = "ALL";

    document.getElementById("formationSection")
        .classList.remove("hidden");

    document.getElementById("playerSection")
        .classList.add("hidden");

    document.getElementById("continueButton")
        .classList.add("hidden");

    document.getElementById("stepNumber")
        .textContent = "2";

    const formationSection =
        document.getElementById("formationSection");

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

    selectedFormation = formation;
    selectedPlayers = [];
    currentFilter = "ALL";

    document.getElementById("playerSection")
        .classList.remove("hidden");

    document.getElementById("continueButton")
        .classList.add("hidden");

    document.getElementById("stepNumber")
        .textContent = "3";

    loadPlayers();

    updatePitch();

    updateTeamOVR();

    document.getElementById("selectionText")
        .textContent = "0 / 11 players selected";

    const playerSection =
        document.getElementById("playerSection");

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

        teamPlayers =
            teamPlayers.filter(function(player) {

                return player.position === currentFilter;

            });
    }


    teamPlayers.forEach(function(player) {

        const card =
            document.createElement("button");

        card.type = "button";
        card.className = "player-card";


        // If already selected
        if (selectedPlayers.includes(player)) {

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


        card.onclick = function() {

            selectPlayer(player, card);

        };


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
// SELECT PLAYER
// ============================================================

function selectPlayer(player, card) {

    if (selectedPlayers.length >= 11) {
        return;
    }


    if (selectedPlayers.includes(player)) {
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


    // Reload the list so selected players remain
    // selected even when using filters.

    loadPlayers();


    if (selectedPlayers.length === 11) {

        const continueButton =
            document.getElementById("continueButton");


        if (continueButton) {

            continueButton.classList.remove("hidden");

            continueButton.scrollIntoView({
                behavior: "smooth"
            });

        }
    }
}


// ============================================================
// PITCH
// ============================================================

function updatePitch() {

    for (let i = 0; i < 11; i++) {

        const position =
            document.getElementById(`position-${i}`);


        if (!position) {
            continue;
        }


        position.classList.remove("filled");


        let positionText;


        if (i === 0) {

            positionText = "GK";

        } else if (i <= 4) {

            positionText = "DEF";

        } else if (i <= 7) {

            positionText = "MID";

        } else {

            positionText = "FWD";

        }


        position.innerHTML = `
            <span>${positionText}</span>
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

    const parts =
        name.split(" ");

    return parts[parts.length - 1];
}


// ============================================================
// TEAM OVR
// ============================================================

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


    const total =
        selectedPlayers.reduce(
            function(sum, player) {

                return sum +
                    calculatePlayerOVR(player);

            },
            0
        );


    const average =
        total / selectedPlayers.length;


    teamOVRElement.textContent =
        average.toFixed(2);
}


// ============================================================
// FINISH TEAM
// ============================================================

function finishTeam() {

    if (selectedPlayers.length !== 11) {

        alert("You need to select exactly 11 players.");

        return;
    }


    const total =
        selectedPlayers.reduce(
            function(sum, player) {

                return sum +
                    calculatePlayerOVR(player);

            },
            0
        );


    const teamOVR =
        total / selectedPlayers.length;


    const summaryTeam =
        document.getElementById("summaryTeam");

    const summaryFormation =
        document.getElementById("summaryFormation");

    const summaryOVR =
        document.getElementById("summaryOVR");


    if (summaryTeam) {

        summaryTeam.textContent =
            selectedTeam;

    }


    if (summaryFormation) {

        summaryFormation.textContent =
            selectedFormation;

    }


    if (summaryOVR) {

        summaryOVR.textContent =
            teamOVR.toFixed(2);

    }


    const summary =
        document.getElementById("summaryPlayers");


    if (!summary) {

        showScreen("readyScreen");

        return;
    }


    summary.innerHTML = "";


    selectedPlayers.forEach(function(player) {

        const score =
            calculatePlayerOVR(player);


        const item =
            document.createElement("div");


        item.className =
            "summary-player";


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


    showScreen("readyScreen");
}


// ============================================================
// RESTART
// ============================================================

function restart() {

    selectedTeam = null;
    selectedFormation = null;
    selectedPlayers = [];
    currentFilter = "ALL";

    showScreen("homeScreen");
}


// ============================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ============================================================

window.startMatch = startMatch;
window.showScreen = showScreen;
window.chooseTeam = chooseTeam;
window.chooseFormation = chooseFormation;
window.filterPlayers = filterPlayers;
window.selectPlayer = selectPlayer;
window.finishTeam = finishTeam;
window.restart = restart;