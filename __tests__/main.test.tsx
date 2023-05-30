import React from 'react';
import {
    Chademo,
    DomesticF,
    IEC603092Single,
    IEC603092SThree,
    IEC62196T1,
    IEC62196T1Combo,
    IEC62196T2,
    IEC62196T2Combo,
    NACS,
    TeslaS,
} from '../src/main';
import {render} from '@testing-library/react';

describe('react-charging-station-connector-icons', () => {
    it('Can render a light non subtitled ChaDeMo icon', () => {
        const rendered = render(<Chademo variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled ChaDeMo icon', () => {
        const rendered = render(<Chademo variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled ChaDeMo icon', () => {
        const rendered = render(<Chademo variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled ChaDeMo icon', () => {
        const rendered = render(<Chademo variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled DomesticF icon', () => {
        const rendered = render(<DomesticF variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled DomesticF icon', () => {
        const rendered = render(<DomesticF variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled DomesticF icon', () => {
        const rendered = render(<DomesticF variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled ChaDeMo icon', () => {
        const rendered = render(<DomesticF variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled IEC603092Single icon', () => {
        const rendered = render(<IEC603092Single variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled IEC603092Single icon', () => {
        const rendered = render(<IEC603092Single variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled IEC603092Single icon', () => {
        const rendered = render(<IEC603092Single variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled IEC603092Single icon', () => {
        const rendered = render(<IEC603092Single variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled IEC603092SThree icon', () => {
        const rendered = render(<IEC603092SThree variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled IEC603092SThree icon', () => {
        const rendered = render(<IEC603092SThree variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled IEC603092SThree icon', () => {
        const rendered = render(<IEC603092SThree variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled IEC603092SThree icon', () => {
        const rendered = render(<IEC603092SThree variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled IEC62196T1 icon', () => {
        const rendered = render(<IEC62196T1 variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled IEC62196T1 icon', () => {
        const rendered = render(<IEC62196T1 variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled IEC62196T1 icon', () => {
        const rendered = render(<IEC62196T1 variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled IEC62196T1 icon', () => {
        const rendered = render(<IEC62196T1 variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled IEC62196T1Combo icon', () => {
        const rendered = render(<IEC62196T1Combo variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled IEC62196T1Combo icon', () => {
        const rendered = render(<IEC62196T1Combo variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled IEC62196T1Combo icon', () => {
        const rendered = render(<IEC62196T1Combo variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled IEC62196T1Combo icon', () => {
        const rendered = render(<IEC62196T1Combo variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled IEC62196T2 icon', () => {
        const rendered = render(<IEC62196T2 variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled IEC62196T2 icon', () => {
        const rendered = render(<IEC62196T2 variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled IEC62196T2 icon', () => {
        const rendered = render(<IEC62196T2 variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled IEC62196T2 icon', () => {
        const rendered = render(<IEC62196T2 variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled IEC62196T2Combo icon', () => {
        const rendered = render(<IEC62196T2Combo variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled IEC62196T2Combo icon', () => {
        const rendered = render(<IEC62196T2Combo variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled IEC62196T2Combo icon', () => {
        const rendered = render(<IEC62196T2Combo variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled IEC62196T2Combo icon', () => {
        const rendered = render(<IEC62196T2Combo variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled TeslaS icon', () => {
        const rendered = render(<TeslaS variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled TeslaS icon', () => {
        const rendered = render(<TeslaS variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled TeslaS icon', () => {
        const rendered = render(<TeslaS variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled TeslaS icon', () => {
        const rendered = render(<TeslaS variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light non subtitled NACS icon', () => {
        const rendered = render(<NACS variant="light" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a light subtitled NACS icon', () => {
        const rendered = render(<NACS variant="light" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid non subtitled NACS icon', () => {
        const rendered = render(<NACS variant="solid" subtitled={false}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Can render a solid subtitled NACS icon', () => {
        const rendered = render(<NACS variant="solid" subtitled={true}/>);
        expect(rendered).toMatchSnapshot();
    });

    it('Throws an error for unknown variants', () => {
        const spy = jest.spyOn(global.console, 'error').mockImplementation(() => null);
        const testFunc = () => {
            // @ts-ignore
            return render(<DomesticF variant="banana" subtitled={false}/>);
        };

        expect(testFunc).toThrowError('Unsupported variant: banana');
        expect(spy).toHaveBeenCalled();
    });
});
