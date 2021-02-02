gsap.registerPlugin(CSSRulePlugin);

const tl = gsap.timeline({
  defaults: { ease: Power2.easeOut },
});
btn = document.querySelector(".btn");
rule = CSSRulePlugin.getRule(".btn::before");

tl.to(".btn__label", {
  opacity: 0,
  height: 0,
  position: "absolute",
  duration: ".2s",
})
  .to(
    ".btn",
    {
      borderRadius: "50%",
      width: "2.5em",
      height: "2.5em",
      ease: Elastic.easeOut.config(0.7, 0.3),
      duration: 1.2,
    },
    "-=5s"
  )
  .to(rule, { borderRadius: "50%" }, "-=1s")
  .to("svg", { strokeDasharray: "90 103" }, "-=1")
  .to(
    "path",
    { attr: { d: "M144.531,235.3l16.159-17.754-16.159-17.693" } },
    "+=1"
  )
  .to("p", { clipPath: "circle(100% at 50% 50%)", duration: 1.2 });

tl.pause();
btn.addEventListener("click", () => {
  tl.play();
});
