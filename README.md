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
[<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" alt="JavaScript logo" width="50" height="50" />](https://www.javascript.com/) 
[<img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" alt="Webpack logo" width="50" height="50" />](https://webpack.js.org/)
[<img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap logo" width="50" height="50" />](https://getbootstrap.com/docs/5.0/)
[<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" alt="NodeJS logo" width="50" height="50" />](https://nodejs.org/)
[<img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" alt="Fastify logo" width="50" height="50" />](https://fastify.io/)
[<img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg" alt="MongoDB logo" width="50" height="50" />](https://docs.mongodb.com/drivers/node/current/)

🧰 Front-end JS/CSS
---
[<img src="https://raw.githubusercontent.com/jaredreich/pell/master/images/logo.png" alt="Pell logo" width="50" height="50" />](https://github.com/jaredreich/pell)
[<img src="https://raw.githubusercontent.com/yairEO/tagify/master/docs/readme-header.svg" alt="Tagify" width="50" height="50" />](https://github.com/yairEO/tagify)
[<img src="https://haroen.me/holmes/images/holmes_logo-hover.svg" alt="Holmes" width="50" height="50" />](https://github.com/Haroenv/holmes)
[<img src="https://cdn.worldvectorlogo.com/logos/leaflet-1.svg" alt="Leaflet logo" width="100" height="50" />](https://leafletjs.com/)
[<img src="https://camo.githubusercontent.com/2ad966e7273e5fa36e98a63f6ad2c99e023ac67f0bef3bb8ff3a308a12d219aa/68747470733a2f2f67626c6f627363646e2e676974626f6f6b2e636f6d2f7370616365732532462d4c39695336576d3268796e53354839476a376a2532466176617461722e706e673f616c743d6d65646961" alt="I18n
" width="50" height="50" />](https://github.com/danabr/jsI18n)
<p>... and many others</p>


## Functionalities

- Navigation: view a listing, view some tag, view some region, change language, ...
- Search: performant advanced search using text based on indexes, intelligent autocompletion based on a whole scan of DB, geo-search (by radius), front-end search.
- Add a listing in a section, Send a comment to author.
- Basic admin moderation of listings (approve or delete a new listing), check anonymous visitors countries by number.
- Multi-language support on back and front end.
- Maps integration is quite good, you need to check that by yourself !
- A pretty rich UI using dozens of lightweight JS browser libraries (all are very carefully picked !).

## Captures

__             |  __
:-------------------------:|:-------------------------:
![Today_s listings](/.github/Screenshot%202022-06-04%20at%2010-07-06%20Classified-ads%20-%20Today_s%20listings.png "Today_s listings")  |  ![Donations](/.github/Screenshot%202022-06-04%20at%2010-08-01%20Classified-ads%20-%20donations.png "Donations")
![Events](/.github/Screenshot%202022-06-04%20at%2010-08-30%20Classified-ads%20-%20events.png "Events")  |  ![Skills](/.github/Screenshot%202022-06-04%20at%2010-09-13%20Classified-ads%20-%20skills.png "Skills")
![Back and front search](/.github/Screenshot%202022-06-04%20at%2010-10-02%20Classified-ads%20-%20donations.png "Back and front search")  |  ![Clustered listings](/.github/Screenshot%202022-06-04%20at%2010-20-00%20Classified-ads%20-%20Today_s%20listings.png "Clustered listings")

__             |  __
:-------------------------:|:-------------------------:
![User management page](/.github/Screenshot%202022-06-04%20at%2013-37-06%20Your%20listings.png "User management page")  |  ![Admin moderation page](/.github/Screenshot%202022-06-04%20at%2013-39-45%20admin.png "Admin moderation page")

## Notes

- The project would like to be *minimal* for it's use case, minimal in functionalities and also in technical tools it relies on, and also *simplistic* in all aspects of design (code, patterns, UI).

- This project is a web-app built using [Fastify](fastify.io/) and a lot of it's official plugins.
  - Fastify is described as: *Fast and low overhead web framework, for Node.js*. Please try to help [them](https://github.com/fastify/fastify) whenever you can.

- Client and server are two folders in the same npm project, `/client` is used to generate front-end which is served by the server. So no separations as it's fine and easy with [point-of-view](https://github.com/fastify/point-of-view/).

- Enforcing safety using *TypeScript, CoffeeScript...* doesn't look as tempting as it is portrait for me, so maybe later.

## Deployment

`.env` files hold secret keys and configurations which you want to hide
All other configurations should live in `/config/{NODE_env}.json` file.


`.env` files hold secret keys and configurations which you want to hide.  
All other configurations should live in `/config/{NODE_env}.json` file.

- Install sass globally
`npm install -g sass`
-  Install webpack globally
`npm install -g webpack`
-  Create environment files
`touch /.env && /client/.env`
-  Fulfill environment variables on server (note that `localhost` is meant for easy deployment on your machine  
while `development` is meant for deployment on cloud providers (tested on Heroku))
   - NODE_ENV=localhost
   - HONEYPOT_KEY=
   - MONGODB_URI=mongodb+srv://### (optional for localhost env)
   - CREDS_PATH=./creds/##.json
   - GCLOUD_STORAGE_BUCKET=NameOfBucket
   - JWT_SECRET=Just@Passw0rd
   - COOKIE_NAME=Just@Name
   - SECRET_PATH=Just@Passw0rd
   - PASSWORD=Just@Passw0rd
   - DEBUG=sws:*
   - REDIS_URI=127.0.0.1
   - ADMIN_PASS=PASSWORD
   - ADMIN_EMAIL=some_outlook_email@outlook.com
   - NO_CLUSTER=true
   - DEFAULT_LANG=en-US
   
-  Preapare database  
   - Redis database must be up  
   - MongoDB must be up with the following dbs and collections  
`DBs: {listings_db_dev, listings_db} & Collections: {listing, words, comment, users, userstemp, visitors-default-current, visitors-default}`
-  Fulfill Google Cloud credentials (for storage) (optional for localhost env)
`./creds/############.json` 
-  Change environment files accordingly
-  Verify configuration on your environments as you want here `/config`
- Build the whole project
`npm run build`
- Or don't be afraid of running commands here step by step: `sudo apt-get install -y build-essential && npm install && cd client && npm install && npm run dev:client && cd ..`


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

  * pell: 📝 the simplest and smallest WYSIWYG text editor for web, with no dependencies [repo](https://github.com/jaredreich/pell)
  * tagify: 🔖 lightweight, efficient Tags input component in Vanilla JS / React / Angular / Vue  [repo](https://github.com/yairEO/tagify)
  * notyf: 👻 A minimalistic, responsive, vanilla JavaScript library to show toast notifications [repo](https://github.com/caroso1222/notyf)
  * holmes: Fast and easy searching inside a page [repo](https://github.com/Haroenv/holmes) It uses microlight also.
  * auto-complete:  An extremely lightweight and powerful vanilla JavaScript completion suggester. [repo](https://github.com/Pixabay/JavaScript-autoComplete)
  * jsi18n: Simple client side internationalization with javascript. [repo](https://github.com/danabr/jsI18n) 
  * avatar: Library for showing Gravatars or generating user avatars. [repo](https://github.com/MatthewCallis/avatar) 
  * FontPicker: Font selector component for Google Fonts . [repo](https://github.com/samuelmeuli/font-picker)

    This raises multiple challenges mainly for upgrading and actively maintained from their authors. We would like to rely always on the latest versions but we would change one library by another if the project seems inactive or very old (like not supporting modules or so).
    Leaflet particularly is the most important in this regard.

    I don't know much yet about versionning in npm, although [it is very very important](https://docs.npmjs.com/about-semantic-versioning). I suggest to install [ndm](https://720kb.github.io/ndm/) and add two projects `./` and `./client/` to have an eye on last versions and what to expect.

On the occasion, I would like to thank the following contributors:  
  - [mbussert](https://github.com/mbussert) for helping dark theme  
  - [leycnmhd](https://github.com/leycnmhd) for helping refactoring client code  
  - [jimmywarting](https://github.com/jimmywarting) for helping cleaning code and some nice advices  
  - [jayeclark](https://github.com/jayeclark) for helping CSS layouts (Bootstrap)  
  - [Fastify team](https://github.com/fastify/help/)  
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
