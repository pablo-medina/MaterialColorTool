class ClassNameBuilder {
    #classes: string[];

    constructor(value: string) {
        const classes: string[] = [];

        value.split(' ').forEach(value => { classes.push(value) });

        this.#classes = classes;
    }

    add = (value: string): ClassNameBuilder => {
        value.split(' ').forEach(value => { this.#classes.push(value) });
        return this;
    }

    addIf = (value: string, condition: boolean): ClassNameBuilder => {
        if (condition === true) {
            this.add(value);
        }
        return this;
    }

    build = (): string => {
        return this.#classes.join(' ');
    }
}

export default ClassNameBuilder;
