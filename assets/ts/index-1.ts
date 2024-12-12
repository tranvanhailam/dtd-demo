function myName<Type>(value: Type) {
    return value;
}

myName('Lam')

const lam: <Type>(value: string) => string = myName;
