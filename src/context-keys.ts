type Value = ValuePrimitive | ValueArray | ValueObject | ValueDynamic
type ValuePrimitive = null | boolean | number | string
type ValueArray = ValueStatic[]
type ValueObject = {
    [key: string]: ValueStatic
}
type ValueDynamic = () => ValueStatic
type ValueStatic = ValuePrimitive | ValueArray | ValueObject
type Values = Record<string, Value>
type Key = string
type Keys = Record<string, Value | undefined>
type Expr = string
type ExprFN = () => boolean
type ExprData = {
    expression: Expr
    keys: Key[]
    fn: ExprFN
}
type ChangeAllHandler = () => void
type ChangeHandler = (value: boolean) => void
type ChangeHandlerData = {
    handler: ChangeHandler
    value: boolean
}
type ChangeHandlersTree = Record<Key, Record<Expr, ChangeHandlerData[]>>
type Disposer = () => void
type Matcher = (
    quasis: TemplateStringsArray,
    ...re: (string | RegExp | (() => string | RegExp))[]
) => any
type Parser = (src: string) => string | undefined

declare class ContextKeys {
    private keys
    private handlers
    private handlersAll
    private handlersTree
    private scheduledKeys
    private scheduledId?
    private getBound
    constructor(keys?: Keys)
    has(key: any): boolean
    add(key: Key, value: Value): void
    add(keys: Keys): void
    set(key: Key, value: Value): void
    set(keys: Keys): void
    register(key: Key, value: Value): Disposer
    register(keys: Keys): Disposer
    remove(key: Key): void
    remove(keys: Key[]): void
    remove(keys: Keys): void
    reset(): void
    get(key: Key): Value | undefined
    get(keys: Key[]): Values
    get(): Values
    eval(expression: Expr): boolean
    private scheduleChange
    private scheduleClear
    private scheduleTrigger
    onChange(handler: ChangeAllHandler): Disposer
    onChange(expression: Expr, handler: ChangeHandler): Disposer
}

export { ContextKeys }
