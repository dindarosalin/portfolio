import Button from './button'

const CertificationCard = ({ certificate }) => {

    const formatIssueDate = (date) => {
        if (!date) return ''

        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
        })
    }

    return (
        <div
            className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-md
                border
                border-border
                bg-surface
                p-2
                font-body
                shadow-soft
            "
        >
            {/* Certificate Image */}
            <div className="h-32 w-full shrink-0">
                {certificate.certificate_image_url ? (
                    <img
                        src={certificate.certificate_image_url}
                        alt={certificate.name}
                        className="
                            h-full
                            w-full
                            rounded-sm
                            object-cover
                        "
                    />
                ) : (
                    <div
                        className="
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            rounded-sm
                            border
                            border-border
                            bg-pink-light
                        "
                    >
                        <span className="text-xs text-muted">
                            Certificate
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="mt-3 flex flex-1 flex-col">

                {/* Issuer */}
                <p
                    className="
                        text-xs
                        font-medium
                        text-pink-dark
                    "
                >
                    {certificate.issuer}
                </p>

                {/* Certificate Name */}
                <h3
                    className="
                        mt-1
                        min-h-[3rem]
                        font-heading
                        text-lg
                        font-bold
                        leading-tight
                        text-text
                    "
                >
                    {certificate.name}
                </h3>

                {/* Issue Date */}
                {certificate.issue_date && (
                    <p
                        className="
                            mt-2
                            text-sm
                            font-light
                            italic
                            text-muted
                        "
                    >
                        {formatIssueDate(
                            certificate.issue_date
                        )}
                    </p>
                )}
            </div>

            {/* Credential */}
            {certificate.credential_url && (
                <div className="mt-3">
                    <Button href={certificate.credential_url}>
                        View Credential
                    </Button>
                </div>
            )}
        </div>
    )
}

export default CertificationCard