const mockData = [
  {
    id: 1,
    company: "Google",
    title: "Search",
    description: "Look for things",
    demo: "https://www.google.com",
    testers: 50,
    pay: 15,
    demographic: { minAge: 18, maxAge: 50, industry: "technology" },
  },
];

exports.getMatches = async (age, industry) => {
  return mockData;
};
