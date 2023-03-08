const  faq = [
  {
    question: `How is artwork generated?`,
    answer: `Using OpenAI's image-generating API called DALL·E 2. To seed data for this app, I used Postman to call OpenAI's API image generation endpoint. Each POST request included both my unique authorization bearer token and the image 'prompt' in the body of the request. The API response included a URL to an image that I downloaded and added to the project files.`
  },
  {
    question: `What is the tech stack used?`,
    answer: `MoFA is built using React, Javascript, Firebase 'serverless' technologies (Firestore, Authentication, Cloud Storage), Axios for simplified API calls, Bootstrap and CSS for styling. All images on the app were generated via OpenAI's image generation API, DALL·E 2.`
  },
  {
    question: `How are prompts generated?`,
    answer: `Most prompts follow a basic formula: well-known-artist-or-movement + atypical-subject-for-that-artist-or-movement. For example, selecting the artist "Renoir" and pairing him with the subject "diner" produces some beautiful, blurry scenes of American kitsch.`
  },
  {
    question: `What are the future features or development plans?`,
    answer: `In the future, I would like to integrate functionality so that users can vote on upcoming exhibitions, add security rules for admin-level curatorial capabilities (adding new art to the collection, etc.) and add integration with the Prodigi API to allow visitors to order prints of fake art.`
  },
  {
    question: `Who owns the fake artwork?`,
    answer: `Great question! According to the OpenAI documentataion in March 2023, I think I do. But should I?`
  },
  {
    question: `Who owns the code?`,
    answer: `Weird question, but okay. I think I do. Check the GitHub repo for latest license information.`
  },
  {
    question: `Who owns anything?`,
    answer: `That's between you and whatever higher power you believe in.`
  },
  {
    question: `Who are you, anyway?`,
    answer: `I'm Kirsten. I live in Los Angeles, used to work at an art museum and write code. I appeciate you taking the time to check this out.`
  },
]

export default faq





  

  