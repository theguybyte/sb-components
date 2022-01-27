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

export const MyLabel = ({ 
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor,
  backgroundColor = 'transparent'
 } : MyLabelProps) => {
  return (
    <span 
      className = {`label ${ size } text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  );
};


export default MyLabel;