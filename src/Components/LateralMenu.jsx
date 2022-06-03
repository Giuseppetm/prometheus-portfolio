

const LateralMenu = (props) => {
    console.log(props.section);
    const lateralMenuButtons = [1,2,3];

    return (
        <div className="lateral-menu">
            { lateralMenuButtons.map(x => {
                if (x === props.section) return <div key={x} className="active-square" />
                else return <div key={x} className="square" data-cursor-stick={`#stick-lateral-menu-${x}`} id={`stick-lateral-menu-${x}`} />
            })}
        </div>
    )
};

export default LateralMenu;