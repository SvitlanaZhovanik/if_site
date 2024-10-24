# IF-landing
This is a landing page to the main site for use in marketing and other purposes. 

![banner.png](public%2Fbanner.png)

## Stack 

- Next.js
- Tailwind.css
- React-hook-form
- Nodemailer


## Requirements

- [Node.js](https://nodejs.org/en/) (18.x or later)
- [npm](https://www.npmjs.com/) (9.x or later)

## Getting Started

Clone the repository and navigate to the project folder:

```bash
git clone [git@github.com:SvitlanaZhovanik/if_site.git](https://github.com/SvitlanaZhovanik/if_site.git)
```

Install the dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result. Congratulations! You've successfully started your Next.js project.

## Project Structure

### Description of object structure

<details>

<summary><b>Structure: </b></summary>

<br/>

```
├── .husky -> folder with githooks
|-- app -> folder with the main code of the project (pages, layout, etc.)
|-- components -> folder with reusable components
    |-- common -> components that are used in more than one module
    |-- layout -> components that are used in the layout
|-- public -> folder with static files (images, fonts, etc.)
<!-- You can create these folders already in work -->
|-- data -> data for the project ( from graphql, json, etc.)
|-- utils -> helpers, functions, etc.
```

</details>

