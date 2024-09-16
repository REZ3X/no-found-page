import React from "react";

function SpotifyContainer() {
    return (
        <div className="spotify-container">
            <iframe src="https://open.spotify.com/embed/track/4Mo0vn7a03pJ19uESUrH5a?utm_source=generator&amp;theme=0"
                width="100%" height="152" allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" className="spotify-iframe w-96 tnl:w-80 pdl:w-96"
                style={{ borderRadius: '12px' }}>
            </iframe>
        </div>
    );
}

export default SpotifyContainer;