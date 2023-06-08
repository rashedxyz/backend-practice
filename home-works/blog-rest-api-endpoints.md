# API endpoints of blog REST API 

## Users
### Public Routes :-
- Registration - POST - api/v1/users/register
- Login - POST - api/v1/users/login

### Private Routes :-
- Create users - POST - api/v1/users
- Get all users - GET - api/v1/users
- Update users - PATCH - api/v1/users
- Delete users - DELETE - api/v1/users

## Articles
### Public routes :-
- Get all articles - GET - api/v1/articles
- Get specific article - GET - api/v1/articles/:id

### Private routes :- 
- Create an article - POST - api/v1/articles
- Edit an article - PATCH - api/v1/articles
- Delete an article - DELETE - api/v1/articles

## Comments
### Public routes :-
- View comments - GET - api/v1/articles/:articleId/comments

### Private routes :-
- Post comment - POST - api/v1/articles/:articleId/comments
- Edit comment - PATCH - api/v1/articles/:articleId/comments
- Delete comment - DELETE - api/v1/articles/:articleId/comments