import React from "react";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="flex-col justify-center items-center gap-6 w-full mt-20"
    >
      <h2 className="font-semibold text-3xl">About Me</h2>
      <div className="border-l-2 ml-6 px-4">
        I didn’t know much about cocktails — I just knew they tasted good. So I
        started making them at home.
        <br />
        <br />
        Most recipe sites felt a bit too complicated (and honestly, a little
        overwhelming), so I decided to make a simpler one.
        <br />
        <br />
        If you see something that doesn’t quite hit the spot, let me know.
        <br />
        <br />I just want more people to enjoy cocktails — even just a sip at a
        time.
      </div>
    </section>
  );
};

export default AboutMe;
