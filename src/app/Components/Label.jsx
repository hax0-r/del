
const Label = ({ name }) => {
    return (
        <label htmlFor={name} className="text-white mt-6 block font-medium tracking-wide uppercase">{name}</label>
    )
}

export default Label