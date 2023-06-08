import PropTypes from "prop-types"
import * as SC from "./styles"

export function FormGroup({ children, error }) {
  return (
    <SC.Container>
      {children}
      {error && <small>{error}</small>}
    </SC.Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
}
FormGroup.defaultProps = {
  error: null,
}
