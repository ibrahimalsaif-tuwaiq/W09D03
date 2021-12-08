# Todo list with authentication and authorization using Redux

This is an app for a todo list with authentication and authorization in Express and React using Redux.

While running locally: http://localhost:3000

## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start using the todos
- **Login:** As a user I can login to the app so that I can see my todos
- **Logout:** As a user I can logout from the todos so no one else can use it
- **Add Todo** As a user I can add a todo item to my list
- **Edit Todo** As a user I can edit a todo item from my list
- **Delete Todo** As a user I can delete a todo item from my list
- **See Users** As a user with a `admin` role I can see all the users
- **Delete Users** As a user with a `admin` role I can delete any user
- **Users Todos** As a user with a `admin` role I can see any user todos
- **Delete User Todos** As a user with a `admin` role I can delete any user todos

## Getting Started

### Installing Dependencies

#### Node js

Follow instructions to install the latest version of Node js for your platform in the [Node js docs](https://nodejs.org/en/).

#### NPM Dependencies

Once you have the project in your local machine, install dependencies by running:

```bash
npm install
```

This will install all of the required packages.

##### Key Dependencies

- [React](https://reactjs.org/) A JavaScript library for building user interfaces.

- [axios](https://www.npmjs.com/package/axios) is a promise based HTTP client for the browser and node.js.

- [redux](https://www.npmjs.com/package/redux) is a predictable state container for JavaScript apps.

- [react-redux](https://www.npmjs.com/package/react-redux) is a React bindings for Redux.

- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension) is a debugging platform for Redux apps.

- [react-icons](https://react-icons.github.io/react-icons/) Include popular icons in your React projects easily with react-icons.

- [sweetalert2](https://sweetalert2.github.io/) A Beautiful, Responsive, Customizable, Accessible (Wai-aria) Replacement For Javascript's Popup Boxes.

## Running the server

To run the server, execute:

```bash
npm start
```

## Router Routes

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | Todos                | user only                  | Todos page                                                   |
| `/signup`        | Signup               | public                     | Signup form, navigate to login after signup                  |
| `/login`         | Login                | public                     | Login form, navigate to todos after login                    |
| `/dashboard`     | Dashboard            | admin only                 | Shows all users in the app                                   |
| `/users/:userId` | User                 | admin only                 | Shows a user todos                                           |

## Components

- Login
- Signup
- Navbar
- Todos
- Dashboard
- User

## UML Diagram

![UML digram](https://github.com/ibrahimalsaif-tuwaiq/W09D03/blob/main/public/digrams/todos%20with%20redux%20frontend%20UML.jpg?raw=true)

## Design

### Color palette

|      Ming     | Middle Blue Green |  Alice Blue |
|---------------|-------------------|-------------|
|    #006D77    |      #83C5BE      |   #EDF6F9   |
