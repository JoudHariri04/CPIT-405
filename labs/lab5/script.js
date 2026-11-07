const data = [
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers (PHI)",
        points: 33,
        rebounds: 10.8,
        assists: 5.7,
        blocks: 1.5,
        turnovers: 4.2
    },
    {
        name: "Jalen Brunson",
        team: "New York Knicks (NYK)",
        points: 32.4,
        rebounds: 3.3,
        assists: 7.5,
        blocks: 0.2,
        turnovers: 2.7
    },
    {
        name: "Shai Gilgeous-Alexander",
        team: "Oklahoma City Thunder (OKC)",
        points: 30.2,
        rebounds: 7.2,
        assists: 6.4,
        blocks: 1.7,
        turnovers: 2.2
    },
    {
        name: "Tyrese Maxey",
        team: "Philadelphia 76ers (PHI)",
        points: 29.8,
        rebounds: 5.2,
        assists: 6.8,
        blocks: 0.3,
        turnovers: 2.2
    },
    {
        name: "Donovan Mitchell",
        team: "Cleveland Cavaliers (CAVS)",
        points: 29.6,
        rebounds: 5.4,
        assists: 4.7,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Luka Dončić",
        team: "Dallas Mavericks (DAL)",
        points: 28.9,
        rebounds: 9.5,
        assists: 8.1,
        blocks: 0.4,
        turnovers: 4.1
    },
    {
        name: "Nikola Jokić",
        team: "Denver Nuggets (DEN)",
        points: 28.7,
        rebounds: 13.4,
        assists: 8.7,
        blocks: 0.7,
        turnovers: 3.3
    },
    {
        name: "Anthony Davis",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 15.6,
        assists: 4,
        blocks: 1.6,
        turnovers: 2.2
    },
    {
        name: "LeBron James",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 6.8,
        assists: 8.8,
        blocks: 1,
        turnovers: 3.8
    },
    {
        name: "Anthony Edwards",
        team: "Minnesota Timberwolves (MIN)",
        points: 27.6,
        rebounds: 7,
        assists: 6.5,
        blocks: 0.6,
        turnovers: 3.3
    },
    {
        name: "Devin Booker",
        team: "Phoenix Suns (PHX)",
        points: 27.5,
        rebounds: 3.3,
        assists: 6,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Paolo Banchero",
        team: "Orlando Magic (ORL)",
        points: 27,
        rebounds: 8.6,
        assists: 4,
        blocks: 0.6,
        turnovers: 4.6
    },
    {
        name: "Kevin Durant",
        team: "Phoenix Suns (PHX)",
        points: 26.8,
        rebounds: 6.5,
        assists: 3.3,
        blocks: 1.5,
        turnovers: 2.5
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics (BOS)",
        points: 25,
        rebounds: 9.7,
        assists: 6.3,
        blocks: 0.7,
        turnovers: 2.6
    },
    {
        name: "Khris Middleton",
        team: "Milwaukee Bucks (MIL)",
        points: 24.7,
        rebounds: 9.2,
        assists: 4.7,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Jaylen Brown",
        team: "Boston Celtics (BOS)",
        points: 23.9,
        rebounds: 5.9,
        assists: 3.3,
        blocks: 0.6,
        turnovers: 2.7
    },
    {
        name: "Bam Adebayo",
        team: "Miami Heat (MIA)",
        points: 22.6,
        rebounds: 9.4,
        assists: 3.8,
        blocks: 0,
        turnovers: 1.6
    },
    {
        name: "Kyrie Irving",
        team: "Dallas Mavericks (DAL)",
        points: 22.1,
        rebounds: 3.7,
        assists: 5.1,
        blocks: 0.3,
        turnovers: 2.3
    },
    {
        name: "Pascal Siakam",
        team: "Indiana Pacers (IND)",
        points: 21.6,
        rebounds: 7.5,
        assists: 3.8,
        blocks: 0.4,
        turnovers: 1.1
    },
    {
        name: "James Harden",
        team: "Los Angeles Clippers (LAC)",
        points: 21.2,
        rebounds: 4.5,
        assists: 8,
        blocks: 1,
        turnovers: 2.3
    },
    {
        name: "Jamal Murray",
        team: "Denver Nuggets (DEN)",
        points: 20.6,
        rebounds: 4.3,
        assists: 5.6,
        blocks: 0.5,
        turnovers: 2.6
    },
    {
        name: "Paul George",
        team: "Los Angeles Clippers (LAC)",
        points: 19.5,
        rebounds: 6.8,
        assists: 4.8,
        blocks: 0.5,
        turnovers: 2.3
    },
    {
        name: "Karl-Anthony Towns",
        team: "Minnesota Timberwolves (MIN)",
        points: 19.1,
        rebounds: 9,
        assists: 2.6,
        blocks: 0.2,
        turnovers: 1.7
    },
    {
        name: "Franz Wagner",
        team: "Orlando Magic (ORL)",
        points: 18.9,
        rebounds: 6.9,
        assists: 4.4,
        blocks: 1.3,
        turnovers: 1.3
    },
    {
        name: "Jalen Williams",
        team: "Oklahoma City Thunder (OKC)",
        points: 18.7,
        rebounds: 6.8,
        assists: 5.4,
        blocks: 0.5,
        turnovers: 1.9
    },
    {
        name: "Tyrese Haliburton",
        team: "Indiana Pacers (IND)",
        points: 18.7,
        rebounds: 4.8,
        assists: 8.2,
        blocks: 0.7,
        turnovers: 2.1
    },
    {
        name: "Donte DiVincenzo",
        team: "New York Knicks (NYK)",
        points: 17.8,
        rebounds: 4,
        assists: 2.6,
        blocks: 0.9,
        turnovers: 1.2
    },
    {
        name: "CJ McCollum",
        team: "New Orleans Pelicans (NOP)",
        points: 17.8,
        rebounds: 4.8,
        assists: 4.8,
        blocks: 0.8,
        turnovers: 4
    },
    {
        name: "Brook Lopez",
        team: "Milwaukee Bucks (MIL)",
        points: 17.7,
        rebounds: 4.3,
        assists: 1.8,
        blocks: 1.3,
        turnovers: 1.5
    },
    {
        name: "Myles Turner",
        team: "Indiana Pacers (IND)",
        points: 17,
        rebounds: 6.6,
        assists: 2.1,
        blocks: 1.5,
        turnovers: 1.9
    },
    {
        name: "Austin Reaves",
        team: "Los Angeles Lakers (LAL)",
        points: 16.8,
        rebounds: 3.8,
        assists: 3.6,
        blocks: 0.6,
        turnovers: 0.8
    },
    {
        name: "Tyler Herro",
        team: "Miami Heat (MIA)",
        points: 16.8,
        rebounds: 3.6,
        assists: 5.4,
        blocks: 0,
        turnovers: 2.8
    },
    {
        name: "Derrick White",
        team: "Boston Celtics (BOS)",
        points: 16.7,
        rebounds: 4.3,
        assists: 4.1,
        blocks: 1.2,
        turnovers: 0.8
    },
    {
        name: "Bobby Portis",
        team: "Milwaukee Bucks (MIL)",
        points: 16.5,
        rebounds: 11.3,
        assists: 1,
        blocks: 0.2,
        turnovers: 1.5
    },
    {
        name: "Bradley Beal",
        team: "Phoenix Suns (PHX)",
        points: 16.5,
        rebounds: 2.8,
        assists: 4.5,
        blocks: 0.3,
        turnovers: 3.3
    },
    {
        name: "Ivica Zubac",
        team: "Los Angeles Clippers (LAC)",
        points: 16.2,
        rebounds: 9.3,
        assists: 1,
        blocks: 0.5,
        turnovers: 1.3
    },
    {
        name: "Evan Mobley",
        team: "Cleveland Cavaliers (CAVS)",
        points: 16,
        rebounds: 9.3,
        assists: 2.3,
        blocks: 2.2,
        turnovers: 1.8
    },
    {
        name: "Michael Porter Jr.",
        team: "Denver Nuggets (DEN)",
        points: 15.8,
        rebounds: 6.8,
        assists: 1.1,
        blocks: 0.8,
        turnovers: 1.5
    },
    {
        name: "Darius Garland",
        team: "Cleveland Cavaliers (CAVS)",
        points: 15.7,
        rebounds: 3.6,
        assists: 5.8,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Chet Holmgren",
        team: "Oklahoma City Thunder (OKC)",
        points: 15.6,
        rebounds: 7.2,
        assists: 2.1,
        blocks: 2.5,
        turnovers: 1.9
    },
    {
        name: "Andrew Nembhard",
        team: "Indiana Pacers (IND)",
        points: 14.9,
        rebounds: 3.3,
        assists: 5.5,
        blocks: 0.2,
        turnovers: 1.4
    },
    {
        name: "Jalen Suggs",
        team: "Orlando Magic (ORL)",
        points: 14.7,
        rebounds: 5.1,
        assists: 3.3,
        blocks: 0.4,
        turnovers: 2.9
    },
    {
        name: "Josh Hart",
        team: "New York Knicks (NYK)",
        points: 14.5,
        rebounds: 11.5,
        assists: 4.5,
        blocks: 0.8,
        turnovers: 2.6
    },
    {
        name: "Jonas Valančiūnas",
        team: "New Orleans Pelicans (NOP)",
        points: 14.5,
        rebounds: 11,
        assists: 1.3,
        blocks: 0,
        turnovers: 2.5
    },
    {
        name: "Aaron Gordon",
        team: "Denver Nuggets (DEN)",
        points: 14.3,
        rebounds: 7.3,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    },
    {
        name: "Brandon Ingram",
        team: "New Orleans Pelicans (NOP)",
        points: 14.3,
        rebounds: 4.5,
        assists: 3.3,
        blocks: 1.3,
        turnovers: 2.3
    },
    {
        name: "D'Angelo Russell",
        team: "Los Angeles Lakers (LAL)",
        points: 14.2,
        rebounds: 2.8,
        assists: 4.2,
        blocks: 0.2,
        turnovers: 1.8
    },
    {
        name: "Kelly Oubre Jr.",
        team: "Philadelphia 76ers (PHI)",
        points: 13.2,
        rebounds: 4,
        assists: 1.7,
        blocks: 1.2,
        turnovers: 1.3
    },
    {
        name: "Jrue Holiday",
        team: "Boston Celtics (BOS)",
        points: 13.2,
        rebounds: 6.1,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    }
];


