import canvaicon from "../../assets/icons/canvaicon.svg";
import aws from "../../assets/icons/aws.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";


import laravel from "../../assets/icons/laravel.svg";
import angular from "../../assets/icons/angular.svg";
import mysql from "../../assets/icons/mysql.svg";
import python from "../../assets/icons/python.svg";
import java from "../../assets/icons/java.svg";
import photoshop from "../../assets/icons/photoshop.svg";
import drupal from "../../assets/icons/drupal.svg";


export const headerIntroData = {
  title: {
    de: "Hi, I'm Jhonathan",
    en: "Hola, Soy Jhonathan",
  },
  subtitle: "Web Developer",
  description: {
    de: "I'm Jhonathan, a web developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's create digital solutions together and shape the future!",
    en: "Soy Jhonathan, un desarrollador Web, con el objetivo de avanzar en mi carrera y participar en proyectos inspiradores. Aquí presento mi trabajo y mi pasión por el desarrollo web. ¡Creemos juntos soluciones digitales y moldeemos el futuro!",
  },
  buttons: [
    {
      name: "Contactame",
      label: {
        de: "Contact Me",
        en: "Contactame",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projectos",
      label: {
        de: "My Projects",
        en: "Mis Proyectos",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Resmoke",
    description:
      "Resmoke is an innovative web application dedicated to the buying and selling of second-hand products, designed to offer an efficient, safe and focused experience on the needs of users.",
    description_EN:
      "Resmoke es una innovadora aplicación web dedicada a la compra y venta de productos de segunda mano, diseñada para ofrecer una experiencia eficiente, segura y centrada en las necesidades de los usuarios.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Laravel", icon: laravel },
      { name: "Figma", icon: figmaicon },
      { name: "AWS", icon: aws },
      { name: "MySql", icon: mysql },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "http://resmoke.es",
    githuburl: "https://github.com/jh0ny2k2/Resmoke",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Invitación Boda",
    description:
      "An innovative digital wedding invitation. Through this platform, you can find all the necessary information about the event and even confirm your attendance.",
    description_EN:
      "Una innovadora invitación digital para bodas. A través de esta plataforma, podrás encontrar toda la información necesaria sobre el evento e incluso confirmar tu asistencia.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "Laravel", icon: laravel },
      { name: "MySql", icon: mysql },
      { name: "Photoshop", icon: photoshop },
      // { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "",
    githuburl:
      "https://github.com/jh0ny2k2/Boda",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Web La Mojonera",
    description:
      "Redesign of the Website for the La Mojonera City Council. This project focuses on creating a more intuitive and accessible platform, enhancing access to information and municipal services.",
    description_EN:
      "Rediseño de la Página Web del Ayuntamiento de La Mojonera. Este proyecto se enfoca en crear una plataforma más intuitiva y accesible, mejorando el acceso a información y servicios municipales.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      // { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "MongoDB", icon: mongodbicon },
      // { name: "Express", icon: expressiconwhite },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "More Projects on Github",
    en: "Más Proyectos en Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Desarrollo",
    skillsTitleDe: "Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "MySql",
        hash: "#TypeScript",
        icon: mysql,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Laravel",
        hash: "#Next.js",
        icon: laravel,
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Java",
        hash: "#Vue.js",
        icon: java,
        color: "#4FC08D",
      },
      {
        title: "Python",
        hash: "#Express",
        icon: python,
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Angular",
        hash: "#SASS/SCSS",
        icon: angular,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Diseño",
    skillsTitleDe: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe Photoshop",
        hash: "#Adobe XD",
        icon: photoshop,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skillsTitleDe: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Drupal",
        hash: "#Webflow",
        icon: drupal,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Inicio", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Habilidades", hash: "#skills", icon: GoStack },
  { de: "Projects", en: "Proyectos", hash: "#projects", icon: GoProject },
  { de: "About me", en: "Sobre Mi", hash: "#about-me", icon: GoPerson },
  { de: "Contact", en: "Contacto", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:developerjhony@gmail.com",
  text: "developerjhony@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/jhonathan-chaves-manzano-825b32215/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/jh0ny2k2",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:developerjhony@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"It s not at all important to get it right the first time. It s vitally important to get it right the last time."',
    en: `"No es nada importante hacerlo bien la primera vez. Es de vital importancia hacerlo bien la última vez."`,
    author: "Andrew Hunt",
  },
  {
    de: '"The web is like a canvas, and code is the paint. Create your masterpiece."',
    en: `"La web es como un lienzo y el código es la pintura. Crea tu obra maestra."`,
  },
] as const;

export const aboutMeData = {
  title: "About me",
  title_EN: "Sobre Mi",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Contact",
    en: "Contacto",
  },
  description: {
    de: "Write me a message and I will get back to you.",
    en: "Escríbeme un mensaje y me pondré en contacto contigo.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Your Name",
        en: "Tu Nombre",
      },
      type: "text",
      validation: {
        de: "Please fill in your name",
        en: "Por Favor, Inserta tu Nombre",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Your E-Mail",
        en: "Tu Email",
      },
      type: "email",
      validation: {
        de: "Please fill in your email",
        en: "Por Favor, Inserta tu Email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Your Subject",
        en: "Tu Asunto",
      },
      type: "text",
      validation: {
        de: "Please fill in your subject",
        en: "Por Favor, Inserta tu Asunto",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Your Message",
      en: "Tu Mensaje",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Please fill in your message",
      en: "Por favor completa tu mensaje",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Send",
      en: "Enviar",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "I agree that Alpay may use my personal data (name and e-mail address) to contact me. ",
      en: "Acepto que Alpay pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
    },
    description: {
      de: "By submitting this request, you acknowledge that you have read the Private Policy",
      en: "Al enviar esta solicitud, usted reconoce que ha leído la Política de Privacidad",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "Currently the project is not active or in process.",
    en: "Actualmente el proyecto no está activo o en proceso..",
  },
  successEmailSent: {
    de: "Thank you for your email. I will get back to you as soon as possible",
    en: "Gracias por tu correo electrónico. Me comunicaré contigo lo antes posible",
  },
  failedEmailSent: {
    de: "Unfortunately the sending of your email did not work. Please try again later",
    en: "Lamentablemente el envío de su correo electrónico no funcionó. Por favor inténtalo de nuevo más tarde.",
  },
  failedValidationName: {
    de: "Please fill in your name",
    en: "Por favor escribe tu nombre",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "EN",
    en: "ES",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
