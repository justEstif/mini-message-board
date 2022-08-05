# Assignment Notes

---
*steps 1-5 (completed)*
- we are going to have 2 routes
  - "/" -> the index
    - will use the `index.pug` template
  - "/new" -> a new-message form
- `index.pug` -> we have to pass the messages array to it
  - in the routes/index.ts
    - `res.render('index', { title: "Mini Messageboard", messages: messages })`
  - it will then loop through it and display the values
---
