export const FriendList = (prop) => {
    return (<ul className="friend-list">
        {prop.map(({avatar, name, isOnline }) => {
            return (<li class="item">
                <span className="status">{ isOnline}</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name }</p>
</li>)
        })}
</ul>);}