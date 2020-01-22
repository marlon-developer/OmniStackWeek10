import React from 'react'
import './styles.css'

function DevItem({ dev }) {
    return (
        <li className="dev-item">
            <header>
                <img src={ dev.avatar_url } alt={ dev.name }/>
                    <div className="user-info">
                        <strong>{ dev.name }</strong>
                        <span>{ dev.techs.join(', ') }</span>
                        <p>{ dev.bio }</p>
                        <a href={ `https://api.github.com/users/${ dev.github_username }` }>Acessar Perfil no Github</a>
                    </div>
            </header>
        </li>
    )
}

export default DevItem