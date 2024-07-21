import { useEffect, useState } from 'react';
import FetchButton from './component/FetchButton';
import ChannelList from './component/ChannelList';
import VideoPlayer from './component/VideoPlayer';

const App = () => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleFetch = (channels) => {
    setChannels(channels);
  };

  const handleSelect = (channel) => {
    setSelectedChannel(channel);
    console.log(selectedChannel)
  };




  return (
    <div className="app">
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>

        <h1 style={{ marginRight: "20%" }}>IPTV Player</h1>
        <FetchButton onFetch={handleFetch} />
      </div>
      <div className="content">
        <ChannelList channels={channels} onSelect={handleSelect} />
        <VideoPlayer channel={selectedChannel} />
      </div>
    </div>
  );
};
export default App;

// import './App.css'

// function App() {


//   return (
//     <>
//       <button onClick={
//         async () => {
//           try {
//             const res = await fetch("https://iptv-org.github.io/iptv/countries/pk.m3u");
//             const data = await res.text();

//             // Parse the M3U data
//             const channels = [];
//             const lines = data.split('\n');
//             let currentChannel = {};

//             lines.forEach(line => {
//               if (line.startsWith('#EXTINF:')) {
//                 const tvgIdMatch = line.match(/tvg-id="([^"]*)"/);
//                 const tvgLogoMatch = line.match(/tvg-logo="([^"]*)"/);
//                 const groupTitleMatch = line.match(/group-title="([^"]*)"/);
//                 const nameMatch = line.match(/,(.*)/);

//                 currentChannel = {
//                   tvgId: tvgIdMatch ? tvgIdMatch[1] : null,
//                   tvgLogo: tvgLogoMatch ? tvgLogoMatch[1] : null,
//                   groupTitle: groupTitleMatch ? groupTitleMatch[1] : null,
//                   name: nameMatch ? nameMatch[1] : null,
//                   link: null
//                 };
//               } else if (line.startsWith('http') || line.startsWith('https')) {
//                 currentChannel.link = line;
//                 channels.push(currentChannel);
//                 currentChannel = {};
//               }
//             });

//             console.log(channels);
//           } catch (error) {
//             console.error("The error is: ", error);
//           }
//         }
//       }>Fetch IPTV</button>

//     </>
//   )
// }

// export default App
