import { Deserializable } from '../interfaces/deserializable';

export class PhoneBook implements Deserializable {
    private id: number;
    private houseNumber: string;
    private mobileNumber?: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    getId() {
        return this.id;
    }

    getHouseNumber() {
        return this.houseNumber;
    }

    getMoibleNumber() {
        return this.mobileNumber;
    }

    getNumbers() {
        let numbers = [];
        if (this.houseNumber) {
            numbers.push(this.houseNumber);
            if (this.mobileNumber) {
                numbers.push(this.mobileNumber);
            }
        }
        return numbers;
    }

    setHouseNumber(number) {
        this.houseNumber = number;
    }

    setMobileNumber(number) {
        this.mobileNumber = number;
    }
}
