# Classified-ads

**Classified-ads is a listings website, particularly, similar to the classified-ads we see on news-papers. Let's bring the same idea to the web; This time offering rich input forms, interactive UI, an interactive Map all presented to user with multiple languages and most importantly respecting users privacy.**  

*Classified-ads* as a listing web-app is unique in a way and this is why:
  - It runs very fast,
  - It offers multiple sections (based on your target users),
  - It supports tags (like hundreds),
  - Geolocations (up to thousands),
  - Open possibilities for choices of geolocation to be targeted (country, states),
  - Multiple human languages for the web-app and the posted content.  
  - All are supported in all aspects (UI, back-end, DB, choice of deployment and configuration). 

Notes: 
   
  - *Classified-ads* is not ready for production. IT IS FULL OF BUGS !!!
  - So much blabla following even though the project is simple; This is because I like to explain for beginners.

🧰 Tech stack
---
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" alt="JavaScript logo" width="50" height="50" /> <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" alt="Webpack logo" width="50" height="50" /> <img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap logo" width="50" height="50" /> <img src="https://cdn.worldvectorlogo.com/logos/leaflet-1.svg" alt="Leaflet logo" width="100" height="50" /> <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" alt="NodeJS logo" width="50" height="50" /> <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" alt="Fastify logo" width="50" height="50" /> <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg" alt="MongoDB logo" width="50" height="50" /> 
---

## Functionalities

- Navigation: view a listing, view some tag, view some region, change language, ...
- Search: performant advanced search using text based on indexes, intelligent autocompletion based on a whole scan of DB, geo-search (by radius), front-end search.
- Add a listing in a section, Send a comment to author.
- Basic admin moderation of listings (approve or delete a new listing), check anonymous visitors countries by number.
- Multi-language support on back and front end.
- Maps integration is quite good, you need to check that by yourself !
- A pretty rich UI using dozens of lightweight JS browser libraries (all are very carefully picked !).

## Notes

- The project would like to be *minimal* for it's use case, minimal in functionalities and also in technical tools it relies on, and also *simplistic* in all aspects of design (code, patterns, UI).

