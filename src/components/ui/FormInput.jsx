const FormInput = ({ ...props }) => {
    return (
        <div>
            <input
                {...props}
                className="w-full px-6 py-4 bg-transparent bg-opacity-50 border border-white/30 rounded-md text-white outline-none"
                required
            />
        </div>

    )
}

export default FormInput