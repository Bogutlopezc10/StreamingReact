import React from 'react'
import DocumentPdf from '../components/DocumentPdf'
import { PDFDownloadLink} from '@react-pdf/renderer'

class CreatePdf extends React.Component{

    render(){
        return(
            <div>
                <PDFDownloadLink document={<DocumentPdf course = {this.props.course}/>} fileName= {`${this.props.course.courseName}.pdf`} className="btn mr-1 course-button">
                    {({ loading }) => (loading ? (
                        <div>
                            <p className="d-inline">CARGANDO</p>
                            <i className="d-inline far fa-file-pdf ml-2 mt-2"></i>
                        </div>
                    ) : (
                        <div>
                            <p className="d-inline">CERTIFICADO</p>
                            <i className="d-inline far fa-file-pdf ml-2 mt-2"></i>
                        </div>
                    ))}
                </PDFDownloadLink>
            </div>
        )
    }
}

export default CreatePdf;