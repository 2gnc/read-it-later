# Разработка
Для нормальной работы проекта нужен `node 10+`.

В разных вкладках в оболочке `bash`:

1. Запустить локальную БД `yarn start-db` (порт 27018)
2. Запустить сервер `yarn start-server` (порт 5000)
3. Запустить клиентское приложение `yarn start-app` (порт 3000)

Линтер: `yarn lint`.

## Разрешение проблем
### Если занят порт mongo
Если запуск падает с ошибкой `Failed to set up listener: SocketException: Address already in use`,
1. Найти предыдущий инстанс `lsof -iTCP -sTCP:LISTEN -n -P`
2. `sudo kill <mongo_command_pid>`
