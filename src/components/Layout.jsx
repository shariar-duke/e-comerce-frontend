/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Menu from "./Menu";

export default function Layout({ title = "Title", className, children }) {

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <div className="mb-3">
                {/* Menu compoent implemented */}
                <Menu />
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    );
}
