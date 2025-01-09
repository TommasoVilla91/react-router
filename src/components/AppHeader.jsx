import { NavLink } from "react-router-dom";

function AppHeader() {

    const list = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/posts",
            title: "AppArticles"
        },
        {
            path: "/about",
            title: "About"
        }
        
    ]

    return (
        <header>
            <ul>
                {list.map((curPage) => (
                    <li key={curPage.title}><NavLink to={curPage.path}>{curPage.title}</NavLink></li>
                ))}
            </ul>
        </header>
    )
}

export default AppHeader;