import React from 'react';

import ChademoSolidIcon from '../charging-station-connector-icons/solid/CHADEMO.svg';
import ChademoSolidSubtitledIcon from '../charging-station-connector-icons/solid-subtitled/CHADEMO.svg';
import ChademoLightIcon from '../charging-station-connector-icons/light/CHADEMO.svg';
import ChademoLightSubtitledIcon from '../charging-station-connector-icons/light-subtitled/CHADEMO.svg';
import DomesticFSolidIcon from '../charging-station-connector-icons/solid/DOMESTIC_F.svg';
import DomesticFSolidSubtitledIcon from '../charging-station-connector-icons/solid-subtitled/DOMESTIC_F.svg';
import DomesticFLightIcon from '../charging-station-connector-icons/light/DOMESTIC_F.svg';
import DomesticFLightSubtitledIcon from '../charging-station-connector-icons/light-subtitled/DOMESTIC_F.svg';
import IEC603092SingleSolidIcon from '../charging-station-connector-icons/solid/IEC_60309_2_single.svg';
import IEC603092SingleSolidSubtitledIcon
    from '../charging-station-connector-icons/solid-subtitled/IEC_60309_2_single.svg';
import IEC603092SingleLightIcon from '../charging-station-connector-icons/light/IEC_60309_2_single.svg';
import IEC603092SingleLightSubtitledIcon
    from '../charging-station-connector-icons/light-subtitled/IEC_60309_2_single.svg';
import IEC603092SThreeSolidIcon from '../charging-station-connector-icons/solid/IEC_60309_2_three.svg';
import IEC603092SThreeSolidSubtitledIcon
    from '../charging-station-connector-icons/solid-subtitled/IEC_60309_2_three.svg';
import IEC603092SThreeLightIcon from '../charging-station-connector-icons/light/IEC_60309_2_three.svg';
import IEC603092SThreeLightSubtitledIcon
    from '../charging-station-connector-icons/light-subtitled/IEC_60309_2_three.svg';
import IEC62196T1SolidIcon from '../charging-station-connector-icons/solid/IEC_62196_T1.svg';
import IEC62196T1SolidSubtitledIcon from '../charging-station-connector-icons/solid-subtitled/IEC_62196_T1.svg';
import IEC62196T1LightIcon from '../charging-station-connector-icons/light/IEC_62196_T1.svg';
import IEC62196T1LightSubtitledIcon from '../charging-station-connector-icons/light-subtitled/IEC_62196_T1.svg';
import IEC62196T1ComboLightIcon from '../charging-station-connector-icons/light/IEC_62196_T1_COMBO.svg';
import IEC62196T1ComboSolidIcon from '../charging-station-connector-icons/solid/IEC_62196_T1_COMBO.svg';
import IEC62196T1ComboSolidSubtitledIcon from '../charging-station-connector-icons/solid-subtitled/IEC_62196_T1_COMBO.svg';
import IEC62196T1ComboLightSubtitledIcon from '../charging-station-connector-icons/light-subtitled/IEC_62196_T1_COMBO.svg';
import IEC62196T2SolidIcon from '../charging-station-connector-icons/solid/IEC_62196_T2.svg';
import IEC62196T2SolidSubtitledIcon from '../charging-station-connector-icons/solid-subtitled/IEC_62196_T2.svg';
import IEC62196T2LightIcon from '../charging-station-connector-icons/light/IEC_62196_T2.svg';
import IEC62196T2LightSubtitledIcon from '../charging-station-connector-icons/light-subtitled/IEC_62196_T2.svg';
import IEC62196T2ComboSolidIcon from '../charging-station-connector-icons/solid/IEC_62196_T2_COMBO.svg';
import IEC62196T2ComboSolidSubtitledIcon
    from '../charging-station-connector-icons/solid-subtitled/IEC_62196_T2_COMBO.svg';
import IEC62196T2ComboLightIcon from '../charging-station-connector-icons/light/IEC_62196_T2_COMBO.svg';
import IEC62196T2ComboLightSubtitledIcon
    from '../charging-station-connector-icons/light-subtitled/IEC_62196_T2_COMBO.svg';
import TeslaSSolidIcon from '../charging-station-connector-icons/solid/TESLA_S.svg';
import TeslaSSolidSubtitledIcon from '../charging-station-connector-icons/solid-subtitled/TESLA_S.svg';
import TeslaSLightIcon from '../charging-station-connector-icons/light/TESLA_S.svg';
import TeslaSLightSubtitledIcon from '../charging-station-connector-icons/light-subtitled/TESLA_S.svg';
import {IconProps, IconVariantNames, IconVariants} from './types';

const showIcon = (variants: IconVariants, props: IconProps, variant: IconVariantNames, subtitled: boolean) => {
    let Component;
    if (variant === 'solid') {
        Component = subtitled ? variants['solid']['subtitled'] : variants['solid']['default'];
    } else if (variant === 'light') {
        Component = subtitled ? variants['light']['subtitled'] : variants['light']['default'];
    } else {
        throw Error('Unsupported variant: ' + variant);
    }
    return <Component/>;
};

export const Chademo = (props: IconProps) => {
    return showIcon({
        solid: {default: ChademoSolidIcon, subtitled: ChademoSolidSubtitledIcon},
        light: {default: ChademoLightIcon, subtitled: ChademoLightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const DomesticF = (props: IconProps) => {
    return showIcon({
        solid: {default: DomesticFSolidIcon, subtitled: DomesticFSolidSubtitledIcon},
        light: {default: DomesticFLightIcon, subtitled: DomesticFLightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const IEC603092Single = (props: IconProps) => {
    return showIcon({
        solid: {default: IEC603092SingleSolidIcon, subtitled: IEC603092SingleSolidSubtitledIcon},
        light: {default: IEC603092SingleLightIcon, subtitled: IEC603092SingleLightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const IEC603092SThree = (props: IconProps) => {
    return showIcon({
        solid: {default: IEC603092SThreeSolidIcon, subtitled: IEC603092SThreeSolidSubtitledIcon},
        light: {default: IEC603092SThreeLightIcon, subtitled: IEC603092SThreeLightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const IEC62196T1 = (props: IconProps) => {
    return showIcon({
        solid: {default: IEC62196T1SolidIcon, subtitled: IEC62196T1SolidSubtitledIcon},
        light: {default: IEC62196T1LightIcon, subtitled: IEC62196T1LightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const IEC62196T1Combo = (props: IconProps) => {
    return showIcon({
        solid: {default: IEC62196T1ComboSolidIcon, subtitled: IEC62196T1ComboSolidSubtitledIcon},
        light: {default: IEC62196T1ComboLightIcon, subtitled: IEC62196T1ComboLightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const IEC62196T2 = (props: IconProps) => {
    return showIcon({
        solid: {default: IEC62196T2SolidIcon, subtitled: IEC62196T2SolidSubtitledIcon},
        light: {default: IEC62196T2LightIcon, subtitled: IEC62196T2LightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const IEC62196T2Combo = (props: IconProps) => {
    return showIcon({
        solid: {default: IEC62196T2ComboSolidIcon, subtitled: IEC62196T2ComboSolidSubtitledIcon},
        light: {default: IEC62196T2ComboLightIcon, subtitled: IEC62196T2ComboLightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};

export const TeslaS = (props: IconProps) => {
    return showIcon({
        solid: {default: TeslaSSolidIcon, subtitled: TeslaSSolidSubtitledIcon},
        light: {default: TeslaSLightIcon, subtitled: TeslaSLightSubtitledIcon},
    }, props, props.variant, props.subtitled);
};
