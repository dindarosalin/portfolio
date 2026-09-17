const SectionTitle = ({ title }) => {
    return (
        <div className="p-2 border rounded-md border-red-dark dark:border-pink-primary">
            <h2 className="text-3xl playfair-display font-bold">
                {title}
            </h2>
        </div>
    )
}

export default SectionTitle