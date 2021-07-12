import React from 'react'

export default function Footer() {
    const footerStyle={
        position:"relative",
        top:"80vh",
        width:"100%"
    }
    return (
        <footer className="bg-dark text-light py-3 my-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; timesheet.com
            </p>
        </footer>
    )
}



