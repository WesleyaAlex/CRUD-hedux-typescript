import React from "react"
import { useFormik, FormikHelpers } from 'formik'
import { TextField, Button, Grid } from '@material-ui/core'
import { Contact, validationScheme } from '../../store/interfaces/Contact'
import './index.css'

interface ContactsFormProps {
    contact: Contact;
    submitForm: (contact: Contact) => void;
}

export const ContactsForm: React.FC<ContactsFormProps> = ({ contact, submitForm }: ContactsFormProps) => {
    const onSubmit = (contact: Contact, helper: FormikHelpers<Contact>) => {
        submitForm(contact)
        helper.resetForm();
    }

    const formik = useFormik<Contact>({
        onSubmit,
        initialValues: { ...contact },
        validationSchema: validationScheme,
        validateOnChange: false
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={12} className="grid-item">
                    <TextField variant="outlined" className="form-grid-textField full-width" label="Nome" name="name" id="inputNnme" value={formik.values.name} onChange={formik.handleChange} />
                    <span className="error-msg">{formik.errors.name}</span>
                </Grid>
                <Grid item xs={12} className="grid-item">
                    <TextField variant="outlined" label="Idade" name="age" id="inputAge" value={formik.values.age} onChange={formik.handleChange} className="full-width form-grid-textField" />
                    <span className="error-msg">{formik.errors.age}</span>
                </Grid>
                <Grid item xs={12} className="grid-item">
                    <Button type="submit" variant="contained" color="primary" className="full-width">Adicionar</Button>
                </Grid>
            </Grid>
        </form>
    )
}