// Необходимо для работы экспортов из модулей
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames
    export = classNames;
}

// Необходимо для работы экспортов из картинок
declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'

// Необходимо для работы экспортов из svg
declare module '*.svg' {
    import {FunctionComponent, SVGProps} from 'react'
    const SVG: FunctionComponent<SVGProps<SVGSVGElement>>
    export default SVG
}