import '../styles/Search.css';

function Search(props) {
    let formValue;

    return(
        <div className='search-container'>
            <div className='search-bar-container'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input type='text' name='search' placeholder='Type name of the city' className='search-bar' onChange={e => {formValue = e.target.value}}></input>
            </div>
            <button onClick={() => props.setEnteredCityName(formValue)}>Search</button>
        </div>
    );
}

export default Search;