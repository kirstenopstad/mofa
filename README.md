# Museum of Fake Art

#### By Kirsten Opstad

#### A web app that <!-- generates, --> displays and exhibits fake art

<!-- #### [Check out the live site](https://kirstenopstad.github.io/local-business/)! -->

## Technologies Used

* React
* JavaScript
* Bootstrap
* HTML
* CSS
* webpack
* Node.js
* Firebase

## Description

Recreate the user experience of visiting a art musuem website with completely AI-generated artwork. By presenting AI-generated artwork in a format typically reserved for fine (real) art, the application intends to provoke conversation around the following questions: 
* what makes art "real" or "fake"?
* is it possible to have a "real" human experiences with "fake" art?
* what are the social / cultural / human implications of the development of generative AI?

### Objectives (MVP)

The application should have the following functionality:

__User stories:__
* ✅ Users can view exhibition of AI-generated artwork as a gallery or individually
* ✅ Users can add title/comment to AI-generated artwork
* ✅ Users can  upvote/downvote titles/comments of AI-generated artwork

Additionally, code will be reviewed for the following objectives:

1. Application compiles and runs without error, and warnings in the DevTools console are resolved.
2. Functional and class components are used correctly.
3. Application effectively uses local and shared state.
4. Props are used correctly and always include PropTypes.
5. README includes an accurate representation of the application's component tree.
6. Project is in a polished, portfolio-quality state.
7. The prompt’s required functionality and baseline project requirements are in place by the deadline.

### Further Exploration (Stretch Goals)

__User stories:__
* ✅ Users can register and login
* Users may only vote once per AI-generated artwork

## Process 

<!-- ✅  -->
1. ✅ Create component drawing

