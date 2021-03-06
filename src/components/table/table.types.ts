export interface Column<T extends object = any> {
    /**
     * Column title to be displayed
     */
    title: string;

    /**
     * Name of the field in the data
     */
    field: keyof T;

    /**
     * Function to format the value before rendering
     */
    formatter?: TableFormatter;

    /**
     * Component used to render the field value
     */
    component?: TableComponentDefinition;

    /**
     * Type of aggregator to use for the column
     */
    aggregator?: ColumnAggregatorType | ColumnAggregatorFunction<T>;
}

export type TableFormatter = (value: any, data?: object) => string;

export interface TableComponentDefinition {
    /**
     * Name of the component
     */
    name: string;

    /**
     * Properties to send to the component
     */
    props?: Record<string, any>;
}

export interface TableComponent<T extends object = any> {
    /**
     * Name of the field being rendered
     */
    field?: string;

    /**
     * Value being rendered
     */
    value?: any;

    /**
     * Data for the current row of the table
     */
    data?: T;
}

export interface ColumnSorter {
    /**
     * The column being sorted
     */
    column: Column;

    /**
     * The direction to sort on
     */
    direction: 'ASC' | 'DESC';
}

export interface TableParams {
    /**
     * The current page being set
     */
    page: number;

    /**
     * Sorters applied to the current page
     */
    sorters?: ColumnSorter[];
}

export enum ColumnAggregatorType {
    /**
     * Calculates the average value of all numerical cells in the column
     */
    Average = 'avg',

    /**
     * Displays the maximum value from all numerical cells in the column
     */
    Maximum = 'max',

    /**
     * Displays the minimum value from all numerical cells in the column
     */
    Minimum = 'min',

    /**
     * Displays the sum of all numerical cells in the column
     */
    Sum = 'sum',

    /**
     * Counts the number of non empty cells in the column
     */
    Count = 'count',
}

/**
 * Calculate an aggregated value for a column
 *
 * @param {Column} column the configuration for the column
 * @param {*[]} values list of all values to be aggregated
 * @param {T[]} data list of all objects to be aggregated
 *
 * @returns {*} the aggregated data
 */
export type ColumnAggregatorFunction<T = object> = (
    column?: Column,
    values?: any[],
    data?: T[]
) => any;
