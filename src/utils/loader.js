// Так, этот код выполняет роль такую как сохранение, удаление, получение и удаление участников
export function saveParticipants(participants) {
  localStorage.setItem("participants", JSON.stringify(participants));
}

export function loadParticipants() {
  const data = localStorage.getItem("participants");
  return data ? JSON.parse(data) : [];
}

export function clearParticipantsStorage() {
  localStorage.removeItem("participants");
}