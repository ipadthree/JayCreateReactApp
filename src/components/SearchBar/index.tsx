import React, { ReactElement, ChangeEvent, useState } from 'react';
import mockData from './MOCK_DATA.json';
import './searchBar.css';

const SearchBar = (): ReactElement => {
    const [matchedData, setMatchedData] = useState(mockData);
    const updateList = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const matches = mockData.filter(
            (data) =>
                data.first_name.toLowerCase().includes(value.toLowerCase()) ||
                data.last_name.toLowerCase().includes(value.toLowerCase()) ||
                data.gender.toLowerCase().includes(value.toLowerCase())
        );
        setMatchedData(matches);
    };

    return (
        <div className="container">
            <input type="text" className="searchBar" onChange={updateList} />
            <ul className="list">
                {matchedData.map((data) => (
                    <li
                        key={data.id}
                    >{`${data.first_name} ${data.last_name} is a ${data.gender}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
