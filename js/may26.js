const monthTitle = "April 2026";

const results = [
  {
    team: "Mike & Linda",
    score: 17,
    submissions: [
      "assets/results/may26/mllogos.jpeg",
      "assets/results/may26/mlsigns.jpeg"
    ]
  },
  {
    team: "Ann & Peggy",
    score: 15,
    submissions: [
      "assets/results/may26/aplogos.jpeg",
      "assets/results/may26/apsigns.jpeg"
    ]
  },
  {
    team: "Matt & Cheese",
    score: 19,
    submissions: [
      "assets/results/may26/malogos.jpeg",
      "assets/results/may26/masigns.jpeg"
    ]
  },
  {
    team: "Jackie & Sofie",
    score: 15,
    submissions: [
      "assets/results/may26/jslogos.jpeg",
      "assets/results/may26/jssigns.jpeg"
    ]
  },
  {
    team: "Amy & Adam",
    score: 19,
    submissions: [
      "assets/results/may26/aalogos.jpeg",
      "assets/results/may26/aasigns.jpeg"
    ]
  },
  {
    team: "Matt & Lizzie",
    score: 0,
    submissions: [
      "assets/results/may26/mnlboth.jpeg",
    ]
  },
  {
    team: "Rob & Sarah",
    score: 0,
    submissions: [
     
    ]
  },
  {
    team: "Dave & Kathie",
    score: 0,
    submissions: [
      "assets/results/may26/kdfood.jpg",
      "assets/results/may26/kdcommercials.jpg"
    ]
  },
  {
    team: "Maggie & Joel",
    score: 0,
    submissions: [
      
    ]
  },
  {
    team: "Sam & Hannah",
    score: 16,
    submissions: [
      "assets/results/may26/shanswers.heic"
    ]
  },
  {
    team: "UD",
    score: 16,
    submissions: [
      "assets/results/may26/udlogos.jpeg",
      "assets/results/may26/udsigns.jpeg"
    ]
  },
  {
    team: "Emma & Matt",
    score: 0,
    submissions: [
      "assets/results/may26/mnefood.jpeg",
      "assets/results/may26/mnecommercials.jpeg"
    ]
  },
  {
    team: "Mollie",
    score: 15,
    submissions: [
      "assets/results/may26/mmlogos.jpeg",
      "assets/results/may26/mmsigns.jpeg"
    ]
  },
  {
    team: "Will & Jordan",
    score: 16,
    submissions: [
        "assets/results/may26/wjfood.jpeg",
        "assets/results/may26/wjcommercials.jpeg"
    ]
  },
  {
    team: "Megan & Ryan",
    score: 0,
    submissions: [
        "assets/results/may26/mrfood.jpg",
        "assets/results/may26/mrcommercials.jpg"
    ]
  },
  {
    team: "Indrė & Connor",
    score: 19,
    submissions: [
        "assets/results/may26/cilogos.jpg",
        "assets/results/may26/cisigns.jpg"
    ]
  },
];

// run template
renderMonth(results);


/*
function placeMeta(place) {
  if (place === 1) return "font-bold text-yellow-600 text-xl";
  if (place === 2) return "font-semibold text-gray-700 text-lg";
  if (place === 3) return "font-semibold text-gray-700";
  return "text-gray-600";
}
function placeMedal(place) {
  if (place === 1) return "👑";
  if (place === 2) return "🥈";
  if (place === 3) return "🥉";
  return "";
}


const results = [
    { 
        team: "Maggie & Joel", 
        score: 42,
        submissions: [
            "assets/results/dec25/mnjcereal.jpeg",
            "assets/results/dec25/mnjfaces.jpeg"
        ] 
    },
    { team: "Vulich Family", score: 30 },
    { team: "Mike & Linda", score: 26 },
    { team: "Jeff & Laurie", score: 36},
    { team: "Matt & Cheese", score:30}
]

console.log(results)

const sortedResults = [...results].sort((a, b) => b.score - a.score)

console.log(sortedResults)

function addPlaces(data) {
  let place = 1;

  return data.map((item, index) => {
    if (index > 0 && item.score < data[index - 1].score) {
      place = index + 1;
    }
    return { ...item, place };
  });
}

const rankedResults = addPlaces(sortedResults);

console.log(rankedResults);

function renderStandings() {
  const container = document.getElementById("standings");

  rankedResults.forEach(r => {
    const p = document.createElement("p");
    p.className = `flex items-center gap-2 ${placeMeta(r.place)}`;
    p.textContent = `${placeMedal(r.place)} ${r.team} (${r.score})`;
    container.appendChild(p);
  });
}

function renderSubmissions() {
  const container = document.getElementById("submissions");

  rankedResults.forEach(r => {
    const details = document.createElement("details");
    details.className = "border rounded-lg mb-4";

    const summary = document.createElement("summary");
    summary.className = "cursor-pointer px-4 py-2 font-medium";

    summary.textContent = `${placeMedal(r.place)} ${r.place} — ${r.team} (${r.score})`;

    const content = document.createElement("div");
    content.className = "p-4 flex flex-col items-center gap-4";

    r.submissions.forEach(imgPath => {
      const img = document.createElement("img");
      img.src = imgPath;
      img.className = "w-full max-w-md rounded-lg shadow";
      content.appendChild(img);
    });

    details.appendChild(summary);
    details.appendChild(content);
    container.appendChild(details);
  });
}

renderStandings();
renderSubmissions();
*/