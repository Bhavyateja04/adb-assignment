# TODO Application (React + Django + MongoDB + Docker)

A full-stack TODO application built using **React**, **Django REST Framework**, **MongoDB**, and **Docker**.

The application allows users to:

- View all TODOs stored in MongoDB.
- Create new TODOs using the React frontend.
- Automatically refresh the TODO list after adding a new item.
- Run the complete application using Docker containers.

---

# Tech Stack

### Frontend
- React
- React Hooks (`useState`, `useEffect`)
- CSS

### Backend
- Python 3
- Django
- Django REST Framework
- PyMongo

### Database
- MongoDB

### Containerization
- Docker
- Docker Compose

---

# Project Structure

```
src
├── app                  # React Frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── rest                 # Django Backend
│   ├── rest
│   ├── manage.py
│   └── requirements.txt
│
Dockerfile
docker-compose.yml
README.md
```

---

# Prerequisites

Make sure the following software is installed:

- Docker Desktop
- Docker Compose
- Git

---

# Clone Repository

```bash
git clone <your-repository-url>
cd <repository-name>
```

---

# Set Environment Variable

### Linux/macOS

```bash
export ADBREW_CODEBASE_PATH="{path_to_repository}/src"
```

### Windows PowerShell

```powershell
$env:ADBREW_CODEBASE_PATH="C:\path\to\project\src"
```

Example:

```powershell
$env:ADBREW_CODEBASE_PATH="C:\Users\Bhavya\Desktop\adb_test\src"
```

---

# Build Docker Containers

Run:

```bash
docker compose build
```

---

# Start the Application

```bash
docker compose up -d
```

Verify containers:

```bash
docker ps
```

Expected:

```
api
app
mongo
```

---

# Access the Application

## React Frontend

```
http://localhost:3000
```

If localhost does not work on your machine, use:

```
http://127.0.0.1:3000
```

---

## Django API

```
http://localhost:8000/todos/
```

or

```
http://127.0.0.1:8000/todos/
```

---

# Expected Output

## Initial Screen

The application displays:

- TODO List
- Create TODO form

Example:

```
List of TODOs

✔ Learn React Hooks
✔ Django Backend
✔ MongoDB

---------------------

Create a TODO

[____________]

[ Add TODO ]
```

---

# Creating a TODO

1. Enter a task.
2. Click **Add TODO**.
3. React sends

```
POST /todos
```

to Django.

4. Django stores the data in MongoDB.

5. React automatically calls

```
GET /todos
```

again and refreshes the list.

---

# API Endpoints

## GET

```
GET /todos/
```

Returns

```json
[
    {
        "id":"664a....",
        "description":"Learn React Hooks"
    },
    {
        "id":"664b....",
        "description":"Learn Django"
    }
]
```

---

## POST

```
POST /todos/
```

Body

```json
{
    "description":"Learn Docker"
}
```

Response

```json
{
    "message":"Todo created successfully",
    "id":"664c..."
}
```

---

# Database

MongoDB stores documents in the **todos** collection.

Example document:

```json
{
    "_id": ObjectId("664c..."),
    "description":"Learn Docker"
}
```

---

# Features Implemented

- Fetch TODOs from MongoDB
- Add TODOs to MongoDB
- Automatic UI refresh
- React Hooks
- REST API
- Dockerized setup
- Responsive UI
- Error handling for API requests

---

# Docker Commands

## Start Containers

```bash
docker compose up -d
```

---

## Stop Containers

```bash
docker compose down
```

---

## Restart Containers

```bash
docker compose restart
```

---

## View Running Containers

```bash
docker ps
```

---

## View Logs

React

```bash
docker logs -f app
```

Backend

```bash
docker logs -f api
```

MongoDB

```bash
docker logs -f mongo
```

---

# Troubleshooting

## React not loading

Restart containers:

```bash
docker compose down
docker compose up -d
```

---

## Backend not responding

Check logs:

```bash
docker logs api
```

---

## MongoDB connection issues

Verify Mongo container:

```bash
docker ps
```

Ensure the **mongo** container is running.

---

# Design Decisions

- Used **React Hooks** (`useState`, `useEffect`) as required.
- Used **PyMongo** directly instead of Django Models.
- Stored all TODOs in MongoDB.
- Implemented REST APIs using Django REST Framework.
- Kept Docker setup unchanged as required.
- Added a clean and responsive user interface without changing the project architecture.

---

# Future Improvements

- Delete TODO
- Edit TODO
- Mark TODO as Completed
- Search TODOs
- Pagination
- Authentication

---

# Author

Bhavya Teja

GitHub: https://github.com/Bhavyateja04/adb-assignment.git