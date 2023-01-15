import React from 'react'
import './Skills.scss'
import canva from '../../Assets/Skills/canva.png'
import vscode from '../../Assets/Skills/vscode.png'
import sublimetext from '../../Assets/Skills/sublime-text.png'
import c from '../../Assets/Skills/c++.png'
import javascript from '../../Assets/Skills/javascript.png'
import react from '../../Assets/Skills/react.png'
import google from '../../Assets/Skills/google.png'
import codeforces from '../../Assets/Skills/codeforces.png'
import codechef from '../../Assets/Skills/codechef.png'
import atcoder from '../../Assets/Skills/atcoder.png'

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div> Professional <span>Skillset</span></div>
            <div className="container">
                <img src={c} alt="C++" />
                <img src={javascript} alt="JavaScript" title='Javascript' />
                <img src={react} alt="React" title='React' />
            </div>
            <div> <span>Tools</span> I use</div>
            <div className="container">
                <img src={vscode} alt="VS Code" />
                <img src={sublimetext} alt="Sublime Text" />
                <img src={canva} alt="Canva" title='Canva' />
            </div>
            <div> <span>Platforms</span> I use</div>
            <div className="container">
                <a href="https://drive.google.com/file/d/1y6wCcFV0s-edpnuTKWKfm42FLrM4WGid/view"><img src={google} alt="Google" title='Google Kickstart' /></a>
                <a href="https://codeforces.com/profile/mandhan_63"><img src={codeforces} alt="Codeforces" title='Codeforces' /></a>
                <a href="https://www.codechef.com/users/mandhan_63"><img src={codechef} alt="Codechef" title='Codechef' /></a>
                <a href="https://atcoder.jp/users/mandhan_63"><img src={atcoder} alt="Atcoder" title='Atcoder' /></a>
            </div>
        </div>
    )
}

export default Skills