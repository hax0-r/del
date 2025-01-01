
const Input = ({ type, name }) => {
    return (
        <>
            <input type={type} autoComplete={name} id={name} name={name} className="w-full placeholder:capitalize p-3.5 mt-1 rounded-lg focus:border-zinc-600 border" required placeholder={`Enter Your ${name}`} />
        </>
    )
}

export default Input