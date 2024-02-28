import { useState, useEffect } from "react";

function App() {
  const [dates, setDates] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const [sortBy, setSortBy] = useState("");

  const sortByDate = () => {
    setSortBy("date");
  };

  const sortByViews = () => {
    setSortBy("views");
  };
  useEffect(() => {
    if (sortBy === "date") {
      setDates(
        [...dates].sort((a, b) => {
          if (b.date != a.date) return b.date.localeCompare(a.date);
          else return b.views - a.views;
        })
      );
    }
    if (sortBy === "views") {
      setDates(
        [...dates].sort((a, b) => {
          if (b.views != a.views) return b.views - a.views;
          else return b.date.localeCompare(a.date);
        })
      );
    }
  }, [sortBy]);

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, i) => (
            <tr key={i}>
              <td>{date.date}</td>
              <td>{date.views}</td>
              <td>{date.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
