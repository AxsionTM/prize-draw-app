function Upload({ setParticipants }) {
  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      const text = event.target.result;

      if (file.name.endsWith(".json")) {
        try {
          const data = JSON.parse(text);
          setParticipants(data);
        } catch {
          alert("Ошибка JSON");
        }
      }

      else if (file.name.endsWith(".csv")) {
        try {
          const lines = text.split("\n");

          const result = lines.slice(1).map((line) => ({
            name: line.trim(),
          }));

          const clean = result.filter((item) => item.name !== "");

          setParticipants(clean);
        } catch {
          alert("Ошибка CSV");
        }
      }

      else {
        alert("Поддерживаются только JSON и CSV");
      }
    };

    reader.readAsText(file);
  }

  return <input type="file" onChange={handleFile} />;
}

export default Upload;