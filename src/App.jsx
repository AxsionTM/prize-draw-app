// Сам маин проекта импорты итд и вывод веб сайта

import { useState, useEffect } from "react";
import Upload from "./components/Upload";
import Roulette from "./components/Roulette";

function App() {
  const [participants, setParticipants] = useState(() => {
    const saved = localStorage.getItem("participants");
    return saved ? JSON.parse(saved) : [];
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");
    return saved ? JSON.parse(saved) : [];
  });

// Так, этот код выполняет роль такую как загрузку участников, историю, случайного победителя, сохранение результата итд
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("participants", JSON.stringify(participants));
  }, [participants]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  function handleWinner(result) {
    setWinner(result);
    setHistory([...history, result]);
  }

  function clearParticipants() {
    setParticipants([]);
    localStorage.removeItem("participants");
  }

  function clearHistory() {
    setHistory([]);
    localStorage.removeItem("history");
  }

  function downloadHistory() {
    const dataStr = JSON.stringify(history, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });

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

      <Upload setParticipants={setParticipants} />

      <h3>Участники:</h3>
      <ul>
        {participants.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>

      <button onClick={clearParticipants}>
        Очистить участников
      </button>

      <Roulette
        participants={participants}
        onPickWinner={handleWinner}
      />

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

      <button onClick={clearHistory}>
        Очистить историю
      </button>

      <br /><br />

      <button onClick={downloadHistory}>
        📥 Скачать историю (JSON)
      </button>
    </div>
  );
}

export default App;