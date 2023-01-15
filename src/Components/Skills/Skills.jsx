import React from 'react'
import './Skills.scss'
import canva from '../../Assets/Skills/canva.png'
import vscode from '../../Assets/Skills/vscode.png'
import sublimetext from '../../Assets/Skills/sublime-text.png'
import google from '../../Assets/Skills/google.png'
import codeforces from '../../Assets/Skills/codeforces.png'
import codechef from '../../Assets/Skills/codechef.png'
import atcoder from '../../Assets/Skills/atcoder.png'

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div> Professional <span>Skillset</span></div>
            <div className="container">
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810322/c_auvgjs.png" alt="C++" />
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810322/javascript_rsktfo.png" alt="JavaScript" title='Javascript' />
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810323/react_ksjitp.png" alt="React" title='React' />
            </div>
            <div> <span>Tools</span> I use</div>
            <div className="container">
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810323/vscode_grezo1.png" alt="VS Code" title='VS Code' />
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810323/sublime-text_ejs93p.png" alt="Sublime Text" title='Sublime Text'/>
                <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810322/canva_nia9wx.png" alt="Canva" title='Canva' />
            </div>
            <div> <span>Platforms</span> I use</div>
            <div className="container">
                <a href="https://drive.google.com/file/d/1y6wCcFV0s-edpnuTKWKfm42FLrM4WGid/view"><img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810322/google_o6jtui.png" alt="Google" title='Google Kickstart' /></a>
                <a href="https://codeforces.com/profile/mandhan_63"><img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810322/codeforces_dw1rki.png" alt="Codeforces" title='Codeforces' /></a>
                <a href="https://www.codechef.com/users/mandhan_63"><img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810322/codechef_orbqhk.png" alt="Codechef" title='Codechef' /></a>
                <a href="https://atcoder.jp/users/mandhan_63"><img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810321/atcoder_hncmt9.png" alt="Atcoder" title='Atcoder' /></a>
            </div>
        </div>
    )
}

export default Skills