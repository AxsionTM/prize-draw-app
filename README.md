# Random Picker

Простое веб-приложение для случайного выбора победителя из списка участников.

Проект реализован с использованием **React + Vite**.

**Live Demo:** https://axsiontm.github.io/prize-draw-app/

**Презентация:** https://drive.google.com/file/d/14xcBBgaQpnjpW0g8KIR7OhS466eqfHjX/view?usp=sharing

---

## Возможности

* Загрузка участников из файлов JSON и CSV
* Случайный выбор победителя
* Анимация рулетки
* История розыгрышей
* Сохранение данных через `localStorage`
* Экспорт истории в JSON
* Очистка списка участников и истории

---

## Форматы файлов

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

## Установка и запуск

Установите зависимости:

```bash
npm install
```

Запустите проект:

```bash
npm run dev
```

После запуска откройте:

```text
http://localhost:5173
```

---

## Использование

1. Загрузите файл со списком участников.
2. Нажмите кнопку «Крутить рулетку».
3. Получите случайно выбранного победителя.
4. Просмотрите историю розыгрышей.
5. При необходимости экспортируйте историю или очистите сохранённые данные.

---

## Структура проекта

```text
prize-draw-app/
├── data/
│   ├── participants.json
│   └── participants.csv
│
├── src/
│   ├── components/
│   │   ├── Upload.jsx
│   │   └── Roulette.jsx
│   │
│   ├── utils/
│   │   ├── loader.js
│   │   ├── draw.js
│   │   └── logger.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Хранение данных

Приложение использует `localStorage` для хранения:

* списка участников;
* истории розыгрышей.

Данные сохраняются локально в браузере и не передаются на сервер.

---

## Обработка ошибок

Приложение выполняет:

* проверку формата загружаемого файла;
* проверку наличия участников;
* отображение сообщений об ошибках.

---

## Ограничения

* Один и тот же участник может выиграть несколько раз.
* Данные хранятся только локально в браузере.
* Для работы приложения требуется браузер с поддержкой `localStorage`.

---

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/146373364?v=4" width="120" style="border-radius:50%">
</p>

<h2 align="center">Maxsim (Axsion)</h2>

<p align="center">
  <a href="https://github.com/AxsionTM">
    <img src="https://img.shields.io/badge/GitHub-Axsion-black?style=for-the-badge&logo=github">
  </a>
</p>

---

## Версия

`v1.0`

---

## Демонстрация

Видео с демонстрацией работы приложения:

[![Смотреть видео](https://img.youtube.com/vi/4SPG0isxo88/0.jpg)](https://youtu.be/4SPG0isxo88)
