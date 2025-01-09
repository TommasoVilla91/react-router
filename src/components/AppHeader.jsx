import { NavLink } from "react-router-dom";

function AppHeader() {

    const list = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/posts",
            title: "Articles"
        },
        {
            path: "/about",
            title: "About"
        }

    ]

    return (
        <header>
            <nav>
                <div className="container">
                    <ul>
                        {list.map((curPage) => (
                            <li key={curPage.title}><NavLink to={curPage.path}>{curPage.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;