// get all the html elements
const searchInput = document.getElementById("search");
const teamFilter = document.getElementById("team-filter");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const playerRows = document.getElementById("player-rows");


function renderTable(players) {
    // clear the old rows first so every time we search/filter the rows dont get added twice
    playerRows.innerHTML = "";
    players.forEach((player) => {
        const row = document.createElement("tr"); // create each row
        // name
        const nameCell = document.createElement("td"); // create each element in the row
        nameCell.textContent = player.name; // adds text inside the td element
        row.appendChild(nameCell); // added the namecell element (td) inside the tr element

        // team 
        const teamCell = document.createElement("td");
        teamCell.textContent = player.team;
        row.appendChild(teamCell);

        //points
        const pointsCell = document.createElement("td");
        pointsCell.textContent = player.points;
        row.appendChild(pointsCell);

        //rebounds
        const reboundsCell = document.createElement("td");
        reboundsCell.textContent = player.rebounds;
        row.appendChild(reboundsCell);

        //assists
        const assistsCell = document.createElement("td");
        assistsCell.textContent = player.assists;
        row.appendChild(assistsCell);

        playerRows.appendChild(row); // put the finished row insde table in the html.

    });
}

renderTable(data);


const teamNames = [...new Set (data.map((player)=> player.team) ) ].sort();
// without new set there would be duplicates
// we create an array of only the team of the players
// turn it into a set to remove duplicates
// turn it back into an array to sort


