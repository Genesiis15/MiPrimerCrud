import { useState } from "react"

export const TwitterFollowCard = ({ children, userName, initialIsFollowing }) =>{
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[TwitterFollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir+';
    const buttonClassName = isFollowing
     ?  'tw-followCard-button is-following'
     : 'tw-followCard-button'

     const handleClick =()=>{
        setIsFollowing(!isFollowing)
     }
return <>
     <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar" 
            alt="avatar" src={`https://unavatar.io/${userName}`} />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">@{ (userName)}</span>
            </div>
        </header>
        <aside>
            <button onClick={handleClick} className={buttonClassName}>
          
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard--stop">Dejar de seguir</span>   
            </button>
        </aside>
       </article>
</>
}