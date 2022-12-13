export const Header = ({ handleAllCountry, handleAsia, handleEurope, countries }) => {

    console.log(countries.every(country => country.region === "Asia" || country.region === "Europe"))

    return (
        <div className="header d-flex justify-content-between align-items-center pt-3 container">
            <h3>Countries</h3>
            <div>
                <ul className="list-unstyled  menu-list">
                    <li>
                        <a href="/" onClick={handleAllCountry} className={countries.every(country => country.region === "Asia" || country.region === "Europe") ? `text-decoration-none text-dark` : `text-decoration-none text-secondary active`}>All</a>
                    </li>
                    <li>
                        <a href="/" onClick={handleAsia} className={countries.every(country => country.region === "Asia") ? `text-decoration-none text-dark active` : `text-decoration-none text-secondary`}>Asia</a>
                    </li>
                    <li>
                        <a href="/" onClick={handleEurope} className={countries.every(country => country.region === "Europe") ? `text-decoration-none text-dark active` : `text-decoration-none text-secondary`}>Europe</a>
                    </li>
                </ul>
                <button className="btn btn-transparent menu-btn"><i className="bi bi-list"></i></button>
            </div>
        </div>
    )
}