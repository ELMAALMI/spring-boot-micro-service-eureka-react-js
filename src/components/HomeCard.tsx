import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { Condidate } from '../@types/Condidate';
import * as Yup from 'yup';

export const HomeCard: React.FC = () => {
    const condidate: Condidate = { cne: '', cin: '', concourId: 0 };
    const condidateValidator = Yup.object().shape({
        cin: Yup.string().required('CIN Obligatoire'),
        cne: Yup.string().required('CNE Obligatoire'),
        concourId: Yup.number().required('Concour Obligatoire')
    });
    const formik = useFormik({
        initialValues: condidate,
        onSubmit: (values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        },
        validationSchema: condidateValidator
    });
    const {
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        getFieldProps,
        values,
        setFieldValue
    } = formik;

    return (
        <Card sx={{ width: 500 }}>
            <CardContent>
                <Typography style={{ textAlign: 'center' }} component={'h2'} variant="h5">
                    {' '}
                    New Condidates
                </Typography>

                <FormikProvider value={formik}>
                    <Form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                        style={{
                            marginTop: '6px'
                        }}
                    >
                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                autoComplete="cin"
                                type="text"
                                label="CIN"
                                {...getFieldProps('cin')}
                                error={Boolean(touched.cin && errors.cin)}
                                helperText={touched.cin && errors.cin}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                type="text"
                                label="CNE"
                                {...getFieldProps('cne')}
                                error={Boolean(touched.cne && errors.cne)}
                                helperText={touched.cne && errors.cne}
                                size="small"
                            />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Concours</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={values.concourId}
                                    label="Concours"
                                    // onChange={v => setFieldValue('concourId', v)}
                                    {...getFieldProps('concourId')}
                                    error={Boolean(touched.cin && errors.cin)}
                                    size="small"
                                    // helperText={touched.cin && errors.cin}
                                >
                                    <MenuItem value={0}>Ten</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ my: 2 }}
                        >
                            <Button fullWidth variant="contained" type="submit">
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                </FormikProvider>
            </CardContent>
        </Card>
    );
};
