// тип в котором ключ стринг, а значение бул или стринг
type Mods = Record<string, boolean | string>;

// cls главный класс, mods - объект, который имеет булеан флаг, additional - массив доп. классов
export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
    ...additional,
  ].join(' ');
}
