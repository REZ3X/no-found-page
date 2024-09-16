import React from "react";

function Footer() {
    return (
        <div className="footer flex flex-col bg-[#282828] p-3 w-96 tnl:w-80 pdl:w-96">
            <p className="flex flex-row gap-3 text-base tnl:text-sm text-white">Made with <img className="w-5" src="/react.svg"/> <img className="w-5" src="/vite.svg"/><img className="w-6" src="/tailwind.svg"/></p>
            <p className="text-white text-base tnl:text-sm">© 2024 Xi4N and REZ3X. All rights reserved.</p>
        </div>
    );
}

export default Footer;