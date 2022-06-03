import { Link } from 'react-scroll';

const LateralMenu = (props) => {
    const lateralMenuButtons = [
        { number: 1, id: "hero" },
        { number: 2, id: "projects" },
        { number: 3, id: "contact" }
    ];

    return (
        <div className="lateral-menu">
            { lateralMenuButtons.map(x => {
                if (x.number === props.section) return <div key={x.number} className="active-square" data-cursor-stick={`#stick-lateral-menu-${x.number}`} id={`stick-lateral-menu-${x.number}`} />
                else return <Link key={x.number} to={x.id} smooth={true} duration={500}><div key={x.number} className="square" data-cursor-stick={`#stick-lateral-menu-${x.number}`} id={`stick-lateral-menu-${x.number}`} /></Link>
            })}
        </div>
    )
};

export default LateralMenu;