import { useState } from "react";

function Upload() {
  const [participants, setParticipants] = useState([]);

  function handleFile(event) {
    const file = event.target.files[0];

    if (!file) {
      alert("Файл не выбран");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;

      try {
        const data = JSON.parse(text);
        setParticipants(data);
      } catch (error) {
        alert("Ошибка: неправильный JSON файл");
      }
    };

    reader.readAsText(file);
  }

  return (
    <div>
      <h2>Загрузка участников</h2>

      <input type="file" onChange={handleFile} />

      <h3>Список участников:</h3>

      <ul>
        {participants.map(function (item, index) {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Upload;