// @flow

import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = state => ({
  styleSheet: state.styleSheet.get('rawText'),
});

export default connect(mapStateToProps)(Result);
