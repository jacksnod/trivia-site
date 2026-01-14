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

function sortResults(results) {
  return [...results].sort((a, b) => b.score - a.score);
}

function addPlaces(data) {
  let place = 1;

  return data.map((item, index) => {
    if (index > 0 && item.score < data[index - 1].score) {
      place = index + 1;
    }
    return { ...item, place };
  });
}

function renderStandings(rankedResults) {
  const container = document.getElementById("standings");
  container.innerHTML = "";

  rankedResults.forEach(r => {
    const p = document.createElement("p");
    p.className = `flex items-center gap-2 ${placeMeta(r.place)}`;
    p.textContent = `${placeMedal(r.place)} ${r.place} — ${r.team} (${r.score})`;
    container.appendChild(p);
  });
}

function renderSubmissions(rankedResults) {
  const container = document.getElementById("submissions");
  container.innerHTML = "";

  rankedResults.forEach(r => {
    const details = document.createElement("details");
    details.className = "border rounded-lg mb-4";

    const summary = document.createElement("summary");
    summary.className = "cursor-pointer px-4 py-2 font-medium";
    summary.textContent = `${placeMedal(r.place)} ${r.place} — ${r.team} (${r.score})`;

    const content = document.createElement("div");
    content.className = "p-4 flex flex-col items-center gap-4";

    r.submissions.forEach(path => {
      const img = document.createElement("img");
      img.src = path;
      img.className = "w-full max-w-md rounded-lg shadow";
      content.appendChild(img);
    });

    details.appendChild(summary);
    details.appendChild(content);
    container.appendChild(details);
  });
}

function renderMonth(results) {
  const sorted = sortResults(results);
  const ranked = addPlaces(sorted);

  renderStandings(ranked);
  renderSubmissions(ranked);
}
