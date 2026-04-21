# 🎉 Розыгрыш призов (Random Picker)

Простое веб-приложение для случайного выбора победителя из списка участников.
Проект реализован с использованием React + Vite.

---

## 🚀 Возможности

* 📂 Загрузка участников из файла (JSON / CSV)
* 🎯 Случайный выбор победителя
* 🎡 Анимация рулетки
* 📜 История розыгрышей
* 💾 Сохранение данных (localStorage)
* 📥 Экспорт истории в JSON
* 🧹 Очистка участников и истории

---

## 📁 Форматы файлов

### JSON

```json
[
  { "name": "Алексей" },
  { "name": "Мария" }
]
```

### CSV

```csv
name
Алексей
Мария
Игорь
```

---

## ⚙️ Установка и запуск

1. Установить зависимости:

```bash
npm install
```

2. Запустить проект:

```bash
npm run dev
```

3. Открыть в браузере:

```
http://localhost:5173
```

---

## 🧠 Как пользоваться

1. Загрузить файл с участниками
2. Нажать кнопку "Крутить рулетку"
3. Получить победителя
4. Смотреть историю ниже
5. При необходимости скачать историю или удалить

---

## 📦 Структура проекта

```
prize-draw-app/
 ├── data/
 │    ├── participants.json
 │    ├── participants.csv
 │
 ├── src/
 │    ├── components/
 │    │    ├── Upload.jsx
 │    │    ├── Roulette.jsx
 │
 │    ├── utils/
 │    │    ├── loader.js
 │    │    ├── draw.js
 │    │    ├── logger.js
 │
 │    ├── App.jsx
 │    ├── main.jsx
 │    ├── index.css
 │
 ├── public/
 ├── index.html
 ├── package.json
 ├── vite.config.js
 ├── README.md
```


---

## 💾 Хранение данных

Приложение использует localStorage для сохранения:

* участников
* истории розыгрышей

---

## ⚠️ Обработка ошибок

* Проверка формата файла
* Проверка пустого списка участников
* Сообщения об ошибках (alert)

---

## 📌 Ограничения

* Один и тот же участник может выиграть несколько раз
* Данные хранятся только в браузере

---

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/146373364?v=4" width="120" style="border-radius:50%">
</p>

<h2 align="center">👨‍💻 Maxsim (Axsion)</h2>

<p align="center">
  <img src="https://img.shields.io/badge/Age-17-blue?style=for-the-badge">
  <a href="https://github.com/AxsionTM">
    <img src="https://img.shields.io/badge/GitHub-Axsion-black?style=for-the-badge&logo=github">
  </a>
</p>

---

## 📅 Версия

v1.0
