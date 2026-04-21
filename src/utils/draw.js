// Так, этот код выполняет роль такую как честный выбор победителя или чтоб было без повторов!

export function pickRandomWinner(participants, history) {
  if (participants.length === 0) {
    return null;
  }

  // здесь я сделал так чтобы повторно нельзя было выйграть чееловеку
  const winnersNames = history.map((h) => h.name);

  const available = participants.filter(
    (p) => !winnersNames.includes(p.name)
  );

  if (available.length === 0) {
    return null; 
  }

  const randomIndex = Math.floor(Math.random() * available.length);
  const selected = available[randomIndex];

  return {
    name: selected.name,
    date: new Date().toLocaleString(),
  };
}