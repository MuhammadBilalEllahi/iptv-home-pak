import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const FetchButton = ({ onFetch }) => {
    const handleClick = async () => {
        try {
            const res = await fetch("https://iptv-org.github.io/iptv/countries/pk.m3u");
            const data = await res.text();


            // Parse the M3U data
            const channels = [];
            const lines = data.split('\n');
            let currentChannel = {};

            lines.forEach(line => {
                if (line.startsWith('#EXTINF:')) {
                    const tvgIdMatch = line.match(/tvg-id="([^"]*)"/);
                    const tvgLogoMatch = line.match(/tvg-logo="([^"]*)"/);
                    const groupTitleMatch = line.match(/group-title="([^"]*)"/);
                    const nameMatch = line.match(/,(.*)/);

                    currentChannel = {
                        tvgId: tvgIdMatch ? tvgIdMatch[1] : null,
                        tvgLogo: tvgLogoMatch ? tvgLogoMatch[1] : null,
                        groupTitle: groupTitleMatch ? groupTitleMatch[1] : null,
                        name: nameMatch ? nameMatch[1] : null,
                        link: null
                    };
                } else if (line.startsWith('http') || line.startsWith('https')) {
                    currentChannel.link = line;
                    channels.push(currentChannel);
                    currentChannel = {};
                }
            });

            onFetch(channels);
        } catch (error) {
            console.error("The error is: ", error);
        }
    };

    useEffect(() => {
        handleClick()
    }, [])


    return <button className="fetch-button" onClick={handleClick}>Reload</button>;
};

export default FetchButton;
