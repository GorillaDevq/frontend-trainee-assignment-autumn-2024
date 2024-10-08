# Тестовое задание для стажёра Frontend
***
## Суть задания:
Разработать личный кабинет продавца на маркетплейсе, в котором есть возможность управлять своими объявлениями и заказами.

## Оглавление:
***
- [Установка](#установка)
- [Запуск](#запуск)
- [Описание](#описание)
- [Сервер](#сервер)
- [Что удалось реализовать](#что-удалось-реализовать)
- [Скрипты](#скрипты)
- [Директории](#директории)
- [Ход решения](#ход-решения)
## Установка
***
Чтобы воспользоваться готовыми скриптами проекта и запустить его, нужно установить зависимости
```
npm install
```

## Запуск
***
Вы можете запустить как через docker, так и через терминал</br>
Через терминал
```
npm start
npm run server
```
Через докер
```
docker-compose up --build
```
Если у вас возникнут вопросы по версионности, описал подробнее ниже :)

## Описание
***
В кратце опишу технологии.
- Полная конфигурация Webpack с нуля;
- Настройка: React, Typescript, Babel, scss, css modules, eslint;
- Настройка тестовой среды: jest.
- Использование архитектуры Feature-sliced design

## Что удалось реализовать
***
### Основное задание
- Страницы объявления
  - Просмотр информации о товаре
  - Редактирование товара
- Страницу всех объявлений
  - Список всех объявлений
  - Пагинация
  - Выбор количества объявлений
  - Поиск по полному названию
  - Переход на страницу объявления
  - Карточка объявления
  - Возможность создать новые объявление
- Страницы заказов
  - Фильтры по статусу
  - Сортировка по сумме
  - Просмотр всех товаров и переход на них
  - 
- Панель навигации
  - Вкладка “Объявления”
    - Вкладка “Заказы”

### Дополнительное задание
- Фильтрация выдачи по (цене, просмотрам, лайкам)
- Пагинация на странице заказов
## Сервер
***
В проекте установленна библиотека `json-server`, которая позволяет очень быстро поднимать REST-API.</br>
Для запуска сервера:
```
npm run server
```

## Скрипты
***
- `start` - запускает проект в `dev` режиме;
- `server` - запуск сервера и поднятие БД;
- `build:prod` - сборка проекта в `prod` режиме;
- `build:dev` - сборка проекта в `dev` режиме;
- `lint:ts` - запуск линтнера для `TypeScript`;
- `lint:ts:fix` - исправление ошибок линтнера для `TypeScript`;
- `test:unit` - запуск `unit` тестов;

## Директории
***
- `.github` - настройка `CI/CD`;
- `.husky` - настройка `pre-commit` хуков;
- `docker` - директория с докер файлами:
    - `json-server` - докер файл для json-server;
    - `nginx` - конфиг для раздачи статики;
    - `react-app` - докер файл для приложения собранного в проде;
- `config` - хранит настройки тестов и вебпака;
    - `builds` - конфигурация вебпака для проекта и `storybook`;
    - `jest` - конфигурация тестов;
- `json-server` - директория для хранения БД;
- `public` - директория содержит файл `html`;
- `src` - конфигурация самого приложения;

## Ход решения
***
Можете взять кружечку чая :)
В процессе выполнения тестового задания я столкнулся с рядом интересных задач.

### X-Total-Count (в заголовках)
Первой проблемой была - получение числа данных со стороны сервера (X-Total-Count).
Подумал, что смогу написать мидлварину для json-server, однако,
чтобы писать обертки на сервером, нужно ставить более старую версию.
### Подготовка Docker-файла
Далее я решил заранее подготовить Docker-файл, чтобы упростить процесс развёртывания приложения и избежать потенциальных проблем в будущем. 
Однако столкнулся с трудностями, так как стабильные версии json-server ниже 1.0.0 не корректно разворачивались через Docker. 
После ресерча на Stack Overflow, я нашёл решение — использовать версию 0.12.2, которая по функциональности остаётся стабильной и надёжной.
### Отмена запросов при переключении между страницами
Ещё одной интересной задачей была реализация отмены запросов при переключении между страницами. 
Я смог решить эту задачу, используя подход с отменой предыдущих запросов при помощи AbortController. 
Хотя решение получилось немного неэффективным из-за массива, оно справляется с управлением запросами.
### Поиск по названию без учета регистра
Также столкнулся с проблемой, связанной с поиском без учета регистра, 
так как поиск через json-server осуществляется с учётом регистра. 
Сначала я планировал создать свой сервер поверх json-server для обработки запросов. 
Однако, когда я попытался переписать один из маршрутов, стандартные эндпоинты перестали корректно работать.


На этом этапе я даже рассматривал вариант создания полностью собственного сервера с кастомными обработчиками поверх json-server. 
Однако этот подход показался мне супер оверхедом, как говориться keep it simple, stupid.

Благодарю команду Avito Tech за предоставленное интересное тестовое задание и за проверку моей работы. Это был ценный опыт.
