const StickerButton = (props) => {
    const { name, qty } = props;
    return (
        <button
            className='bg-gray-100 text-sm w-12 h-16 px-2 mr-2.5 mb-2'
        >
            { name }
            <br />
            <span className="text-xs">({ qty })</span>
        </button>
    )
}

export default StickerButton;
