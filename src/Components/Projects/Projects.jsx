import React from 'react'
import './projects.scss'

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="left">
                <h2>Project Annapurna</h2>
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810320/1_xb4p3z.png" alt="projectimage" />
                <p> "With thousands of NGOs listed down, the user can simply filter out the most relevant ones to start a conversation. Following the outcome of the conversation, the NGO can reach the spot after the completion of the program to collect the food bulk to further distribute it amongst the needful."</p>
                <a href="https://devfolio.co/projects/project-annapurna-ab6e"><button>Read More<ion-icon name="arrow-forward-outline"></ion-icon></button></a>
            </div>
            <div className="center">
                <h2>Project Durga</h2>
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810309/1_r0yse9.png" alt="projectimage" />
                <p>"Here comes the lioness of 21st century, who dream big and achieve bigger. Stay tuned to meet the wonder women of this century."</p>
                <a href="https://devfolio.co/projects/project-durga-a76b"><button>Read More<ion-icon name="arrow-forward-outline"></ion-icon></button></a>
            </div>
            <div className="right">
                <h2>Project Travelog</h2>
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810294/1_geeq7h.png" alt="projectimage" />
                <p>"This is a platform where students from our college can share their travel experiences and adventures with the community.Whether you're planning a trip or just want to be inspired by others' journeys, this is the place to be."</p>
                <a href="https://devpost.com/software/project-travelog"><button>Read More<ion-icon name="arrow-forward-outline"></ion-icon></button></a>
            </div>
        </div>
    )
}

export default Projects