export interface IGridItem {
    texts?: string[];
    titles?: string[];
    cols?: string;
}

const GridItem = ({ texts, titles, cols }: IGridItem) => {
    return (
        <>
            <div className={`grid ${cols} mb-2 text-[13px] font-bold text-blue-500 underline`}>
                {titles?.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </div>
            <div className={`grid ${cols} text-[13px]`}>
                {texts?.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </div>
        </>
    );
};

export default GridItem;
