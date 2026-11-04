const monthTitle = "October 2026";

const sheets = code => [
  `assets/results/oct26/${code}candy.jpg`,
  `assets/results/oct26/${code}movies.jpg`
];

const results = [
  { team: "Ann & Peggy", score: 21, submissions: sheets("ap") },
  { team: "Maggie & Joel", score: 17, submissions: sheets("mj") },
  { team: "Matt & Allie", score: 17, submissions: sheets("ma") },
  { team: "Kathie & Dave", score: 17, submissions: sheets("kd") },
  { team: "Mollie", score: 17, submissions: sheets("mo") },
  { team: "Amy & Adam", score: 16, submissions: sheets("aa") },
  { team: "Rob & Sarah", score: 16, submissions: sheets("rs") },
  { team: "Mom & Dad Snod", score: 16, submissions: sheets("md") },
  { team: "Indrė & Connor", score: 15, submissions: sheets("ic") },
  { team: "Sam & Hannah", score: 12, submissions: sheets("sh") },
  { team: "Jackie & Sofie", score: 11, submissions: sheets("js") },
  { team: "Jordan & Will", score: 10, submissions: sheets("jw") },
  { team: "Ud", score: 8, submissions: sheets("ud") }
];

renderMonth(results);
