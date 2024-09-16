import React from "react";
import { createRoot } from 'react-dom/client';
import "./Style/style.css";
import NoFoundPage from "./Components/NoFoundPage";

const root = createRoot(document.getElementById('root'));
root.render(<NoFoundPage/>);