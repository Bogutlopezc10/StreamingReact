import React from 'react'
import ContentPlayer from '../../components/player/ContentPlayer'

class ContentListPlayer extends React.Component{

    render(){
        return(
            <>
                <div className="container border pt-3 arrow-group">
                    <div className="row">
                        { this.props.contents.map( content =>
                            <ContentPlayer 
                                key={content.id} 
                                content={content} 
                            />
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default ContentListPlayer;