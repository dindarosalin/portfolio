const Footer = () => {
    return (
        <footer
            id="footer"
            className="
                bg-pink-light
                text-text
                font-body
            "
        >
            <div
                className="
                    mx-auto
                    max-w-content
                    px-6
                    py-8
                    text-center
                    text-sm
                    sm:px-8
                    lg:px-10
                "
            >
                <p>
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </p>

                <p className="mt-1 text-muted">
                    Made by Me ╰(*°▽°*)╯
                </p>
            </div>
        </footer>
    )
}

export default Footer