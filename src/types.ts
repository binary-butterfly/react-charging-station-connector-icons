import {FunctionComponent, SVGAttributes} from 'react';

export type IconVariantNames = 'solid'|'light';

export type IconVariants = {
    solid: {
        subtitled: FunctionComponent<SVGAttributes<SVGElement>>,
        default: FunctionComponent<SVGAttributes<SVGElement>>,
    },
    light: {
        subtitled: FunctionComponent<SVGAttributes<SVGElement>>,
        default: FunctionComponent<SVGAttributes<SVGElement>>,
    }
}

export type IconProps = {
    variant: IconVariantNames,
    subtitled: boolean,
};
