import React, { useState } from 'react';
import { Container } from '@mui/system';
import { NavBar } from '../components/NavBar';
import CustomDialog from '../components/Dialog';
import { EtudiantCard } from '../components/EtudiantCard';
import {
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { School } from '@mui/icons-material';

export const EtudiantPage: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleDialog = () => setOpen(!open);
    return (
        <>
            <NavBar />
            <Container maxWidth="lg">
                <Stack direction={'row'} mt={5} justifyContent={'space-between'} sx={{ mb: 5 }}>
                    <Typography variant="h6" gutterBottom>
                        List Concours
                    </Typography>
                    <div>
                        <Button variant="contained" startIcon={<School />} onClick={handleDialog}>
                            New Etudiant
                        </Button>
                        <CustomDialog open={open} close={handleDialog} title="New Concours">
                            <EtudiantCard />
                        </CustomDialog>
                    </div>
                </Stack>
                <Stack flexDirection={'row'} mt={6} justifyContent="center">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell align="right">Nom</TableCell>
                                    <TableCell align="right">Prenom</TableCell>
                                    <TableCell align="right">CIN</TableCell>
                                    <TableCell align="right">CNE</TableCell>
                                    <TableCell align="right">Note Arabe</TableCell>
                                    <TableCell align="right">Note Math</TableCell>
                                    <TableCell align="right">Note Anglais</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody></TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Container>
        </>
    );
};
