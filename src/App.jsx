import { useState } from "react";
import Upload from "./components/Upload";
import Roulette from "./components/Roulette";

function App() {
  const [participants, setParticipants] = useState(
    JSON.parse(localStorage.getItem("participants")) || []
  );

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const [winner, setWinner] = useState(null);

  function handleParticipants(data) {
    setParticipants(data);
    localStorage.setItem("participants", JSON.stringify(data));
  }

  function handleWinner(result) {
    setWinner(result);

    const newHistory = [...history, result];
    setHistory(newHistory);

    localStorage.setItem("history", JSON.stringify(newHistory));
  }

  function clearParticipants() {
    setParticipants([]);
    localStorage.removeItem("participants");
  }

  function clearHistory() {
    setHistory([]);
    localStorage.removeItem("history");
  }

// ТАК ЭТОТ КОД, ЭТО КНОПКА УСТАНОВКИ ИСТОРИИ В ФОРМАТЕ JSON.
  function downloadLog() {
    const json = JSON.stringify(history, null, 2);

    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "history.json";
    a.click();

    URL.revokeObjectURL(url);
  }
  
// ВСЁ ПРОСТО ЕСЛИ С КОДОМ ВСЁ ВПОРЯДКЕ И РАБОТАЕТ, ТОГДА САМ ДИЗАЙН ВЫДАЁТ САЙТА
  return (
    <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
      <h1>🎉 Розыгрыш призов</h1>

      <Upload setParticipants={handleParticipants} />

      <h3>Участники:</h3>
      <ul>
        {participants.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <button onClick={clearParticipants}>Очистить участников</button>

      <Roulette participants={participants} onPickWinner={handleWinner} />

      {winner && (
        <div>
          <h2>Победитель: {winner.name}</h2>
          <p>{winner.date}</p>
        </div>
      )}

      <h3>История:</h3>
      <ul>
        {history.map((h, i) => (
          <li key={i}>
            {h.name} — {h.date}
          </li>
        ))}
      </ul>

      <button onClick={clearHistory}>Очистить историю</button>

      <button onClick={downloadLog}>Скачать лог (JSON)</button>
    </div>
  );
}

export default App;