# ТЗ - Конвертер валют
***

Напишите SPA для конвертирования валют, состоящие из двух страниц.

## Описание страниц
#### Главная страница
- Показывает список валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 доллар США = 70,00 руб., а 1 евро = 80,00.
- По-умолчанию у пользователя должна быть определена «базовая» валюта, которую он может настроить.
- Курсы валют оцениваются автоматически каждую минуту.
- Должна быть кнопка принудительного обновления всех курсов валют

#### Страница с конвертером из одной валюты в другую
На этой странице должна быть поля, куда можно ввести текст в виде 15.13, выберите валюту "из" и валюту "в".
Должна быть возможность быстрой смены мест валюты валюты "из" и валюты "в". Пример: конвертировать из долларов США в рубли, необходимо конвертировать из рублей в доллары США.

## Технические требования
- Приложение разработано с использованием React и Redux(при необходимости)
- Для получения текущих курсов найдите и используйте любое стороннее API.
- Роутинг выполнен с использованием React Router v5
- Фреймворк пользовательского интерфейса любой взгляд (например, Ant Design или Semantic UI ).
Можно и на чистом css, главное, чтобы было красиво
- Пакетный менеджер yarn
- Приложение должно запускаться по адресу localhost:3000 командой yarn watch
- При переходах по ссылкам страница не перезагружается
- Исходный код должен быть выложен с вашего аккаунта на Github с файлом Readme с инструкцией по запуску
- Использование TypeScript
- Опциональное задание:
покрытие кода тестами

## О реализации приложения:
- Инициализировано с помощью Create React App
- Стилизация с помощью Sass (scss)
- Стейт менеджер Redux Toolkit

### Запуск приложения `yarn start`
  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
