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
}

export const MyLabel = ({ 
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor
 } : MyLabelProps) => {
  return (
    <span 
      className = {`label ${ size } text-${color}`}
      style={{ color: fontColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  );
};
