  import React from 'react'
  import OptionCreateContainer from '../../containers/options/OptionCreateContainer'

  const OptionCreatePage = (props) => {

        return(
            <div className="main-container">
                <OptionCreateContainer 
                    courseName={props.match.params.courseName}
                    courseId = {props.match.params.courseId}
                    questionId = {props.match.params.questionId}
                />
            </div>
        )
  }

  export default OptionCreatePage;