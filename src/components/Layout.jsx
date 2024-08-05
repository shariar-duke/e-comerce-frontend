/* eslint-disable react/prop-types */
import { useEffect } from "react"
export default function Layout({ title = "Title", className, children }) {

    useEffect(() => {
        document.title = title
    }, [])
    return (
        <div >
            <div className="mb-3">
                <h3>Menu</h3>
            </div>

            <div className={className}>
                {children}
            </div>
        </div>
    )
}
