export interface IStyledButton {
    text: string;
}
const StyledButton = ({ text }: IStyledButton) => {
    return (
        <button
            className={
                'rounded bg-blue-500 p-2 text-xs text-white ring-2 transition-all hover:bg-white hover:text-blue-500 md:text-base'
            }
        >
            {text}
        </button>
    );
};

export default StyledButton;
