import { useState } from "react";

function Roulette({ participants, onPickWinner }) {
  const [current, setCurrent] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  function start() {
    if (participants.length === 0) {
      alert("Нет участников");
      return;
    }

    if (isSpinning) return;

    setIsSpinning(true);

    let counter = 0;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * participants.length);
      setCurrent(participants[randomIndex].name);

      counter++;

      if (counter > 20) {
        clearInterval(interval);

        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];

        setCurrent(winner.name);

        onPickWinner({
          name: winner.name,
          date: new Date().toLocaleString(),
        });

        setIsSpinning(false);
      }
    }, 100);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          height: "50px",
          marginBottom: "10px",
        }}
      >
        {current || "Нажми старт"}
      </div>

      <button onClick={start}>🎯 Крутить рулетку</button>
    </div>
  );
}

export default Roulette;