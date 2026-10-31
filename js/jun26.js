const monthTitle = "June 2026";

const sheets = code => [
  `assets/results/jun26/${code}beards.jpg`,
  `assets/results/jun26/${code}tvsets.jpg`
];

const results = [
  { team: "Mollie with the help of strangers", score: 21, submissions: sheets("mo") },
  { team: "Indrė & Connor", score: 18, submissions: sheets("ic") },
  { team: "Ann & Peggy", score: 18, submissions: sheets("ap") },
  { team: "Amy & Adam", score: 18, submissions: sheets("aa") },
  { team: "Jordan & Will", score: 17, submissions: sheets("jw") },
  { team: "Sam & Hannah", score: 16, submissions: sheets("sh") },
  { team: "Matt & Cheese", score: 16, submissions: sheets("mc") },
  { team: "Jackie & Sofie", score: 12, submissions: sheets("js") },
  { team: "Maggie", score: 9, submissions: sheets("mg") }
];

renderMonth(results);
