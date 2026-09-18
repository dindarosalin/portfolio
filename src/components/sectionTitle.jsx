const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="rounded-md p-2 text-center shadow-soft">
            <h2 className="font-heading text-3xl font-bold text-text">
                {title}
            </h2>

            {subtitle && (
                <h3 className="mt-1 font-body text-lg text-muted">
                    {subtitle}
                </h3>
            )}
        </div>
    )
}

export default SectionTitle