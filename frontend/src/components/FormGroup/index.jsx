import PropTypes from "prop-types"
import * as SC from "./styles"

export function FormGroup({ children }) {
  return <SC.Container>{children}</SC.Container>
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
}
