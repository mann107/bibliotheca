export const Button = (props: React.PropsWithChildren) => {
    return (
        <button className='border py-2 px-3 rounded-lg font-medium text-sm'><span>{props.children}</span></button>
    );
}