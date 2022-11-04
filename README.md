# Chat API

Guide to test the API:

* `npm install`
* `npm run dev`

API structure:

## GET /api/v1/users

Get all users

## POST /api/v1/auth/register

Register a new user

### Body - Example

```json
{
    "firstName": "Julio Cesar",
    "lastName": "Cortez",
    "email": "juliocesar",
    "password": "hola",
    "phone": "0123456789",
    "birthday": "1997/06/14",
    "gender": "hombre",
    "country": "Mexico"
}
```

## POST /api/v1/auth/login

Login a user

### Body - Example

```json
{
    "email": "juliocesar@gmail.com",
    "password": "hola"
}
```

### Return - Example

```json
{
    "message": "Correct Credentials",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFmYTI2YWUzLWZmODMtNDg2OS04OWQ2LWExODI2MTRjZTQzZCIsImVtYWlsIjoiYWxleGFuZGVyY2FzYXNucW5xQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY2ODI1NjA5fQ.V6JmG9cQcPJS1Vpl2EZzBvfxsnKpXm-NTwHK1miES4s"
}
```

## GET /api/v1/users/me

Get loged user data

### Headers

```
Authorization jwt TOKEN
```

## PATCH /api/v1/users/me

Update logged user data

### Headers

```
Authorization jwt TOKEN
```

## DELETE /api/v1/users/me

Delete logged user

### Headers

```
Authorization jwt TOKEN
```

## GET /api/v1/users/{ID}

Get the data of a user by an ID


## GET /api/v1/conversations

Get all conversations

## POST /api/v1/conversations

Create a new conversation

### Headers

```
Authorization jwt TOKEN
```

### Return - Example

```json
{
    "id": "a29c9cca-f342-4fa7-8b9b-709394bfe9e8",
    "title": "title of the conversation",
    "imageUrl": "hola",
    "userId": "afa26ae3-ff83-4869-89d6-a182614ce43d",
    "updatedAt": "2022-10-26T23:34:27.207Z",
    "createdAt": "2022-10-26T23:34:27.207Z"
}
```

## GET /api/v1/conversations/{ID}

Get conversation by ID

### Return - Example

```json
{
    "id": "8a18c0b3-05d9-42cc-892e-a63e1d1b6dff",
    "title": "title of the conversation",
    "imageUrl": "i donno, just a text",
    "userId": "afa26ae3-ff83-4869-89d6-a182614ce43d",
    "createdAt": "2022-10-26T21:13:41.912Z",
    "updatedAt": "2022-10-26T21:13:41.912Z"
}
```

## POST /api/v1/conversations/{CONVERSATION-ID}/messages

Get all messages of a conversation

### Body - Example

```json
{
    "message": "The message content",
    "conversationId": "8a18c0b3-05d9-42cc-892e-a63e1d1b6dff"
}
```

### Return - Example

```json
{
    "id": "d2796cdb-d279-4d7c-bd6e-c304691726f9",
    "userId": "afa26ae3-ff83-4869-89d6-a182614ce43d",
    "conversationId": "8a18c0b3-05d9-42cc-892e-a63e1d1b6dff",
    "message": "The message content",
    "updatedAt": "2022-10-26T23:08:23.809Z",
    "createdAt": "2022-10-26T23:08:23.809Z"
}
```

## GET /api/v1/conversations/{CONVERSATION-ID}/messages

Get all messages of a conversation

### Return - Example

```json
[
    {
        "id": "d2796cdb-d279-4d7c-bd6e-c304691726f9",
        "userId": "afa26ae3-ff83-4869-89d6-a182614ce43d",
        "conversationId": "8a18c0b3-05d9-42cc-892e-a63e1d1b6dff",
        "message": "The message content",
        "createdAt": "2022-10-26T23:08:23.809Z",
        "updatedAt": "2022-10-26T23:08:23.809Z"
    }
]
```

