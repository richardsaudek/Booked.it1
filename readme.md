<p align="center">
  <img src="https://user-images.githubusercontent.com/123023398/221219765-2fb1ffcd-f91a-46c5-87e3-581fdf2eb0af.png?raw=true" alt="BookIt's custom image"/>
</p>

<strong>BOOK iT!</strong>
======

 <strong>An App for Professional Performing Artists Navigating the Busy Process of Auditioning</strong> 
<br>
<br>
## <strong>BookIt</strong> allows performance industry professionals to:

<br>

>👉 create a detailed contact list of industry professionals who they've met and auditioned for. <br>

>👉 keep track of past and upcoming appointments noting the date and location of the audition as well as who was in the room so that the artist can follow up with the right people to maintain professional relationships. <br>

>👉 manage any preperation for the appointment as well a space to reflect on how it went.
<br>
<br>


### Table of Contents:
**[API](#api)**<br>
**[MVP](#mvp)**<br>
**[Post- MVP](#post-mvp)**<br>
**[Goals](#goals)**<br>
**[Routing Table](#routing-table)**<br>
**[Data Model](#data-model)**<br>
**[Schema](#schema)**<br>
<br>

## API: 

I'm making some sample JSON models, but in the final product, the user will generate the API themselves.
<br>
<br>

## MVP:

- [x] Build a JSON API using Mongoose and Express
- [x] Achieve complete CRUD functionality implemented with RESTful routes
- [x] Deploy via Vercel 
- [Check it out!](https://booked-it.vercel.app/)


## Post MVP:

- [ ] Design a frontend
- [ ] Add user authentication
- [ ] Create ability to upload headshots
- [ ] Address link to gmaps 


## Goals:

- [x] Create model for Audtions
- [x] Complete CRUD funtionality with RESTful routes
  - [x] GET function to index all submissions
  - [x] POST function to create new submission
  - [x] PATCH function to edit one or more fields
  - [x] DELETE function to delete submission(s)
  
<br>

## Routing Table:

| Route                         | HTTP Method | DB Action | Description                 |
| ----------------------------- | ----------- | --------- | --------------------------- |
| /api/models/Audition_Info/:id | GET         | INDEX     | Indexes all the submissions |
| /api/models/Audition_Info/:id | POST        | CREATE    | Create a submission         |
| /api/models/Audition_Info/:id | GET         | SHOW      | Show a single submission    |
| /api/models/Audition_Info/:id | PATCH       | UPDATE    | Update a submission         |
| /api/models/Audition_Info/:id | DELETE      | DELETE    | Delete a submission         |
## Data Model:

<p align="center">

<img src="https://github.com/richardsaudek/Booked.it1/blob/046c00cc8e7a508a5b381a0f9c8a87718730de91/project2%20wire.png?raw=true" alt="BookIt's data model"/>
</p>

## Schema:



```var s = "JavaScript syntax highlighting";
const auditionSchema = new mongoose.Schema(
  {
    name_of_project: String,
    type_of_project: String,
    date: String,
    location: String,
    union_status: Boolean,
    casting_office: String,
    casting_dir: String,
    casting_associate: String,
    prep: String,
    post_aud_notes: String
  }
)
export default mongoose.model('Audition', auditionSchema)```



