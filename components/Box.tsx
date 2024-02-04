import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({children, className}) => {
    return ( 
        <div className={twMerge(`
            bg-neutral-600
            px-3
            py-5
        `,
            className
        )}>
            {children}
        </div>
     );
}
 
export default Box;