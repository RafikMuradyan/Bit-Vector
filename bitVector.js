class BitVector {
    m_container;

    constructor() {
        this.m_container = [0];
    }

    checkValidate(position) {
        return position > this.m_container.length - 1 ? false : true;
    }

    clear() {
        this.m_container = [0];
    }

    size() {
        return this.m_container.length * 32;
    }

    getValue(position) {
        if (this.checkValidate(position)) {
            throw new Error("RangeError");
        }
        const byteIndex = Math.floor(position / 32);
        const bitIndex = position % 32;

        return Boolean(this.m_container[byteIndex] & (1 << bitIndex));
    }

    setValue(position, value) {
        const byteIndex = Math.floor(position / 32);
        const bitIndex = position % 32;

        if (!this.checkValidate(position)) {
            for(let i = 0; i < byteIndex; ++i){
                this.m_container.push(0);
            }
        }
        this.m_container[byteIndex] = this.m_container[byteIndex] ^ Boolean(value) << bitIndex;
    }
}

let customVector = new BitVector;