import { useState } from "react";
import Upload from "./components/Upload";

function App() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([]);

  function pickWinner() {
    if (participants.length === 0) {
      alert("Сначала загрузите участников");
      return;
    }

    const randomIndex = Math.floor(Math.random() * participants.length);
    const selected = participants[randomIndex];

    const now = new Date().toLocaleString();

    const result = {
      name: selected.name,
      date: now,
    };

    setWinner(result);

    setHistory([...history, result]);
  }

  return (
    <div>
      <h1>🎉 Розыгрыш призов</h1>

      <Upload setParticipants={setParticipants} />

      <h2>Список участников:</h2>
      <ul>
        {participants.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <h2>Всего участников: {participants.length}</h2>

      <button onClick={pickWinner}>Выбрать победителя</button>

      {winner && (
        <div>
          <h2>Победитель: {winner.name}</h2>
          <p>Дата: {winner.date}</p>
        </div>
      )}

      <h2>История розыгрышей:</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.name} — {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;