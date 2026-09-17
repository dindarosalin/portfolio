const Footer = () => {
    return (
        <section
            id="footer"
            className="bg-pink-light text-pink-darker dark:bg-pink-darker dark:text-white"
        >
            <div className="container mt-8 py-8 text-center text-sm source-sans">
                <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
                <p>Made by Me ╰(*°▽°*)╯</p>
            </div>
        </section>
    )
}

export default Footer