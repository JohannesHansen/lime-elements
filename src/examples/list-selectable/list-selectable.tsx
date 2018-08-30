import { Component } from '@stencil/core';
import { ListItem } from '../../components/list/list-item';

@Component({
    tag: 'limel-example-list-selectable',
    shadow: true,
})
export class SelectableListExample {
    private items: ListItem[] = [
        { text: 'King of Tokyo', id: 1 },
        { text: 'Smash Up!', id: 2 },
        { text: 'Pandemic', id: 3 },
        { text: 'Catan', id: 4 },
        { text: 'Ticket ot Ride', id: 5 },
    ];

    public render() {
        return (
            <limel-list
                onChange={event => {
                    console.log(event.detail);
                }}
                selectable={true}
                items={this.items}
            />
        );
    }
}