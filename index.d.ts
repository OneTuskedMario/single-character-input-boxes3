declare module "react-individual-character-input-boxes3" {
  import * as React from "react";

  export interface RICIBsProps {
    amount?: number;
    autoFocus?: boolean;
    handleOutputString: (string) => void;
    inputProps?: any[];
    inputRegExp?: RegExp;
    password?: boolean;
  }

  class RICIBs extends React.Component<RICIBsProps, any> {}

  export default RICIBs;
}
