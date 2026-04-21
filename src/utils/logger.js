// Так, этот код выполняет роль такую как сохранение историю победителей

export function saveHistory(history) {
  localStorage.setItem("history", JSON.stringify(history));
}

export function loadHistory() {
  const data = localStorage.getItem("history");
  return data ? JSON.parse(data) : [];
}

export function clearHistoryStorage() {
  localStorage.removeItem("history");
}