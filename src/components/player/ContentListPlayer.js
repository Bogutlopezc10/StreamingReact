import React from 'react'
import ContentPlayer from '../../components/player/ContentPlayer'

class ContentListPlayer extends React.Component{

    render(){
        return(
            <>
                <div>
                    <div className="row" style={{ marginLeft: "0px"}}>
                        { this.props.contents.map( content =>
                            <ContentPlayer 
                                key={content.id} 
                                content={content}
                                userContents = {this.props.userContents}
                                onClickCurrentContentPlayer= {this.props.onClickCurrentContentPlayer}
                            />
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default ContentListPlayer;