import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormInput = ({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    icon,
    textarea = false,
    required = false,
    showLabel = true,
}) => {
    const baseClassName = `
        block
        w-full
        rounded-md
        border
        border-border
        bg-background
        py-3
        pe-3
        ps-10
        text-sm
        text-text
        shadow-soft
        placeholder:text-muted
        outline-none
        transition
        duration-300
        focus:border-pink-dark
        focus:ring-2
        focus:ring-pink-primary
    `

    return (
        <div>
            {showLabel && (
                <label
                    htmlFor={id}
                    className="
                        mb-1.5
                        block
                        text-sm
                        font-medium
                        text-text
                    "
                >
                    {label}
                </label>
            )}

            {!showLabel && (
                <label
                    htmlFor={id}
                    className="sr-only"
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {textarea ? (
                    <textarea
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className={`
                            ${baseClassName}
                            resize-none
                        `}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className={baseClassName}
                    />
                )}

                {icon && (
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-y-0
                            start-0
                            flex
                            items-center
                            ps-3
                        "
                    >
                        <FontAwesomeIcon
                            icon={icon}
                            className="text-pink-primary"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormInput