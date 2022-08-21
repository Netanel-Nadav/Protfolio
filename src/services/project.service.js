import dotifyImg from '../assets/imgs/Dotify.png'
import pixelImg from '../assets/imgs/Pixel.png'
import weatherImg from '../assets/imgs/Weather.png'
import dotifyCover from '../assets/imgs/DotifyCover.png'
import layoutCover from '../assets/imgs/LayoutCover.png'
import weatherLayout from '../assets/imgs/WeatherCover.png'
import reactIcon from '../assets/imgs/react-symbol.png'
import redux from '../assets/imgs/redux.png'
import nodeJs from '../assets/imgs/nodeJs.png'
import mongoDB from '../assets/imgs/MongoDB.png'
import socket from '../assets/imgs/socket.png'
import sass from '../assets/imgs/sass.png'
import axios from '../assets/imgs/axios.png'
import chrome from '../assets/imgs/chrome.png'
import restAPI from '../assets/imgs/restAPI.png'


const projects = [
    {
        id: 1,
        name: 'Dotify',
        imgUrl: dotifyImg,
        coverImg: dotifyCover,
        tech: [
            {
                name: 'React',
                description: 'I used React 17 to build the front for the application, the app were build with React Classes & React Hooks, the routing handeled by React-Router-Don v5',
                imgUrl: reactIcon
            },
            {
                name: 'Redux',
                description: 'To manage the global state for the user i choose to use Redux & thunk with user-store and songs-store',
                imgUrl: redux
            },
            {
                name: 'NodeJs',
                description: 'I used NodeJs to build my backend of the application. Express choose to serve as the backend Farmework with NodeJs ',
                imgUrl: nodeJs
            },
            {
                name: 'MongoDB',
                description: 'I choose MongoDB to serve as my database, noSQL  database work very good with nodeJS so i decided that the best option for this project is MongoDB',
                imgUrl: mongoDB
            },
            {
                name: 'WebSockets',
                description: 'This application were build for building shared Playlists, so i used Socket.io to communicate live changes for all the users at the same time.',
                imgUrl: socket
            },
            {
                name: 'Sass',
                description: 'All the application styles build with SASS to maximize style control',
                imgUrl: sass
            }
        ],
        link: 'https://project-dotify.herokuapp.com',
        description: 'My final project in Coding academy bootcamp, a clone of Spotify Application.'
    },
    {
        id: 2,
        name: 'Weather App',
        imgUrl: weatherImg,
        coverImg: weatherLayout,
        tech: [
            {
                name: 'React',
                description: 'I used React v18 and React Hooks for the Frontend of the application',
                imgUrl: reactIcon
            },
            {
                name: 'Redux',
                description: 'I used Redux to manage Global state for the application',
                imgUrl: redux
            },
            {
                name: 'Axios',
                description: 'I choose Axios library for fetching the data from ACU-Weather API',
                imgUrl: axios
            },
            {
                name: 'Sass',
                description: 'All the application styles build with SASS to maximize style control',
                imgUrl: sass
            },
            {
                name: 'Local Storage',
                description: 'I used the local storage to store the user favorites location weather',
                imgUrl: chrome
            },
            {
                name: 'REST API',
                description: 'This application had CRUD operation that handeld with RESI API Convention',
                imgUrl: restAPI
            },
            {
                name: 'MVC Structure',
                description: 'This application were build with MVC Structure, Controllers and Services sapareted to different files',
                imgUrl: chrome
            },
        ],
        link: 'https://netanel-nadav.github.io/Netanel-Nadav-21-3-2022/',
        description: 'A project i built to notify the user about the weather in their location, and also allow a search by location'
    },
    {
        id: 3,
        name: 'Pixel Perfet',
        imgUrl: pixelImg,
        coverImg: layoutCover,
        tech: [
            {
                name: 'React',
                description: 'I used React v18 and React Hooks for the Frontend of the application',
                imgUrl: reactIcon
            },
            {
                name: 'Sass',
                description: 'All the application styles build with SASS to maximize style control',
                imgUrl: sass
            },
        ],
        link: 'https://netanel-nadav.github.io/LayoutChallenge/',
        description: 'A project i build to practice my CSS & SASS skills by doing a pixel perfect website.'
    },
]


const query = () => {
    return projects
}

const getById = (id) => {
    const projects = query()
    const project = projects.find(proj => proj.id === +id)
    return project
}




export const projectService = {
    query,
    getById
}
