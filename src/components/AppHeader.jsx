import { NavLink } from "react-router-dom";

function AppHeader() {

    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/posts",
            title: "Articles"
        }
    ]

    return (
        <header>
            <nav>
                <div className="container">
                    <ul>
                        {navLinks.map((curPage) => (
                            <li key={curPage.title}>
                                <NavLink to={curPage.path}>{curPage.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;