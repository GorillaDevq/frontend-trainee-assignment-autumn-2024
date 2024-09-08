export type Mods = Record<string, boolean | string | undefined>

export function classNames(
    className: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    const resultModes = Object.entries(mods)
        .filter(([className, boolean]) => boolean === true)
        .map(([className, boolean]) => className)
        .join(' ');

    return [
        className,
        ...additional.filter(Boolean),
        resultModes,
    ].join(' ');
}
