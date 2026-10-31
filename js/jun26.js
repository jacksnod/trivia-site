const monthTitle = "June 2026";

// Scores only for now. Graded sheet images go in assets/results/jun26/ and get
// listed under each team's submissions once Jack gives the go-ahead.
const results = [
  { team: "Mollie", score: 21, submissions: [] },
  { team: "Indrė & Connor", score: 18, submissions: [] },
  { team: "Ann & Peggy", score: 18, submissions: [] },
  { team: "Amy & Adam", score: 18, submissions: [] },
  { team: "Jordan & Will", score: 17, submissions: [] },
  { team: "Sam & Hannah", score: 16, submissions: [] },
  { team: "Matt & Cheese", score: 16, submissions: [] },
  { team: "Jackie & Sofie", score: 12, submissions: [] },
  { team: "Maggie", score: 9, submissions: [] }
];

// Only the standings are shown until the sheets are posted.
renderStandings(addPlaces(sortResults(results)));
