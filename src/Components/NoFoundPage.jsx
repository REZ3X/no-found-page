import React from "react";
import AllItem from "./AllItem";
import AstolfoImage from "./AstolfoImage";

function NoFoundPage() {
    return (
        <div className="no-found-page flex flex-row pdl:flex-col-reverse justify-center items-center gap-10 tnl:gap-3 pdl:gap-0">
            <AstolfoImage/>
            <AllItem/>
        </div>
    );
}

export default NoFoundPage;