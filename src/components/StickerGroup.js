import StickerButton from "./StickerButton";

const StickerGroup = (props) => {
    const { name, stickers } = props;

    return (
        <>
            <div className='mt-5 mb-5 flex flex-row items-center relative'>
                <p className='font-semibold -rotate-90 absolute left-0 -ml-5'>{ name }</p>

                <div className='w-full mt-2 ml-14 flex flex-row flex-wrap'>
                    { stickers.map(sticker => <StickerButton key={ sticker.id } name={ sticker.name } qty={ sticker.qty } />) }
                </div>
            </div>

            <div className='bg-gray-50 w-full h-1 mb-5'></div>
        </>
    )
}

export default StickerGroup;
