import React from "react";
import ButtonContainer from "./ButtonContainer";
import Header from "./Header";
import SpotifyContainer from "./SpotifyContainer";
import Footer from "./Footer";

function AllItem() {
    return (
        <div className="all-item flex flex-col items-center gap-3">
            <Header/>
            <SpotifyContainer/>
            <ButtonContainer/>
            <Footer/>
        </div>
    );
}

export default AllItem;