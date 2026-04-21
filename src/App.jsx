import { useState } from "react";
import Upload from "./components/Upload";

function App() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);

  function pickWinner() {
    if (participants.length === 0) {
      alert("Сначала загрузите участников");
      return;
    }

    const randomIndex = Math.floor(Math.random() * participants.length);
    const selected = participants[randomIndex];

    setWinner(selected);
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
        <h2>Победитель: {winner.name}</h2>
      )}
    </div>
  );
}

export default App;