const cohere = require("cohere-ai");

cohere.init("sXrmZhvNoYZYRPmqrQoDceA5kiH24Y8zwXSWAcjY");

exports.predictCategories = async (review) => {
  const response = await cohere.classify({
    model: "large",
    inputs: [review],
    examples: [
      {
        text: "This app is pretty slow and unresponsive.",
        label: "Speed",
      },
      {
        text: "The website didn't load on time.",
        label: "Speed",
      },
      {
        text: "The application was not fast enough for my needs.",
        label: "Speed",
      },
      {
        text: "I didn't like the app because it was too slow.",
        label: "Speed",
      },
      {
        text: "Your application is very slow, which made me not want to use it.",
        label: "Speed",
      },
      {
        text: "Your application looks bad.",
        label: "Design",
      },
      {
        text: "I didn't like the colour scheme of your application.",
        label: "Design",
      },
      {
        text: "The colours of your app look bad.",
        label: "Design",
      },
      {
        text: "Your application is ugly.",
        label: "Design",
      },
      {
        text: "I wish your application looked better.",
        label: "Design",
      },
      {
        text: "I don't like the look of your website.",
        label: "Design",
      },
      {
        text: "Your application does not have keyboard navigation, so it is not accessible for people with limited mobility.",
        label: "Accessibility",
      },
      {
        text: "I couldn't navigate your website with keyboard, which means it wasn't accessible.",
        label: "Accessibility",
      },
      {
        text: "Your app is not accessible for those with limited mobility, because it does not have keyboard navigation.",
        label: "Accessibility",
      },
      {
        text: "Your images do not have alt text, making it less accessible to people with a screen reader.",
        label: "Accessibility",
      },
      {
        text: "The images in the app don't have alt text, so it isn't accessible for the visually impaired.",
        label: "Accessibility",
      },
      {
        text: "The app has low colour contrast, so it's not accessible to the visually impaired.",
        label: "Accessibility",
      },
      {
        text: "Your website has low colour contrast, so it's not accessible to people with low vision.",
        label: "Accessibility",
      },
      {
        text: "The application has low colour contrast, which means it's less accessible for the blind.",
        label: "Accessibility",
      },
      {
        text: "It was hard to learn the features of your website.",
        label: "Usability",
      },
      {
        text: "The application has a big learning curve.",
        label: "Usability",
      },
      {
        text: "Your app is hard to learn.",
        label: "Usability",
      },
      {
        text: "The app has too many features.",
        label: "Usability",
      },
      {
        text: "Your application is difficult to use.",
        label: "Usability",
      },
      {
        text: "Your website is hard to learn.",
        label: "Usability",
      },
      {
        text: "I'm finding it hard to use the application.",
        label: "Usability",
      },
      {
        text: "The app is hard to use.",
        label: "Usability",
      },
      {
        text: "I can't tell how to use your app.",
        label: "Usability",
      },
    ],
  });
  return response.body.classifications;
};
