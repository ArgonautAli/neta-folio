# Netafolio

Netafolio is an open-source, config-driven portfolio website built using Vite and React based on neta/ political posters in India. It is designed to be easily customizable and allows anyone to showcase their work and projects in a sleek and modern interface. You can customize it by simply uploading your own images and updating configuration files, making it accessible for developers and non-developers alike.

---

## Features

- **Config-Driven Customization:** Easily modify text, links, and images through a single configuration file.
- **Modern Design:** A responsive and visually appealing layout.
- **Open Source:** Anyone can use, modify, and contribute to the project.
- **Lightweight:** Built with Vite for fast development and deployment.

---

<!-- ## Demo

Check out the live demo: [Netafolio Demo](#) -->

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ArgonautAli/neta-folio
   ```

2. Navigate to the project directory:

   ```bash
   cd neta-folio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Customization

Netafolio is fully configurable through the `src/utils/config.ts` file. Follow the steps below to customize it:

1. **Update Images:**

   - Replace images in `src/assets/` with your own.
   - Ensure the file names match those used in the configuration file, or update the paths accordingly in `config.ts`.

2. **Modify Text and Links:**

   - Open `src/utils/config.ts`.
   - Update any text, links, or image paths as desired.

   Example:

   ```typescript
   export const config = {
     background: {
       image: {
         src: new URL(
           "../assets/background/flag-bg.jpg",
           import.meta.url
         ).toString(),
       },
     },
     bottomBar: {
       image_first: {
         src: new URL(
           "../assets/bottomBar/image_first.png",
           import.meta.url
         ).toString(),
         text: "Mr. Software",
         link: "https://www.linkedin.com/in/alihaiderkhan/",
         social: "Linkedin",
       },
       image_second: {
         src: new URL(
           "../assets/bottomBar/image_second.png",
           import.meta.url
         ).toString(),
         text: "Mr. Artist",
         link: "https://www.instagram.com/art_breaker_/",
         social: "Instagram",
       },
       image_third: {
         src: new URL(
           "../assets/bottomBar/image_third.png",
           import.meta.url
         ).toString(),
         text: "Mr. Yapper",
         link: "https://x.com/thehaider",
         social: "Twitter",
       },
       image_right: {
         src: new URL(
           "../assets/bottomBar/image_right.png",
           import.meta.url
         ).toString(),
         text: "MAKER OF BEST COLD COFFEE",
       },
     },
     middleBar: {
       logo: {
         src: [
           new URL("../assets/middleBar/logo.png", import.meta.url).toString(),
           new URL(
             "../assets/middleBar/logo_two.png",
             import.meta.url
           ).toString(),
           new URL(
             "../assets/middleBar/logo_three.png",
             import.meta.url
           ).toString(),
         ],
       },
       image_left: {
         src: new URL(
           "../assets/middleBar/middle_left.png",
           import.meta.url
         ).toString(),
       },
       image_right: {
         src: new URL(
           "../assets/middleBar/middle_right.png",
           import.meta.url
         ).toString(),
       },
       text: {
         upper: "OUR LEADER!!!",
         middle: "MR. HAIDER, B.TECH ",
         lower: "YOUNG WORLD ENGINEER AND ARTIST!!!",
       },
     },
     upperBar: {
       logo: {
         src: new URL(
           "../assets/upperBar/logo.png",
           import.meta.url
         ).toString(),
       },
       heading: {
         text: "OUR BEACON OF HOPE!!!",
       },
       upper_right: {
         src: [
           new URL(
             "../assets/upperBar/upper-right.png",
             import.meta.url
           ).toString(),
           new URL(
             "../assets/upperBar/upper-left.png",
             import.meta.url
           ).toString(),
           new URL(
             "../assets/upperBar/karpathy.png",
             import.meta.url
           ).toString(),
         ],
       },
     },
   };
   ```

3. **Build for Production:**
   To create an optimized build for deployment, run:

   ```bash
   npm run build
   ```

   The production-ready files will be in the `dist` directory.

4. **Deploy:**
   You can deploy the `dist` directory to any static hosting service such as [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/).

---

## Contributing

We welcome contributions to Netafolio! Here’s how you can get involved:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request to the main repository.

### Issues

If you encounter any issues or have suggestions, feel free to open an issue on the [GitHub repository](https://github.com/ArgonautAli/neta-folio/issues).

---

## License

Netafolio is licensed under the [MIT License](LICENSE). Feel free to use it for personal and commercial projects.

---

## Acknowledgments

Thanks to the open-source community for inspiring this project. Let's build something amazing together!
