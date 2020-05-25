import { WidgetProps as RjsfWidgetProps } from '@rjsf/core';

// Extends rjsf widget prop types because the rjsf type does not include `rawErrors`
export interface WidgetProps extends RjsfWidgetProps {
    id: string;
    label: string;
    schema: any;
    value: any;
    placeholder: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    autofocus: boolean;
    onChange: (value: any) => void;
    onBlur: (id: string, value: any) => void;
    onFocus: (id: string, value: any) => void;
    options: {
        enumOptions: Array<{
            label: string;
            value: string;
        }>;
    };
    formContext: any;
    rawErrors: string[];
}
