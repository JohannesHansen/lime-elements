// These are defined by react-jsonschema-form and added
// here as interfaces for type hinting
import { ObjectFieldTemplateProps, ArrayFieldTemplateProps } from '@rjsf/core';
export {
    FieldTemplateProps,
    ObjectFieldTemplateProps,
    ArrayFieldTemplateProps,
} from '@rjsf/core';

export type TemplateProps = ObjectFieldTemplateProps | ArrayFieldTemplateProps;

export type ObjectFieldProperty = ObjectFieldTemplateProps['properties'][0];

export type ArrayFieldItem = ArrayFieldTemplateProps['items'][0];

export interface Runnable {
    run: (event: any) => void;
}
