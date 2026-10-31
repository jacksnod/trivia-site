const monthTitle = "October 2026";

// Scores only for now. Sheet images go in assets/results/oct26/ and get
// listed under each team's submissions once Jack gives the go-ahead.
const results = [
  { team: "Ann & Peggy", score: 21, submissions: [] },
  { team: "Maggie & Joel", score: 17, submissions: [] },
  { team: "Matt & Allie", score: 17, submissions: [] },
  { team: "Amy & Adam", score: 16, submissions: [] },
  { team: "Rob & Sarah", score: 16, submissions: [] },
  { team: "Indrė & Connor", score: 15, submissions: [] },
  { team: "Sam & Hannah", score: 12, submissions: [] },
  { team: "Jackie & Sofie", score: 11, submissions: [] },
  { team: "Jordan & Will", score: 10, submissions: [] },
  { team: "Ud", score: 8, submissions: [] }
];

// Only the standings are shown until the sheets are posted.
renderStandings(addPlaces(sortResults(results)));
