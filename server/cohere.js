const cohere = require("cohere-ai");

cohere.init("sXrmZhvNoYZYRPmqrQoDceA5kiH24Y8zwXSWAcjY");

exports.predictCategories = async () => {
  const response = await cohere.classify({
    model: "large",
    inputs: [
      "1,200-Piece 8 x 2-1/2-inch Brown Deck Screws",
      "M18 18V Lithium-Ion Cordless 5/8-inch SDS-Plus Rotary Hammer",
    ],
    examples: [
      {
        text: "20V MAX ATOMIC Lithium-Ion Cordless Brushless 5/8-inch SDS Plus Rotary Hammer",
        label: "Power tools",
      },
      {
        text: "18V Lithium-Ion Cordless Hammer Drill Kit with 1.5 Ah Battery and Charger",
        label: "Power tools",
      },
      {
        text: "15-amp Corded 12-inch Double-Bevel Sliding Compound Miter Saw",
        label: "Power tools",
      },
      {
        text: "15 Amp 12 -Inch Sliding Compound Mitre Saw",
        label: "Power tools",
      },
      {
        text: "M18 18V Lithium-Ion Cordless SAWZALL Reciprocating Saw",
        label: "Power tools",
      },
      {
        text: "1/2 in. x 4 ft. x 8 ft. UltraLight Mold Tough Drywall Panel",
        label: "Cement boards",
      },
      {
        text: "Cement Board with EdgeGuard 1/2 in. x 4 ft. x 8 ft.",
        label: "Cement boards",
      },
      {
        text: "Wall Repair Patch Kit with Drydex Spackling",
        label: "Cement boards",
      },
      {
        text: "Dust Control Drywall Compound, Ready-Mixed, 12 L Pail",
        label: "Cement boards",
      },
      {
        text: "EZ Grid Cement Board 3 ft. x 5 ft. X 1/4 inch",
        label: "Cement boards",
      },
      {
        text: "Machine Mud Drywall Compound, Ready-Mixed, 17 L Carton",
        label: "Cement boards",
      },
      {
        text: "#6 x 1-1/4-inch Flat Head Phillips Drive Coarse Thread Drywall Screws - 1000pcs",
        label: "Screws",
      },
      {
        text: "3/8-inch x 4-inch Pro Pack Black Carriage Bolts (5 Sets)",
        label: "Screws",
      },
      {
        text: "M8-1.25 x 20mm Class 8.8 Metric Hex Cap Screw - DIN 933 Full Thread - Zinc Plated",
        label: "Screws",
      },
      { text: "18-Gauge 2-inch Brad Nails (1000 per Box)", label: "Screws" },
      {
        text: '120 X 3-1/4" Pro-Strip Nail Smooth Shank (3,000 - Pack)',
        label: "Screws",
      },
    ],
  });
  console.log(
    `The confidence levels of the labels are ${JSON.stringify(
      response.body.classifications
    )}`
  );
};
