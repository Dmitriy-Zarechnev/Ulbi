// Необходимо для работы экспортов из модулей
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames
    export = classNames;
}