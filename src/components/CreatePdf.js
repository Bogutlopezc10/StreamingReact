import React from 'react'
import jsPDF from 'jspdf'

class CreatePdf extends React.Component{
    
    downloadPdf = () => {
               const {course} = this.props;

               var doc = new jsPDF('p', 'pt');
        
               doc.text(20, 20, `${course.courseName}`)

               doc.setFont('courier')
               doc.setFontType('normal')
               doc.text(20, 50, `Felicitaciones,culminaste el curso satisfactoriamente`)
               doc.text(20, 80, `Formador: ${course.nameTeacher} ${course.lastNameTeacher}`)
               
               // Save the Data
               doc.save(`${course.courseName}`)
    }
    render(){
        return(
            <button onClick = {this.downloadPdf} className="btn course-button">
                <div>
                    <p className="d-inline">CERTIFICADO</p>
                    <i className="d-inline far fa-file-pdf ml-2 mt-2"></i>
                </div>
            </button>
        )
    }
}

export default CreatePdf;