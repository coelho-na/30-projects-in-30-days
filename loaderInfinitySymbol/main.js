let circle = document.querySelectorAll(".circle");
let tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.staggerFromTo(
  circle,
  1,
  {
    autoAlpha: 0,
    scale: 0.1,
  },
  {
    autoAlpha: 1,
    scale: 1,
    motionPath: {
      type: "soft",
      path: [
        { x: -50, y: -50 }, //p1
        { x: -100, y: 0 }, //p2
        { x: -50, y: 50 }, //p3
        { x: 50, y: -50 }, //p4
        { x: 100, y: 0 }, // p5
        { x: 50, y: 50 }, // p6
        { x: 0, y: 0 }, // p7
      ],
    },
    stagger: 0.1,
  }
);
