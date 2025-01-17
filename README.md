# Parcer Frontend

## Описание

Это React-приложение, которое отображает список вакансий, спаршенных с API HH.ru. Есть возможность фильтрации по ключевому слову, опыту работы, занятости и графику работы.

## Установка и запуск

### Запуск локально:
1. Запускаем backend, руководствуясь README-файлом [backend](https://github.com/danrechi/Rechitsky_BVT2203_back)
2. Заходим в командную строку, переходим в директорию с frontend
3. Устанавливаем зависимости с помощью:
    ```bash
    npm install
    ```
4. Запускаем приложение:
    ```bash
    npm start
    ```

5. Открываем [http://localhost:3000](http://localhost:3000) в браузере.

### Запуск с использованием Docker

1. Убеждаемся, что Docker и Docker Compose установлен.
2. Создаем директорию проекта и переходим в директорию с backend:
    ```bash
    cd backend
    ```
3. Меняем в docker-compose.yml:
   1) В backend: environment: DATABASE_URL на свои данные
   2) В frontend: context: на ../<your_directory_withfront>

4. Запускаем Docker Compose командой
    ```bash
    docker-compose up --build
    ```
5. Открываем [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

- `src/`:
  - `components/`: Компоненты React.
    - `Vacancies.js`: Компонент для отображения и фильтрации списка вакансий.
  - `App.js`: Основной файл приложения.
  - `index.js`: Точка входа приложения.

## Функциональность

- Отображение списка вакансий.
- Фильтрация по ключевому слову.
- Фильтрация по опыту работы.
- Фильтрация по типу занятости.
- Фильтрация по графику работы.

