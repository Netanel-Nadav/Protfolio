import dotifyImg from '../assets/imgs/Dotify.png'
import pixelImg from '../assets/imgs/Pixel.png'
import weatherImg from '../assets/imgs/Weather.png'


const projects = [
    {
        id: 1,
        name: 'Dotify',
        imgUrl: dotifyImg,
        tech: ['React', 'Redux', 'NodeJs', 'MongoDB', 'WebSockets', 'Sass'],
        link: ''
    },
    {
        id: 2,
        name: 'Weather App',
        imgUrl: weatherImg,
        tech: ['React', 'Redux', 'Axios', 'Sass', 'Local Storage'],
        link: ''
    },
    {
        id: 3,
        name: 'Pixel Perfet',
        imgUrl: pixelImg,
        tech: ['React', 'Sass'],
        link: ''
    },
]


const query = () => {
    return projects
}






export const projectService = {
    query,
}
