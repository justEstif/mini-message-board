# Assignment Notes

---

- _steps 1-5 (completed)_

- we are going to have 2 routes
  - "/" -> the index
    - will use the `index.pug` template
  - "/new" -> a new-message form
- `index.pug` -> we have to pass the messages array to it
  - in the routes/index.ts
    - `res.render('index', { title: "Mini Messageboard", messages: messages })`
  - it will then loop through it and display the values

---

---

-_added the layout_

- I have to setup a new message form
- add a `router.get()` for the `/new` route and point it to a template named `form`

  - I think I should add a layout with some info like this:data

  ```pug
  //- layout.pug
  html
    head
      title My Site - #{title}
    body
      block content
      block foot
        #footer
          p some footer content
  ```

  - then in the index.pug

  ```pug
  extends layout.pug
  block content
    h1= title
    - var pets = ['cat', 'dog']
    each petName in pets
      include pet.pug
  ```

---

---

- I need to add a post request to the form.ts
  - I would then have to parse the req.body
    - need to add the body parser middleware

---
