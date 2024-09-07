# Используем node образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /json-server

# Устанавливаем json-server глобально
RUN npm install -g json-server

# Копируем db.json в контейнер (по желанию, можно также использовать volume)
COPY ./json-server/db.json /json-server/db.json

# Открываем порт для json-server
EXPOSE 3000

# Команда для запуска json-server
CMD ["json-server", "--watch", "db.json", "--port", "3000"]
