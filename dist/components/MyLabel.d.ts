/// <reference types="react" />
import './milabel.css';
export interface MyLabelProps {
    /**
     * This is the message to show on the label
     */
    label: string;
    /**
     * This is the size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Convert the text to upper case
     */
    allCaps?: boolean;
    /**
     * Set the color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * What color label to use
     */
    fontColor?: string;
    /**
   * What background color to use for label
   */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
