import React from "react";

function Footer() {

    const links = [
   
        {
            name: "Contact",
            link: "mailto:bshort985@gmail.com"
        }
    ]
    return (
        <footer>
            {links.map(links =>
                (
                    <a className="flex-row px-1 footer" href={links.link} key={links.name} target="_blank" rel="noopener noreferrer"><i>{links.name}</i></a>
                ))}
        </footer>
    );

}

export default Footer;