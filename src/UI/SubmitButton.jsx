const SubmitButton = ({ isValid, isSubmitting }) => {
    return (
        <button
            disabled={!isValid || isSubmitting}
            type="submit"
            className="bg-yellow-400 w-full py-2 font-bold rounded md:col-start-2 font-barlow text-gray-900 cursor-pointer disabled:opacity-35 disabled:cursor-auto"
        >
            {isSubmitting ? "Siparişiniz Alınıyor..." : "Sipariş Ver"}
        </button>
    )
}

export default SubmitButton;
