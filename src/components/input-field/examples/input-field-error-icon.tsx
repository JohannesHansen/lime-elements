import { Component, h, State } from '@stencil/core';
const MIN_LENGTH = 6;

@Component({
    tag: 'limel-example-input-field-error-icon',
    shadow: true,
})
export class InputFieldErrorIconExample {
    @State()
    private valueNative;
    @State()
    private valueConsumer;

    constructor() {
        this.onChangeNative = this.onChangeNative.bind(this);
        this.onChangeConsumer = this.onChangeConsumer.bind(this);
    }

    public render() {
        return [
            <limel-input-field
                label="Text Field with native validation"
                minlength={MIN_LENGTH}
                helperText="Please enter at least 6 characters!"
                value={this.valueNative}
                onChange={this.onChangeNative}
            />,
            <limel-input-field
                label="Text Field with consumer validation"
                invalid={
                    !this.valueConsumer ||
                    this.valueConsumer.length < MIN_LENGTH
                }
                helperText="Please enter at least 6 characters!"
                value={this.valueConsumer}
                onChange={this.onChangeConsumer}
            />,
        ];
    }

    private onChangeNative(event) {
        this.valueNative = event.detail;
    }
    private onChangeConsumer(event) {
        this.valueConsumer = event.detail;
    }
}
