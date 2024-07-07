// Создаст объект, в котором будет ключ - string, значение - boolean | string
type Mods = Record<string, boolean | string>

// Функция для работы с классами в стилях
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}