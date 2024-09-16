import React from "react";
import LinksWebButton from "./LinksWebButton";
import OldWebButton from "./OldWebButton";
import BlogWebButton from "./BlogWebButton";

function ButtonContainer() {
    return (
        <div className="button-container justify-evenly flex flex-row bg-[#282828] p-3 w-96 tnl:w-80 text-white tnl:text-xs pdl:w-96 pdl:text-base">
            <OldWebButton/>
            <LinksWebButton/>
            <BlogWebButton/>
        </div>
    );
}

export default ButtonContainer;