# React Charge Plug Icons
[![Coverage Status](https://coveralls.io/repos/github/binary-butterfly/react-charging-station-connector-icons/badge.svg?branch=main)](https://coveralls.io/github/binary-butterfly/react-charging-station-connector-icons?branch=main)

Icons for car charging stations under CC-0. Crafted by Iseris Design and binary butterfly GmbH for the Stadtnavi
project.  
Packed as ready to use React components.

## How to use

* Install the package using `npm install react-charging-station-connector-icons --save`
* Import the icon(s) you want as named imports from this library  
  `import {Chademo} from react-charging-station-connector-icons`
* You can now use them like this: `<Chademo variant={'solid'|'light'} subtitled={true|false}/>`.

## Available icons

The following components are available:

* `<Chademo/>`
* `<DomesticF/>`
* `<IEC603092Single/>`
* `<IEC603092SThree/>`
* `<IEC62196T1/>`
* `<IEC62196T1Combo/>`
* `<IEC62196T2/>`
* `<IEC62196T2Combo/>`
* `<TeslaS/>`

All icons are available in solid and light variants as well as with- and without subtitles.

## Vertical centering

To allow you to access and style the exported icon as directly as possible, icons may not be vertically centered by default.  
To quickly accomplish vertical centering, wrap the icon withing a `<span>` with the
styles `display: flex|inline-flex; align-items: center;`
