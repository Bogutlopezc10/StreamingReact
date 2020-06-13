import React from 'react'
import { Document, Page, Text, Image } from '@react-pdf/renderer'

const Styles = {
    title:{
        marginTop: '80px',
        color: 'rgb(0, 83, 133)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image:{
        marginLeft: '165px',
        width: '270px',
        height: '250px',
        marginTop: '60px'
    },
    header: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: '50px',
        textAlign: 'center'
    },
    description: {
        fontSize: '15px',
        color: 'grey',
        fontStyle: 'italic',
        marginTop: '15px',
        textAlign: 'center'
    }
}

const DocumentPdf = (props) =>{
    return(
        <Document>
            <Page>
                <Text  style = {Styles.title}>
                    CERTIFICADO DE APROBACIÓN
                </Text>
                <Image style = {Styles.image} src= {props.course.photo} />
                <Text style = {Styles.header}>
                    Felicitaciones a:
                </Text>
                <Text style = {Styles.description}>
                    {props.course.username}
                </Text>
                <Text style = {Styles.header}>
                    por aprobar el curso:
                </Text>
                <Text style = {Styles.description}>
                    {props.course.courseName}
                </Text>
                <Text style = {Styles.header}>
                    Formador:
                </Text>
                <Text style = {Styles.description}>
                    {props.course.nameTeacher}
                </Text>
            </Page>
        </Document>
    )
}

export default DocumentPdf;