import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { Button } from '../button/button.types';
import { createRandomString } from '../../util/random-string';

/**
 * A button group control is a linear set of two or more buttons.
 *
 * ## Usage
 *
 * Button groups are often used to display different views of the same thing. A
 * common example of this component is when you switch between [ Map | Transit
 * | Satellite ] views to look at an area on the map.
 *
 * In some cases, button groups may serve as quick filters as well. For example
 * a list of contacts, in which the user can switch to [ All | Favorites
 * | Frequently contacted ] can incorporate a button group to quickly filter out
 * items and display subsets of them.
 *
 * ## Layout
 *
 * Button can contain text or icons, but not both simultaneously! Within the
 * group, icon buttons will all have the same width, while each text button
 * inherits its width from its content.
 *
 * The button groups are usually placed in top headers and action bars,
 * sometimes with other elements. Since the group items will always be rendered
 * in a row, you must make sure not to have too many buttons in the group.
 * Because if the container of your button group does not get enough space to
 * fit in all its buttons, they will have to truncate their text and may appear
 * very cramped together. Always think about how your button group will appear
 * on a small screen such as phones.
 */
@Component({
    tag: 'limel-button-group',
    shadow: true,
    styleUrl: 'button-group.scss',
})
export class ButtonGroup {
    /**
     * List of buttons for the group
     */
    @Prop()
    public value: Button[] = [];

    /**
     * True if the button-group should be disabled
     */
    @Prop({ reflectToAttr: true })
    public disabled: boolean = false;

    /**
     * Dispatched when a button is selected/deselected
     */
    @Event()
    private change: EventEmitter<Button>;

    @State()
    private selectedButtonId: string;

    private radioGroupName = createRandomString();

    constructor() {
        this.renderButton = this.renderButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    public componentWillLoad() {
        this.selectedButtonId = this.value.find((button) => {
            return button.selected;
        })?.id;
    }

    public render() {
        const classes = {
            'mdc-chip-set': true,
            disabled: this.disabled,
            'mdc-chip-set--choice': true,
        };

        return (
            <div class={classes} role="grid">
                {this.value.map(this.renderButton)}
            </div>
        );
    }

    private renderButton(button: Button) {
        const classes = {
            'mdc-chip': true,
            'mdc-chip--selected': this.isButtonChecked(button),
        };
        return (
            <div class={classes} role="row">
                <span role="gridcell">
                    <input
                        type="radio"
                        name={this.radioGroupName}
                        checked={this.isButtonChecked(button)}
                        id={button.id}
                        onChange={this.onChange}
                    />
                    <label htmlFor={button.id}>
                        {this.renderContent(button)}
                    </label>
                </span>
            </div>
        );
    }

    private renderContent(button: Button) {
        if (button.icon) {
            return this.renderIcon(button);
        }
        return this.renderLabel(button);
    }

    private isButtonChecked(button: Button) {
        return button.id === this.selectedButtonId;
    }

    private renderLabel(button: Button) {
        return <span class="mdc-chip__text">{button.title}</span>;
    }

    private renderIcon(button: Button) {
        return (
            <limel-icon
                class="mdc-chip__icon"
                aria-label={button.title}
                title={button.title}
                name={button.icon}
                size="small"
                badge={true}
            />
        );
    }

    private onChange(event: Event) {
        event.stopPropagation();
        const target = event.target as HTMLInputElement;
        this.selectedButtonId = target.id;
        const button = this.value.find((item) => {
            return `${item.id}` === target.id;
        });
        this.change.emit(button);
    }
}
