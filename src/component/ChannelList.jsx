/* eslint-disable react/prop-types */
import { useState } from 'react';


const ChannelList = ({ channels, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredChannels = channels.filter((channel) => {
        const matchesFilter = filter === 'All' || channel.groupTitle === filter;
        const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="channel-list">
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Search channels..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="News">News</option>
                    <option value="Music">Music</option>
                    <option value="Religious">Religious</option>
                    <option value="General">General</option>
                    <option value="Business">Business</option>
                </select>
            </div>
            {filteredChannels.map((channel, index) => (
                <div className="channel-item" key={index} onClick={() => onSelect(channel)}>
                    <img src={channel.tvgLogo} alt={channel.name} className="channel-logo" />
                    <p>{channel.name} ({channel.groupTitle})</p>
                </div>
            ))}
        </div>
    );
};

export default ChannelList;







// /* eslint-disable react/prop-types */

// const ChannelList = ({ channels, onSelect }) => {
//     return (
//         <div className="channel-list">
//             {channels.map((channel, index) => (
//                 <div className="channel-item" key={index} onClick={() => onSelect(channel)}>
//                     <img src={channel.tvgLogo} alt={channel.name} className="channel-logo" />
//                     <p>{channel.name} ({channel.groupTitle})</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChannelList;
