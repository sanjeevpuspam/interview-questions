### Question 1:

Write a function called **deepClone** which takes an object and creates a copy of it. e.g. `{name: "Paddy",
address: {town: "Lerum", country: "Sweden"}} ` ->  `{name: "Paddy", address: {town: "Lerum", country:
"Sweden"}} `

### Question 2:

We'd like to contact partners with offices within **100km of central London** (coordinates 51.515419,
-0.141099) to invite them out for a meal.
Write a NodeJS/JavaScript program that reads our list of partners [download partners.json here](https://drive.google.com/file/d/1cCH-Ilkk2xyTgg5v8bgnh-6sjRmICrZh/view) and outputs the company
names and addresses of matching partners (with offices within 100km) sorted by company name
(**ascending**).
You can use the first formula from this [Wikipedia article](https://en.wikipedia.org/wiki/Great-circle_distance)
to calculate distance. Don't forget to convert degrees to radians! Your program should be fully tested too.
