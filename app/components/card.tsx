import React, { Children, ReactElement, ReactNode, isValidElement, useContext } from 'react';
import { ThemeContext } from "../Contexts";
import { IconType } from 'react-icons/lib';

export function CardTitle({children}: {children: React.ReactNode}) {
    return(
        <>{children}</>
    );
}

export function CardSubTitle({children}: {children: React.ReactNode}) {
    return(
        <>{children}</>
    );
}

export function CardActions({children, xPos}: {children: React.ReactNode, xPos: "left" | "right"}) {
    return(
        <>{children}</>
    );
}

export default function Card(
    {children, variant, rounded}:
    {
        children: React.ReactNode,
        variant?: "raised" | "outlined" | "flat",
        rounded?: string,
    }
) {
    const theme = useContext(ThemeContext);

    let title;
    let subTitle;
    let content: ReactElement[] = [];
    let actionsLeft: ReactNode[] = [];
    let actionsRight: ReactNode[] = [];

    Children.forEach(children, (child, i) => {
        if (!isValidElement(child)) return;

        switch (child.type) {
            case CardTitle:
                title = child;
                break;
            case CardSubTitle:
                subTitle = child;
                break;
            case CardActions: {
                if (child.props.xPos === "left") {
                    actionsLeft.push(child);
                    break;
                } else if (child.props.xPos === "right") {
                    actionsRight.push(child);
                    break;
                }
            }
            default:
                content.push(child);
                break;
        }
    });

    switch (variant) {
        case "raised":
            return(
                <div
                    className={`
                        w-full
                        h-full
                        p-5 ${theme.bg.figure} shadow-xl 
                        ${rounded ? rounded : "rounded-xl" 
                        }
                        flex flex-col gap-4
                    `}
                >
        
                    {
                        !!title && !subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                        </div>
                        
                    }
        
                    {
                        !!title && !!subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                            <span className={`${theme.text.main} text-base sm:text-lg text-start`}>{!!subTitle && subTitle}</span>
        
                        </div>
                        
                    }
        
                    {content}
        
                    {
                        !!actionsLeft.length && !actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-start'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsRight.length && !actionsLeft.length &&
                        <div className='flex flex-col sm:flex-row justify-end'>
        
                            {Children.map(actionsRight, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsLeft.length && !!actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-between gap-2'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                            {Children.map(actionsRight, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                </div>
            );
        case "outlined":
            return(
                <div
                    className={`
                        w-full
                        h-full
                        border-[1px]
                        ${theme.border}
                        p-5
                        ${rounded ? rounded : "rounded-xl"}
                        flex flex-col gap-4
                    `}
                >
        
                    {
                        !!title && !subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                        </div>
                        
                    }
        
                    {
                        !!title && !!subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                            <span className={`${theme.text.main} text-base sm:text-lg text-start`}>{!!subTitle && subTitle}</span>
        
                        </div>
                        
                    }
        
                    {content}
        
                    {
                        !!actionsLeft.length && !actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-start'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsRight.length && !actionsLeft.length &&
                        <div className='flex flex-col sm:flex-row justify-end'>
        
                            {Children.map(actionsRight, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsLeft.length && !!actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-between gap-2'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                            {Children.map(actionsRight, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                </div>
            );
        case "flat":
            return(
                <div
                    className={`
                        w-full
                        h-full
                        p-5 ${theme.bg.figure} 
                        ${rounded ? rounded : "rounded-xl"}
                        flex flex-col gap-4
                    `}
                >
        
                    {
                        !!title && !subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                        </div>
                        
                    }
        
                    {
                        !!title && !!subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                            <span className={`${theme.text.main} text-base sm:text-lg text-start`}>{!!subTitle && subTitle}</span>
        
                        </div>
                        
                    }
        
                    {content}
        
                    {
                        !!actionsLeft.length && !actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-start'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsRight.length && !actionsLeft.length &&
                        <div className='flex flex-col sm:flex-row justify-end'>
        
                            {Children.map(actionsRight, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsLeft.length && !!actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-between gap-2'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                            {Children.map(actionsRight, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                </div>
            );
        default:
            return(
                <div 
                    className={`
                        w-full
                        h-full
                        p-5 ${theme.bg.figure} shadow-xl 
                        ${rounded ? rounded : "rounded-xl"}
                        flex flex-col gap-4
                    `}
                >
        
                    {
                        !!title && !subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                        </div>
                        
                    }
        
                    {
                        !!title && !!subTitle &&
                        <div className='flex flex-col'>
        
                            <span className={`${theme.text.main} text-xl sm:text-2xl text-start`}>{!!title && title}</span>
        
                            <span className={`${theme.text.main} text-base sm:text-lg text-start`}>{!!subTitle && subTitle}</span>
        
                        </div>
                        
                    }
        
                    {content}
        
                    {
                        !!actionsLeft.length && !actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-start'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsRight.length && !actionsLeft.length &&
                        <div className='flex flex-col sm:flex-row justify-end'>
        
                            {Children.map(actionsRight, child =>
                                <div className="Row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                    {
                        !!actionsLeft.length && !!actionsRight.length &&
                        <div className='flex flex-col sm:flex-row justify-between gap-2'>
        
                            {Children.map(actionsLeft, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                            {Children.map(actionsRight, child =>
                                <div className="flex flex-col sm:flex-row">
                                    {child}
                                </div>
                            )}
        
                        </div>
                    }
        
                </div>
            );
    }
  }