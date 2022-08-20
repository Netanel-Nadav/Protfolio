import dotifyImg from '../assets/imgs/Dotify.png'
import pixelImg from '../assets/imgs/Pixel.png'
import weatherImg from '../assets/imgs/Weather.png'
import dotifyCover from '../assets/imgs/DotifyCover.png'
import layoutCover from '../assets/imgs/LayoutCover.png'
import weatherLayout from '../assets/imgs/WeatherCover.png'


const projects = [
    {
        id: 1,
        name: 'Dotify',
        imgUrl: dotifyImg,
        coverImg: dotifyCover,
        tech: ['React', 'Redux', 'NodeJs', 'MongoDB', 'WebSockets', 'Sass'],
        link: 'https://project-dotify.herokuapp.com',
        description: 'My final project in Coding academy bootcamp, a clone of Spotify Application.'
    },
    {
        id: 2,
        name: 'Weather App',
        imgUrl: weatherImg,
        coverImg: weatherLayout,
        tech: ['React', 'Redux', 'Axios', 'Sass', 'Local Storage', 'REST API', 'MVC Structure'],
        link: 'https://netanel-nadav.github.io/Netanel-Nadav-21-3-2022/',
        description: 'A project i build to notify the user about the weater in he\'s place, and also alow a location search'
    },
    {
        id: 3,
        name: 'Pixel Perfet',
        imgUrl: pixelImg,
        coverImg: layoutCover,
        tech: ['React', 'Sass'],
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
