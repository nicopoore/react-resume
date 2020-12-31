import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Sidebar, About, Experience, Education, Skills, Hamburger, Divider, Projects } from './components'
import AppChild from './components/AppChild'

const defaultState = {
  lang: 'en',
  darkMode: false,
  showSidebarMobile: false,
  showSidebarMain: false,
  activeSection: 'about-link',
  timelines: {
    experienceArray: [
      {
        id: "juno",
        title: "Juno Clases",
        subtitle: "Web Development",
        date: {
          from: "Mar 2017",
          to: "Mar 2018"
        },
        desc: "Co-Founder and developer of Juno, an online platform to connect people in need of at-home tutoring, with tutors available near them, to make it easier to schedule, pay, and enjoy classes in the comfort of your own home, as well as help tutors find work.\n\nIn charge of online marketing execution, set-up and maintenance of its website and social networks, and responsible for Juno's online platform."
      },
      {
        id: "kaeser",
        title: "Kaeser Kompressoren",
        subtitle: "Applications Engineering",
        date: {
          from: "Jan 2018",
          to: "Oct 2020",
        },
        desc: "Planning, design and execution of efficient compressed air systems, interpreting and capturing the team and the clients’ ideas. Development of the Kaeser Kompressoren Engineering Blog."
      }
    ],
    formalEdArray: [
      {
        id: "sanlu",
        title: "St. Luke's College",
        subtitle: "Secondary Education in Hard Sciences",
        date: {
          from: "2011",
          to: "2016"
        },
        desc: ''
      },
      {
        id: "uba",
        title: "University of Buenos Aires",
        subtitle: "Software Engineering",
        date: {
          from: "2017",
          to: "Present"
        },
        desc: ''
      }
    ],
    personalEdArray: [
      {
        id: "igcse",
        title: "University of Cambridge",
        subtitle: "IGCSE",
        date: "2015",
        desc: "International Certificate of Education with Merit"
      },
      {
        id: "edIT",
        title: "EducacionIT",
        subtitle: "JavaScript Advanced Developer",
        date: "2020",
        desc: "Currently finishing the Advanced Full Stack Javascript Developer degree in EducaciónIT, which includes React, Node, OOP, Progressive Web Apps, among other classes."
      },
      {
        id: "fcc",
        title: "freeCodeCamp",
        subtitle: "Full Stack Development Certification",
        date: "2020",
        desc: "Including the following four modules: Responsive Web Design, Javascript Algorithm Scripting, Front End Libraries, APIs and Microservices"
      }
    ]
  },
  skills: {
    technical: [
      {
        code: "htmlcss",
        name: "HTML5/CSS3",
        keywords: [
          "programming",
          "frontend"
        ],
        level: "advanced"
      },
      {
        code: "js",
        name: "JavaScript",
        keywords: [
          "programming",
          "frontend",
          "backend"
        ],
        level: "advanced"
      },
      {
        code: "react",
        name: "ReactJS/Redux",
        keywords: [
          "programming",
          "frontend"
        ],
        level: "advanced"
      },
      {
        code: "ps",
        name: "Adobe Photoshop",
        keywords: [
          "design",
          "tools"
        ],
        level: "advanced"
      },
      {
        code: "node",
        name: "NodeJS",
        keywords: [
          "programming",
          "backend"
        ],
        level: "intermediate"
      },
      {
        code: "express",
        name: "Express",
        keywords: [
          "programming",
          "backend"
        ],
        level: "intermediate"
      },
      {
        code: "mongo",
        name: "MongoDB/Mongoose",
        keywords: [
          "programming",
          "backend",
          "databases"
        ],
        level: "intermediate"
      },
      {
        code: "chai",
        name: "Chai (QA)",
        keywords: [
          "programming",
          "backend",
          "QA"
        ],
        level: "basic"
      },
      {
        code: "python",
        name: "Python",
        keywords: [
          "programming",
          "backend"
        ],
        level: "basic"
      },
      {
        code: "django",
        name: "Django",
        keywords: [
          "programming",
          "backend",
          "frontend"
        ],
        level: "basic"
      }
    ],
    languages: [
      {
        code: "es",
        lang: "Spanish",
        fluency: "C2",
        level: 100,
        desc: "Native language"
      },
      {
        code: "en",
        lang: "English",
        fluency: "C2",
        level: 100,
        desc: "Grade A (94/100) in English as a First Language, certified by the University of Cambridge."
      },
      {
        code: "de",
        lang: "German",
        fluency: "A2",
        level: 33,
        desc: "Currently studying at Goethe-Institut."
      },
      {
        code: "fr",
        lang: "French",
        fluency: "A1",
        level: 10,
        desc: "Basic communicational proficiency in French, certified by the Alliance française."
      }
    ]
  },
  projects: [
    {
      id: 1,
      name: "Technical Documentation Page",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript"
      ],
      url: "https://nicopoore.github.io/technical-documentation/",
      repo: "https://github.com/nicopoore/technical-documentation"
    },
    {
      id: 2,
      name: "Landing Page",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "bootstrap"
      ],
      url: "https://nicopoore.github.io/landing-page/",
      repo: "https://github.com/nicopoore/landing-page"
    },
    {
      id: 3,
      name: "Random Quote Machine",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "bootstrap",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/random-quote-machine/",
      repo: "https://github.com/nicopoore/random-quote-machine"
    },
    {
      id: 4,
      name: "Markdown Previewer",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/markdown-previewer/",
      repo: "https://github.com/nicopoore/markdown-previewer"
    },
    {
      id: 5,
      name: "Drum Machine",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/drum-machine/",
      repo: "https://github.com/nicopoore/drum-machine"
    },
    {
      id: 6,
      name: "Calculator",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/react-calculator/",
      repo: "https://github.com/nicopoore/react-calculator"
    },
    {
      id: 7,
      name: "Pomodoro Timer",
      tags: [
        "front-end",
        "html",
        "css",
        "javascript",
        "react",
        "redux"
      ],
      url: "https://nicopoore.github.io/react-pomodoro/",
      repo: "https://github.com/nicopoore/react-pomodoro"
    },
    {
      id: 8,
      name: "Timestamp Microservice",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://evening-wave-75791.herokuapp.com/",
      repo: "https://github.com/nicopoore/timestamp-service"
    },
    {
      id: 9,
      name: "Request Header Parser",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://pure-brushlands-16955.herokuapp.com/",
      repo: "https://github.com/nicopoore/request-header-parser"
    },
    {
      id: 10,
      name: "URL Shortener",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express",
        "mongodb",
        "mongoose"
      ],
      url: "https://mysterious-hamlet-01922.herokuapp.com/",
      repo: "https://github.com/nicopoore/url-shortener"
    },
    {
      id: 11,
      name: "File Metadata Parser",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express"
      ],
      url: "https://enigmatic-fjord-43448.herokuapp.com/",
      repo: "https://github.com/nicopoore/file-metadata"
    },
    {
      id: 12,
      name: "Exercise Tracker",
      tags: [
        "back-end",
        "javascript",
        "node",
        "express",
        "mongodb",
        "mongoose"
      ],
      url: "https://secret-cove-94553.herokuapp.com/",
      repo: "https://github.com/nicopoore/exercise-tracker"
    }
  ],
  projectFilter: []
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_LANG':
      return {
        ...state,
        lang: action.lang
      }
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: action.darkMode
      }
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        showSidebarMobile: action.showSidebarMobile
      }
    case 'TOGGLE_SECTION':
      return {
        ...state,
        showSidebarMain: action.showSidebarMain,
        activeSection: action.activeSection
      }
    case 'ADD_FILTER':
      return {
        ...state,
        projectFilter: [...state.projectFilter, action.tag]
      }
    case 'REMOVE_FILTER':
      return {
        ...state,
        projectFilter: action.projectFilter
      }
    case 'RESET_FILTER':
      return {
        ...state,
        projectFilter: []
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <div className="AppWrap">
        <AppChild />
      </div>
    </Provider>
  );
}

export default App;
