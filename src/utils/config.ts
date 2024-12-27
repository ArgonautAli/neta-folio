import Middlebar from "../components/middleBar/Middlebar";

export const config = {
    background: {
      image: {
        src: new URL("../assets/background/flag-bg.jpg", import.meta.url).toString(),
      },
    },
    bottomBar: {
      image_first: {
        src: new URL("../assets/bottomBar/image_first.png", import.meta.url).toString(),
        text: "Mr. Software",
        link: "https://www.linkedin.com/in/alihaiderkhan/",
        social: "Linkedin"
      },
      image_second: {
        src: new URL("../assets/bottomBar/image_second.png", import.meta.url).toString(),
        text: "Mr. Artist",
        link: "https://www.instagram.com/art_breaker_/",
        social: "Instagram"
      },
      image_third: {
        src: new URL("../assets/bottomBar/image_third.png", import.meta.url).toString(),
        text: "Mr. Yapper",
        link: "https://x.com/thehaider",
        social: "Twitter"
      },
      image_right: {
        src: new URL("../assets/bottomBar/image_right.png", import.meta.url).toString(),
        text: "MAKER OF BEST COLD COFFEE",
      },
    },
    middleBar: {
      logo: {
        src: [new URL("../assets/middleBar/logo.png", import.meta.url).toString(), new URL("../assets/middleBar/logo_two.png", import.meta.url).toString(), new URL("../assets/middleBar/logo_three.png", import.meta.url).toString()],
      },
      image_left: {
        src: new URL("../assets/middleBar/middle_left.png", import.meta.url).toString(),
      },
      image_right: {
        src: new URL("../assets/middleBar/middle_right.png", import.meta.url).toString(),
      },
      text: {
        upper:"OUR LEADER!!!",
        middle: "MR. HAIDER, B.TECH ",
        lower: "YOUNG WORLD ENGINEER AND ARTIST!!!"
      }
    },
    upperBar: {
      logo: {
        src: new URL("../assets/upperBar/logo.png", import.meta.url).toString(),
      },
      heading: {
text: "OUR BEACON OF HOPE!!!"
      },
      upper_right: {
        src: [new URL("../assets/upperBar/upper-right.png", import.meta.url).toString(), new URL("../assets/upperBar/upper-left.png", import.meta.url).toString(), new URL("../assets/upperBar/karpathy.png", import.meta.url).toString()]
      }
    },
  };
  