- This project is a web-app built using [Fastify](fastify.io/) and a lot of it's official plugins.
  - Fastify is described as: *Fast and low overhead web framework, for Node.js*. Please try to help [them](https://github.com/fastify/fastify) whenever you can.

- Client and server are two folders in the same npm project, `/client` is used to generate front-end which is served by the server. So no separations as it's fine and easy with [point-of-view](https://github.com/fastify/point-of-view/).

- Enforcing safety using *TypeScript, CoffeeScript...* doesn't look as tempting as it is portrait for me, so maybe later.

## Deployment

First, no captures are attached here, follow with installation and see the beauty (minimal & clean) of the delimited map and the clean layout!!!.  
`.env` files hold secret keys and configurations which you want to hide
All other configurations should live in `/config/{NODE_env}.json` file.


- Install sass globally
`npm install -g sass`
-  Install webpack globally
`npm install -g webpack`
-  Create environment files
`touch /.env && /client/.env`
-  Fulfill environment variables on server
   - NODE_ENV=localhost
   - HONEYPOT_KEY=
   - MONGODB_URI=mongodb+srv://###
   - CREDS_PATH=./creds/##.json
   - GCLOUD_STORAGE_BUCKET=
   - JWT_SECRET=
   - COOKIE_NAME=
   - SECRET_PATH=
   -
-  Fulfill environment variables on client
   - NODE_ENV=localhost
   - LATITUDE=
   - LONGITUDE=
   - BORDERS_FILE_URL=
   - STATES_FILE_URL=
   -
-  Generate client public JS/CSS
`npm run prestart`
-  Preapare database
MongoDB must be up with the following dbs and collections  
`DBs: {listings_db_dev, listings_db} & Collections: {listing, words, comment, users, visitors-default-current, visitors-default}`
-  Fulfill Google Cloud credentials (for storage)
`./creds/############.json`
-  Change environment file accordingly
`touch /.env && /client/.env`
-  Verify configuration on your environments as you want here `/config`

### Note

The app bootstraps for Algeria country as an example, with a simple tweak, you could bootstrap the app on another location with a different map (I encourage you to try that).
For instance, my `/client/.env` is like:

```
LATITUDE=36.75
LONGITUDE=3.05
BORDERS_FILE_URL=https://raw.githubusercontent.com/bacloud14/listings-data/main/data/geo/borders-algeria-v0.json
STATES_FILE_URL=https://raw.githubusercontent.com/bacloud14/listings-data/main/data/geo/states-algeria-v0.json
```
With a center (LATITUDE, LONGITUDE) and a map. Check [here](https://github.com/bacloud22/Classified-ads-xx-data) or elswhere for more geoJson data.

With a different geoJSON data, you might need to change encoders in both files `/data/geo/geoJSONEncoder.js` and `/client/data/geo/geoJSONEncoder.js`.

----

## Contribution

- **Contribution is VERY WELCOME, I already thank you in advance. This project needs you, I passed literally a year on this, knowing I'm your average developer, another one would take way less time.**

- **Deploying it elsewhere is fine for non-commercial uses (see license), but please, consider to contribute to this main project pushing everything you find important: a new functionality, a bug or security fix, better design...**

- **I will be very active with pull requests (testing and approving) but less active on resolving raised issue. With this being said, I really appreciate new issues raised after a proper installation and tests.**

- **The app is full of bugs ! I know.**

- **There are dozens of TODOs I leave in code. You can pick one and help the project! Some are left for you to customize depending on your preferences.**

- As a contributor, you are simply advised to read documentation here and in code very meticulously though, raising issues that are known, raising issues about installation (in general) are not really appreciated.

- As a contributor, you can be a UI designer (CSS / image designer...), a developer or a devOps. So you can contribute without knowing much coding for instance. However, if you are a developer, you should have learned basics of web development and how browsers work, JavaScript in front and back-end and so.

- We rely on dozens of open sources projects particularly for front-end particularly. These are lightweight, minimal and safe libraries. Some examples are: 
    * CSS files
    * pell
    * @yaireo\tagify
    * @tarekraafat\autocomplete.js
    * leaflet.fullscreen
    * simple-lightbox
    * egalink-toasty.js
    * holmes
    * Leaflet (very important)
    * mobile-detect
    * svg-injector
    * datatables.net-dt
    * avatar-initials

    This raises multiple challenges mainly for upgrading and actively maintained from their authors. We would like to rely always on the latest versions but we would change one library by another if the project seems inactive or very old (like not supporting modules or so).
    Leaflet particularly is the most important in this regard.

    I don't know much yet about versionning in npm, although [it is very very important](https://docs.npmjs.com/about-semantic-versioning). I suggest to install [ndm](https://720kb.github.io/ndm/) and add two projects `./` and `./client/` to have an eye on last versions and what to expect.

On the occasion, I would like to thank the following contributors:  
[mbussert](https://github.com/mbussert) for helping dark theme  
[leycnmhd](https://github.com/leycnmhd) for helping refactoring client code  
[jimmywarting](https://github.com/jimmywarting) for helping cleaning code and some nice advices  
[jayeclark](https://github.com/jayeclark) for helping CSS layouts (Bootstrap)  
[Fastify team](https://github.com/fastify/help/)  
*I'm sorry all commits were lost, the project was reworked from Express to Fastify, ziped, unziped, uploaded, ... so thanks to y'all*


### Pull requests

- Merging the same code with different indentations is hell, so it is important to keep one coding style between forks. I suggest to install [VSCode ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (Prettier also) that connects automatically with `./eslintrc.js` and `./client/./eslintrc.js`. 
    - "dbaeumer.vscode-eslint"
    - "esbenp.prettier-vscode"

---

## License
<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/">Creative Commons Attribution-NonCommercial 3.0 Unported License</a>.
Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)

### Author
Email: bacloud14[at]gmail(dot)com  
Name: A. B.  
2022