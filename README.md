
# Next.js Todo App with Prisma and MongoDB

This is a simple Todo app built with Next.js, Prisma, and MongoDB. It uses basic CRUD (Create, Read, Update, Delete) operations to manage tasks. This guide will help you set up the project from scratch.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure you have a MongoDB database available or use MongoDB Atlas for a cloud database)

## Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone "url"
```

## Step 2: Install Dependencies

Install the necessary dependencies for the project using npm (or yarn):

```bash
npm install
```

This will install the following packages:

"dependencies": {
    "@prisma/client": "^6.7.0",
    "clsx": "^2.1.1",
    "mongoose": "^8.14.1",
    "next": "15.3.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0"
  },

## Step 3: Install Prisma

Prisma is an ORM that allows you to interact with the MongoDB database in a simple way. To set it up:

### 1. Install Prisma CLI

If you haven’t installed Prisma globally, run:

```bash
npm install prisma --save-dev
```

### 2. Generate the Prisma Client

In your project, navigate to the root folder and run:

```bash
npx prisma init
```

This will create a `prisma` folder with a `schema.prisma` file. Now, open the `schema.prisma` file and update it with the MongoDB connection string.

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

Make sure you add your MongoDB connection string to the `.env` file, like this:

```env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority"
```

### 3. Create the Database Models

You can define your database models inside the `schema.prisma` file. For a basic Todo app, here’s an example model:

```prisma
model Todo {
  id      String @id @default(auto()) @map("_id") @db.ObjectId
  task    String
  completed Boolean @default(false)
  createdAt DateTime @default(now())
  
}
```

### 4. Generate Prisma Client

After editing the `schema.prisma` file, run:

```bash
npx prisma generate
```

This will generate the Prisma client to interact with your MongoDB database.

## Step 4: Setup MongoDB Connection

In your `lib` folder (create it if it doesn't exist), create a new file called `prisma.js` and add the following code:

```js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
```

This will initialize Prisma in your project and allow you to interact with your database.

## Step 5: Setting Up React Icons

We are using the `react-icons` library to include icons in our app. To install the library:

```bash
npm install react-icons
```

Once the library is installed, you can use icons like this in your components:

```jsx
import { FaCheck, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo.id)} />
      <span>{todo.task}</span>
      <button onClick={() => handleDelete(todo.id)}>
        <FaTrash />
      </button>
    </div>
  );
};
```

## Step 6: Running the Application

Now that everything is set up, you can run the application. Start the development server by running:

```bash
npm run dev
```

This will start the app on `http://localhost:3000`, and you should be able to access your Todo app.

## Step 7: Usage

Once the app is running, you can:

1. **Add new Todos**: Fill in the input field and click "Add Todo".
2. **Complete Todos**: Click the checkbox next to a Todo to mark it as completed.
3. **Delete Todos**: Click the trash icon to delete a Todo.
4. **Edit Todos**: Click on edit button to edit Todo.
5. **Filter Todo**: Filter Todo by clicking on filters [All, Active, Completed]


