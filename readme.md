<p align="center">
  <img src="https://user-images.githubusercontent.com/123023398/221219765-2fb1ffcd-f91a-46c5-87e3-581fdf2eb0af.png?raw=true" alt="BookIt's custom image"/>
</p>

BOOKiT
======
<strong>An App for Performing Artists who are Navigating the Busy Process of Auditioning for Roles</strong>  

<strong>BookIt</strong> allows actors to create a detailed contact list of industry professionals who they've met and auditioned for. 
<strong>BookIt</strong> works as a rolodex of past and upcoming appointments, noting the date and location of the audition as well as who was in the room so that the artist can follow up with the right people and maintain relationships. 
<strong>BookIt</strong> also offers the artist to manage their preperation for the appointment as well a space to reflect on how it went.

- **_API:_** I'm making my own! In the final product, the user will generate the API for themselves.

- **_API Snippet:_** N/A

- **_MVP:_** To be able to create, view and edit audition appointment listings.

- **Post MVP:** Design and implement a front end! Add user authentication and the ability to upload photos.

- **_Goals:_**
<br>
[x] Create one model named 'Audtions'
<br>
[ ] Complete CRUD funtionality with RESTful routes

- **_Data Model:_**
![data-model](https://github.com/richardsaudek/Booked.it1/blob/046c00cc8e7a508a5b381a0f9c8a87718730de91/project2%20wire.png)

| Route                         | HTTP Method | DB Action | Description                 |
| ----------------------------- | ----------- | --------- | --------------------------- |
| /api/models/Audition_Info/:id | GET         | INDEX     | Indexes all the submissions |
| /api/models/Audition_Info/:id | POST        | CREATE    | Create a submission         |
| /api/models/Audition_Info/:id | GET         | SHOW      | Show a single submission    |
| /api/models/Audition_Info/:id | PATCH       | UPDATE    | Update a submission         |
| /api/models/Audition_Info/:id | DELETE      | DELETE    | Delete a submission         |