[![Component Drawing](./src/img/component_diagram.png)](https://www.figma.com/file/9yZdrlZDInV6346toTdG2Z/CoffeeShop?node-id=0%3A1&t=SaS3WUYroyADmYHv-1)

2. ✅ Establish Component Hierarchy:
    * App.js
      * Header.js
      * PlanVisit.js
      * ExhControl.js 
        * ExhList.js - displays all art in all exhibitions
          * Exhibit.js
        * ExhDetail.js - displays all art in one exhibition
          * Artwork.js
        * ArtworkDetail.js 
      * Footer.js

[![Wireframe Component Hierarchy](./src/img/wireframe.png)](https://www.figma.com/file/9yZdrlZDInV6346toTdG2Z/CoffeeShop?node-id=0%3A1&t=SaS3WUYroyADmYHv-1)

3. ✅ Build Static Components
4. ✅ Add State
  * Local State conditional rendering
  * Shared State 
5. ✅ Add Firebase to store data
6. ✅ Add Authentication
7. ✅ Add Authorization (title / vote)

[Data Organization](./src/img/data_structure.png)

6. Style to match inspiration

### __Roadmap__
![Roadmap](./src/img/roadmap.png)
### __Big Picture__
![Big Picture](./src/img/big_picture.png)

<!-- [x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images) -->

<!-- [Link to operational site](http://www.kirstenopstad.github.com/<REPOSITORY NAME>) -->

### __Goals__
1. ✅ Meet MVP (Minimum Viable Product)
2. ✅ Implement at least one stretch goal
3. Create thorough documentation of process

### __Stretch Goals__
1. Style front end to match design norms for reference museums 
2. ✅ Handle user login & registration
  * Add functionality so users may only vote once per work
3. Ensure responsive design functionality across devices
4. Gather user feedback
5. Incorporate user feedback
6. Publish hosted site
7. Implement CI/CD (continuous integration and continuous delivery) with github Actions
8. Create functionality automatically generate new prompts for DALLE•2
9. Use app to call DALL•E API
10. Use Firebase to save .png from URL and store in Google cloud

### Research & Planning Log

|Date |Time  | Note|
--- | --- | ---|
|2/17|8:32a | Setup documentation boilerplate (README.md & capstone-proposal)|
|2/17|9:03a| Reasearch art musuem design features, start [whiteboard](https://www.figma.com/file/qwZdK8mH6mivu1HjC5udke/MOFA?node-id=3%3A298&t=OPUkQpOJpVfySjyu-0) to brainstorm|
|2/17|9:32a| Brainstorm "must dos" and "would love to dos" on [whiteboard](https://www.figma.com/file/qwZdK8mH6mivu1HjC5udke/MOFA?node-id=3%3A298&t=OPUkQpOJpVfySjyu-0)|
|2/17|10:01a| Add basic component diagram to README, sketch out initial API structure on whiteboard |
|2/17|10:36a| Listen to "How to Look at Art" & add sources section to README |
|2/17|11:18a| Add project MVP to capstone proposal, research tech for MVP & Stretch Goals|
|2/17|11:50a| Complete capstone proposal |
|2/17|1:31p| Update component diagram to reflect stretch goals|
|2/17|2:06p| Add create-react-app boilerplate & file structure|
|2/17|3:01p| Create wireframe to better understand component hierarchy |
|2/17|4:15p| Add functional components and seedData |
|2/17|4:39p| Setup basic plumbing for redux store |
|2/17|5:05p| Working on piping seedData to functional components using store |
|2/24|8:05a| Update README to reflect big picture, roadmap and revised data organization |
|2/24|9:00a| Refactor seedData to match new data org and update ExhList components |
|2/24|9:23a| __Important:__ DALLE•2 doesn't persist data, need to solve img storage |
|2/24|10:08a| Regen and import img files to exhSeedData |
|2/24|11:30a| Route data to ExhList & ExhDetail components + disp mostPopVote func |
|2/24|11:47a| Populate all ExhControl components with seedData |
|2/24|1:39p| Add conditional rendering to ExhControl |
|2/24|2:09p| Add bootstrap and basic styling |
|2/24|3:03p| Work in progress: add Firebase/Firestore on feature branch |
|2/24|4:16p| Successfully link firebase to project |
|2/24|4:51p| Add user comment & store in firebase |
|2/25|10:45a| Update roadmap & tagline in README |
|2/25|11:43a| Add user upVote & downVote title functionality |
|2/25|2:40p| Update component diagram and wireframe for authentication |
|2/25|3:40p| Add user registration, login & log out functionality |
|2/25|4:52p| Add conditional rendering to LoginControl, add authorization to title/vote functionality |
|2/25|5:00p| __Meets MVP Reqiurement__|
<!-- |date|time|data13| -->

### Hour Totals
|Date |Hours  | Note|
--- | --- | ---|
|2/17|8 hrs| Project planning, research and basic component creation|
|2/24|8 hrs| Add conditional rendering, state, seeded data, Firebase & basic styling w/Bootstrap |
|2/25|5 hrs| Add voting, authentication & authorization for add title + vote |
<!-- |date|hour|data13| -->

### Project Links
* [Whiteboard](https://www.figma.com/file/qwZdK8mH6mivu1HjC5udke/MOFA?node-id=3%3A298&t=OPUkQpOJpVfySjyu-0)
* [Google Drive](https://drive.google.com/drive/folders/1rxBeCx7N13FGsMKBLVsTgdofXTlSvd4D?usp=sharing)

## Sources
### __Subject Matter__
* [NPR Life Kit: How to Look at Art](https://www.npr.org/2023/01/05/1147239071/dont-get-art-you-might-be-looking-at-it-wrong)
### __Design Research__
* [LACMA](https://www.lacma.org/)
* [MassMOCA](https://massmoca.org/)
* [Guggenheim](https://www.guggenheim.org/)
### __Technology__
* [Open AI DALL•E 2](https://openai.com/dall-e-2/)
## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* In the root directory of the project, run this command to install all packages listed in the package.json:
```
$ npm install
```
* Then, to build and serve the project, run: 
```
$ npm run start
```

## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

MIT License

Copyright (c) 2023 Kirsten Opstad

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
