// import { Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { Typography, makeStyles } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

export const mergeStyle = (...styles: any) => {
    return clsx(...styles);
};

const FontWeightCollection = {
    regular_400: {
        fontWeight: 400,
    },
    medium_500: {
        fontWeight: 500,
    },
    semi_bold_600: {
        fontWeight: 600,
    },
    bold_700: {
        fontWeight: 700,
    },
    extra_bold_800: {
        fontWeight: 800,
    },
} as const;
type FontWeightKeys = keyof typeof FontWeightCollection;

const FontSizeCollection = {
    bike_50: {
        fontSize: '0.625rem',
        lineHeight: '1rem',
        letterSpacing: '0.05rem',
    },
    moped_75: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
        letterSpacing: '0.045rem',
    },
    motorcycle_90: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '0.01rem',
    },
    car_100: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.01rem',
    },
    hatchback_125: {
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.01rem',
    },
    suv_150: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        letterSpacing: '0.0075rem',
    },
    truck_175: {
        fontSize: '1.75rem',
        lineHeight: '2.5rem',
    },
    van_225: {
        fontSize: '2.25rem',
        lineHeight: '3rem',
    },
    bus_350: {
        fontSize: '3.5rem',
        lineHeight: '4.5rem',
    },
    semi_450: {
        fontSize: '4.5rem',
        lineHeight: '7rem',
    },
};

type FontSizeKeys = keyof typeof FontSizeCollection;
type TextColor = "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error" | undefined
type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'| 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption'
interface UiTextProps {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Different types of styled text based on size.
     */
    variant?: FontSizeKeys;
    /**
     * Different types of supported font weights.
     */
    weight?: FontWeightKeys;
    /**
     * Style object.
     */
    style?: React.CSSProperties;
    className?: string | undefined;
    /**
     * Text Color Supported as per Material Ui Typography Text Color
     */
    textColor?: TextColor,
    typographyVariant? : TypographyVariants
    textAlign?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    component?: React.ElementType<any>
}

const styles = makeStyles(() => ({
    ...FontWeightCollection,
    ...FontSizeCollection,
}));

//TODO: Support for Inter font
export function UiText({
    children,
    variant = 'car_100',
    weight = 'regular_400',
    style,
    className,
    textColor,
    textAlign,
    typographyVariant,
    component
}: UiTextProps) {
    const classes = styles();

    return (
        <Typography
            className={mergeStyle(classes[variant], classes[weight], className)}
            style={style}
            color={textColor}
            variant={typographyVariant}
            align={textAlign}
            {...(component ? {component: component} : '')}
        >
            {children}
        </Typography>
    );
}

