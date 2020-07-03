import React from 'react'
import { Document, Page, Text, Image } from '@react-pdf/renderer'

const Styles = {
    title:{
        marginTop: '30px',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px'
    },
    logo:{
        marginTop: '20px',
        marginLeft: '230px',
        width: '140px',
        height: '60px'
    },
    image:{
        marginLeft: '165px',
        width: '270px',
        height: '250px',
        marginTop: '30px'
    },
    header: {
        fontSize: '18px',
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
    },
    phrase: {
        fontSize: '13px',
        color: 'grey',
        fontStyle: 'italic',
        marginTop: '45px',
        textAlign: 'center'
    }
}

const DocumentPdf = (props) =>{
    return(
        <Document>
            <Page>
                <Image style = {Styles.logo} src="/Logo.png" />
                <Text  style = {Styles.title}>
                    CERTIFICADO DE APROBACIÓN
                </Text>
                <Image style = {Styles.image} src= "/Diploma.jpg" />
                <Text style = {Styles.header}>
                    Felicitaciones a
                </Text>
                <Text style = {Styles.description}>
                    {props.course.username}
                </Text>
                <Text style = {Styles.header}>
                    por aprobar el curso
                </Text>
                <Text style = {Styles.description}>
                    {props.course.courseName}
                </Text>
                <Text style = {Styles.header}>
                    Formador
                </Text>
                <Text style = {Styles.description}>
                    {props.course.nameTeacher}
                </Text>
                <Text style = {Styles.phrase}>
                    <strong>"Lo maravilloso de aprender algo es que nadie puede arrebatárnoslo"</strong> (B.B. King)
                </Text>
            </Page>
        </Document>
    )
}

export default DocumentPdf;