// loop over team names and create options for each for the drop menu :

teamNames.forEach((teamName) => {

    const option = document.createElement("option");
    option.textContent = teamName;
    option.value = teamName;
    teamFilter.appendChild(option);


});



// search and filter :

function filterPlayers() {
    const searchText = searchInput.value.toLowerCase(); // what the user typed, lowercase so "lebron" and "LeBron" both work
    const selectedTeam = teamFilter.value; // the team chosen from the drop menu ("all" by default)

    const filteredPlayers = data.filter((player) => {
        const matchesName = player.name.toLowerCase().includes(searchText); // true if the name has the typed text inside it
        const matchesTeam = selectedTeam === "all" || player.team === selectedTeam; // true if "all" is chosen or the team is the same
        return matchesName && matchesTeam; // the player stays only if both are true
    });

    renderTable(filteredPlayers); // draw the table again with only the filtered players
}
// filter() makes a new array and keeps only the players that return true
// we use one function for both the search and the drop menu so they work together
// ex: search "j" + team "Boston Celtics" shows only boston players with j in their name


searchInput.addEventListener("input", filterPlayers); // "input" runs every time the user types a letter
teamFilter.addEventListener("change", filterPlayers); // "change" runs when the user picks another option from the drop menu


// dark mode :

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); // toggle adds the class if its not there and removes it if it is
});
// the .dark-mode class is already in styles.css so we only add/remove it from the body


// mouseover (event delegation) :

playerRows.addEventListener("mouseover", (event) => {
    const row = event.target.closest("tr"); // event.target is the td we are on, closest() goes up to its tr
    if (row) {
        row.classList.add("highlight");
    }
});

playerRows.addEventListener("mouseout", (event) => {
    const row = event.target.closest("tr");
    if (row) {
        row.classList.remove("highlight");
    }
});
// event delegation = we put ONE listener on the tbody instead of a listener on every row
// it still works for new rows that renderTable creates after searching because the event bubbles up to the tbody
