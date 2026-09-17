const CertificationCard = ({ certificate }) => {

    const formatIssueDate = (date) => {
        if (!date) return ''

        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
        })
    }

    return (
        <div className="h-full rounded-md border border-red-dark/30 dark:border-pink-darker shadow-sm p-4 source-sans flex flex-col">

            {/* Certificate Image */}
            {certificate.certificate_image_url ? (
                <img
                    src={certificate.certificate_image_url}
                    alt={certificate.name}
                    className="w-full h-32 object-cover rounded-md mb-4"
                />
            ) : (
                <div className="w-full h-24 rounded-md border flex items-center justify-center mb-4">
                    <span className="text-xs text-gray-500">
                        Certificate
                    </span>
                </div>
            )}

            {/* Content */}
            <div className="flex-1">

                <p className="text-xs font-medium text-pink-darker">
                    {certificate.issuer}
                </p>

                <h2 className="mt-1 font-bold text-lg playfair-display leading-tight">
                    {certificate.name}
                </h2>

                {certificate.issue_date && (
                    <p className="mt-2 text-sm italic text-gray-500">
                        {formatIssueDate(certificate.issue_date)}
                    </p>
                )}

            </div>

            {/* Credential */}
            {certificate.credential_url && (
                <div className="mt-4">

                    <a
                        href={certificate.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-block
                            text-xs
                            rounded-md
                            px-3
                            py-2
                            bg-pink-darker
                            text-white
                            hover:shadow-md
                            transition
                            duration-300
                        "
                    >
                        View Credential
                    </a>

                </div>
            )}

        </div>
    )
}

export default CertificationCard