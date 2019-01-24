export class Generator {
    static uuid: number = 0;

    private constructor() {}

    static getId(): number {
        Generator.uuid++;
        return Generator.uuid;
    }

    static reset(): void {
        Generator.uuid = 0;
    }

}