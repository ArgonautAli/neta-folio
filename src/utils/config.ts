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
        link: "",
        social: "Linkedin"
      },
      image_second: {
        src: new URL("../assets/bottomBar/image_second.png", import.meta.url).toString(),
        text: "Mr. Artist",
        link: "",
        social: "Instagram"
      },
      image_third: {
        src: new URL("../assets/bottomBar/image_third.png", import.meta.url).toString(),
        text: "Mr. Yapper",
        link: "",
        social: "Twitter"
      },
      image_right: {
        src: new URL("../assets/bottomBar/image_right.png", import.meta.url).toString(),
        text: "MAKER OF BEST COLD COFFEE",
      },
    },
    middleBar: {
      logo: {
        src: new URL("../assets/middleBar/logo.png", import.meta.url).toString(),
      },
      image_left: {
        src: new URL("../assets/middleBar/middle_left.png", import.meta.url).toString(),
      },
      image_right: {
        src: new URL("../assets/middleBar/middle_right.png", import.meta.url).toString(),
      },
      text: {
        upper:"OUR LEADER!!!",
        middle: "MR. ALI HAIDER KHAN, B.TECH MAE",
        lower: "YOUNG WORLD ENGINEER AND ARTIST!!!"
      }

    },
  };
  