import { useState } from "react";

function Roulette({ participants, onPickWinner }) {
  const [displayName, setDisplayName] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  function spin() {
    if (participants.length === 0) {
      alert("Нет участников");
      return;
    }

    setIsSpinning(true);

    let count = 0;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * participants.length);
      setDisplayName(participants[randomIndex].name);

      count++;

      if (count > 20) {
        clearInterval(interval);

        const finalIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[finalIndex];

        setDisplayName(winner.name);

        const result = {
          name: winner.name,
          date: new Date().toLocaleString(),
        };

        onPickWinner(result);

        setIsSpinning(false);
      }
    }, 100);
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2>{displayName || "Нажми крутить"}</h2>

      <button onClick={spin} disabled={isSpinning}>
        🎯 Крутить рулетку
      </button>
    </div>
  );
}

export default Roulette;