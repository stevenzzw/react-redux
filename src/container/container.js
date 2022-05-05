import CountUi from '../component/count'
import { connect } from 'react-redux'
import { creatIncrement, creatDecrement, creatIncrementAysnc } from '../redux/count_action'


function mapStateToProbs(state) {
    return { count: state.sum,
          pplSum:state.person.length
    }
}

function mapDispatchToProbs(dispatch) {
    return {
        jia: number => dispatch(creatIncrement(number)),
        jian: number => dispatch(creatDecrement(number)),
        jianAsync: (number, time) => dispatch(creatIncrementAysnc(number, time)),

    }
}

export default connect(mapStateToProbs, mapDispatchToProbs)(CountUi)